
//console.log("Servidor arrancado");

function enviarMensajeJugador(jugador, jugadorConectado) {
    jugador.outputChatBox("Se ha conectado el jugador " + jugadorConectado.name);
}

function playerJoin(jugadorConectado) {
    mp.players.forEach( jugadorBucle => {
        if ( jugadorBucle != jugadorConectado ) {
            if ( jugadorConectado.id == 0 ) {
                jugadorConectado.outputChatBox("Tienes la id 0, felicidades mâquina.");
            }

            enviarMensajeJugador(jugadorBucle, jugadorConectado);
        }
    });
}

function alRecibirComandoJugador(player, command) {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];
        
    if (commandName === "ruka") {
        player.outputChatBox("Vik maquina maquina maquina maquina maquina maquina maquina maquina maquina maquina maquina maquina maquina maquina");
    } else if (commandName === "apagar") {
        player.outputChatBox("No tienes permisos");
    }
}

mp.events.addCommand("me", (player, message) => {
	mp.players.broadcast(`* ${player.name} hola: ${message}`);
});

mp.events.add("playerCommand", alRecibirComandoJugador);
mp.events.add("playerJoin", playerJoin);
