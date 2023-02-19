"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLegacyAddress = exports.getModuleConfig = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const { legacyAddress: { getFirstEightBytesReversed }, utils: { hash }, } = lisk_sdk_1.cryptography;
function getModuleConfig(genesisConfig, moduleConfig) {
    const { chainID } = genesisConfig;
    const localIDReclaim = moduleConfig.tokenIDReclaim.slice(8);
    const tokenIDReclaim = `${chainID}${localIDReclaim}`;
    return {
        ...moduleConfig,
        tokenIDReclaim: Buffer.from(tokenIDReclaim, 'hex'),
    };
}
exports.getModuleConfig = getModuleConfig;
function getLegacyAddress(publicKey) {
    return getFirstEightBytesReversed(hash(publicKey));
}
exports.getLegacyAddress = getLegacyAddress;
//# sourceMappingURL=utils.js.map