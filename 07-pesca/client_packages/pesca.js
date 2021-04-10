
mp.gui.chat.colors = true;

var cebo = -1;
var prob = -1;

var intervalo_pesca = null;

var temporizador_teclaU = null;
var temporizador_escapa = null;

var abrir_cef_pesca = false;
var cef_pesca = null;

const iniciar_intervalo_pesca = () => {
    if (!intervalo_pesca && cebo > 0 && prob > 0) {
        intervalo_pesca = setInterval(() => {
            if (!abrir_cef_pesca && !cef_pesca) {
                if (cebo == 0) {
                    mp.gui.chat.push("!{#e65050}Te has quedado sin cebo.");
                    mp.events.callRemote('pesca:detener');
                    return;
                }

                mp.events.callRemote("pesca:comprobar_valor", Math.floor(Math.random() * 100));
            }
        }, 60*1000 / prob);
    }
};

const cerrar_cef_pesca = () => {
    if (cef_pesca) {
        cef_pesca.destroy();
        cef_pesca = null;
    }

    mp.gui.chat.show(true);
    mp.game.ui.displayRadar(true);
};

mp.events.add({
    'pesca:iniciar': (_cebo, _probabilidad) => {
        cebo = _cebo;
        prob = _probabilidad;

        mp.gui.chat.push("!{#3498eb}Comienzas a pescar.!{white} Dispones de " + cebo + " cebos. Atento a las notificaciones del minimapa. Utiliza /fpesca para finalizar en cualquier momento.");

        iniciar_intervalo_pesca();
    },
    'pesca:puede_abrir_cef': () => {
        abrir_cef_pesca = true;

        if (!temporizador_teclaU) {
            temporizador_teclaU = setTimeout(() => {
                abrir_cef_pesca = false;

                if (temporizador_teclaU)
                    clearTimeout(temporizador_teclaU);
                temporizador_teclaU = null;
            }, 15*1000);
        }

        temporizador_escapa = setTimeout(() => {
            mp.gui.chat.push("!{#e65050} Has esperado demasiado y el pez se ha escapado.");
            mp.events.call("pesca:fallida");

            abrir_cef_pesca = false;
        }, 15*1000);
    },
    'pesca:mostrar_cef': () => {
        if (cef_pesca && mp.browsers.exists(cef_pesca)) {
            cef_pesca.destroy();
            cef_pesca = null;
        }

        cef_pesca = mp.browsers.new('package://pesca.html');

        abrir_cef_pesca = false;

        mp.gui.cursor.visible = false;
        mp.gui.chat.show(false);
        mp.game.ui.displayRadar(false);

        clearTimeout(temporizador_escapa);
        clearTimeout(temporizador_teclaU);
    },
    'pesca:fallida': () => {
        cerrar_cef_pesca();
    },
    'pesca:cazar': () => {
        cebo--;
        mp.events.callRemote('pesca:cazar');
        cerrar_cef_pesca();
    },
    'pesca:detener': () => {
        if (intervalo_pesca != null) {
            cebo = -1;
            prob = -1;

            clearInterval(intervalo_pesca);
            intervalo_pesca = null;

            if (temporizador_teclaU != null) {
                clearTimeout(temporizador_teclaU);
                temporizador_teclaU = null;
            }

            if (temporizador_escapa != null) {
                clearTimeout(temporizador_escapa);
                temporizador_escapa = null;
            }
            
            abrir_cef_pesca = false;
        }
    }
});

mp.keys.bind(0x55, false, function () {
    if (abrir_cef_pesca && !cef_pesca) {
        mp.events.call('pesca:mostrar_cef');
    }
});