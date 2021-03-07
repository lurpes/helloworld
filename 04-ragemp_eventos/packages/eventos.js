mp.events.add('playerJoin', (player) => {
    mp.players.broadcast(`¡El jugador ${player.name} ha conectado al servidor!`);
});

mp.events.add('playerEnterVehicle', (player, vehicle, seat) => {
    mp.players.broadcast(`Evento: ${player.name} se ha subido al vehículo (${vehicle.id}) en el asiento ${seat}`);
    player.call('playerEnterVehicleClient', [player.name, vehicle.id, seat]);

});

mp.events.add('playerEnterVehicleServer', (player, name, vehicle, seat) => {
    mp.players.broadcast(`Servidor: ${name} se ha subido al vehículo (${vehicle}) en el asiento ${seat}`);

});

mp.events.addCommand('veh', (player, model) => {
	mp.vehicles.new(mp.joaat(model), player.position,
    {
        numberPlate: "ADMIN",
        color: [[0, 255, 0],[0, 255, 0]]
    });
});