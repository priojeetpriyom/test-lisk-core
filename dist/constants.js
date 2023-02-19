"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOWNLOAD_URL = exports.SNAPSHOT_URL = exports.DEFAULT_NETWORK = exports.NETWORK = void 0;
var NETWORK;
(function (NETWORK) {
    NETWORK["MAINNET"] = "mainnet";
    NETWORK["TESTNET"] = "testnet";
    NETWORK["BETANET"] = "betanet";
    NETWORK["ALPHANET"] = "alphanet";
    NETWORK["DEVNET"] = "devnet";
})(NETWORK = exports.NETWORK || (exports.NETWORK = {}));
exports.DEFAULT_NETWORK = NETWORK.MAINNET;
exports.SNAPSHOT_URL = 'https://snapshots.lisk.com';
exports.DOWNLOAD_URL = 'https://downloads.lisk.com/lisk';
//# sourceMappingURL=constants.js.map