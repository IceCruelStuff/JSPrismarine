const Player = require('../../player').default;
const Prismarine = require('../../Prismarine');
const Identifiers = require('../identifiers');
const EventManager = require('../../events/EventManager');
const AnimatePacket = require('../packet/animate');


class AnimateHandler {
    static NetID = Identifiers.AnimatePacket

    /**
     * @param {AnimatePacket} packet 
     * @param {Prismarine} server
     * @param {Player} player 
     */
    static handle(packet, server, player) {
        let pk = new AnimatePacket();
        pk.runtimeEntityId = player.runtimeId;
        pk.action = packet.action;
        
        for (let onlinePlayer of server.getOnlinePlayers()) {
            if (onlinePlayer === player) continue;
            onlinePlayer.sendDataPacket(pk);
        }
    }
}
module.exports = AnimateHandler;
