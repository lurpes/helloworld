
mp.events.addCommand('pesca', player => {
    player.playScenario('WORLD_HUMAN_STAND_FISHING');
    player.call('pesca:iniciar', [ 2, 20 ]);
});

const pesca_detener = player => {
    player.outputChatBox('!{#3498eb}Dejas de pescar.');

    player.stopAnimation();
    player.call('pesca:detener');
};

mp.events.addCommand('fpesca', pesca_detener);
mp.events.add('pesca:detener', pesca_detener);

mp.events.add({
    'pesca:comprobar_valor': (player, valor) => {
        if (valor % 2 == 0) {
            player.outputChatBox('!{#3498eb}¡Algo ha pescado! !{white}Presiona la tecla !{yellow}U!{white} para tirar de la caña.');
            player.call('pesca:puede_abrir_cef');
        }
    },
    'pesca:cazar': player => {
        player.outputChatBox('!{#3498eb}¡Felicidades! Has conseguido el pescado.');
    },
});

