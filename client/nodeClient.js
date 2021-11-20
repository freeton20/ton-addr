const { TonClient } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

TonClient.useBinaryLibrary(libNode)
const networks = ["main.ton.dev", "net.ton.dev","localhost"]
const clients = [
    new TonClient({
        network: {
            server_address: networks[0],
        }
    }),
    new TonClient({
        network: {
            server_address: networks[1],
        }
    }),
    new TonClient({
        network: {
            server_address: networks[2],
        }
    })
];

module.exports = {   
    clients,
    networks
}