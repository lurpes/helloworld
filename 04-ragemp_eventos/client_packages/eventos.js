mp.events.add('playerEnterVehicleClient', (player, vehicle, seat) => {
    mp.gui.chat.push(`Cliente: ${player} se ha subido al vehículo (${vehicle}) en el asiento ${seat}`);
    mp.events.callRemote('playerEnterVehicleServer', player, vehicle, seat);
});