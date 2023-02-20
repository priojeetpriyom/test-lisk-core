"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassphrase = exports.liskSnapshotUrl = exports.liskGenesisBlockUrl = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const constants_1 = require("../constants");
const liskGenesisBlockUrl = (url, network) => {
    if (!['testnet', 'mainnet', 'betanet'].includes(network.toLowerCase())) {
        return '';
    }
    if (url && url.search(constants_1.DOWNLOAD_URL) >= 0) {
        return `${constants_1.DOWNLOAD_URL}/${network}/genesis_block.json.tar.gz`;
    }
    return url;
};
exports.liskGenesisBlockUrl = liskGenesisBlockUrl;
const liskSnapshotUrl = (url, network) => {
    if (!['testnet', 'mainnet', 'betanet'].includes(network.toLowerCase())) {
        return '';
    }
    if (url && url.search(constants_1.SNAPSHOT_URL) >= 0) {
        return `${constants_1.SNAPSHOT_URL}/${network}/blockchain.db.tar.gz`;
    }
    return url;
};
exports.liskSnapshotUrl = liskSnapshotUrl;
const encryptPassphrase = async (passphrase, password, outputPublicKey) => {
    const encryptedPassphraseObject = await lisk_sdk_1.cryptography.encrypt.encryptMessageWithPassword(passphrase, password);
    const encryptedPassphrase = lisk_sdk_1.cryptography.encrypt.stringifyEncryptedMessage(encryptedPassphraseObject);
    return outputPublicKey
        ? {
            encryptedPassphrase,
            publicKey: lisk_sdk_1.cryptography.legacy.getKeys(passphrase).publicKey.toString('hex'),
        }
        : { encryptedPassphrase };
};
exports.encryptPassphrase = encryptPassphrase;
//# sourceMappingURL=commons.js.map