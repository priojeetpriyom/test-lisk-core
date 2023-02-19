"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LENGTH_BLS_KEY = exports.LENGTH_PROOF_OF_POSSESSION = exports.LENGTH_GENERATOR_KEY = exports.LENGTH_ADDRESS = exports.LENGTH_LEGACY_ADDRESS = exports.defaultConfig = exports.INVALID_BLS_KEY = exports.TOKEN_ID_LSK = exports.ADDRESS_LEGACY_RESERVE = exports.COMMAND_REGISTER_KEYS = exports.COMMAND_RECLAIM = exports.LEGACY_ACC_MAX_TOTAL_BAL_NON_INC = exports.LEGACY_ACCOUNT_LENGTH = exports.MODULE_NAME_LEGACY = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const { utils: { hash }, } = lisk_sdk_1.cryptography;
exports.MODULE_NAME_LEGACY = 'legacy';
exports.LEGACY_ACCOUNT_LENGTH = 8;
exports.LEGACY_ACC_MAX_TOTAL_BAL_NON_INC = 2 ** 64;
exports.COMMAND_RECLAIM = 'reclaimLSK';
exports.COMMAND_REGISTER_KEYS = 'registerKeys';
exports.ADDRESS_LEGACY_RESERVE = hash(Buffer.from('legacyReserve', 'utf8')).slice(0, 20);
exports.TOKEN_ID_LSK = '0000000000000000';
exports.INVALID_BLS_KEY = Buffer.alloc(48);
exports.defaultConfig = {
    tokenIDReclaim: exports.TOKEN_ID_LSK,
};
exports.LENGTH_LEGACY_ADDRESS = 8;
exports.LENGTH_ADDRESS = 20;
exports.LENGTH_GENERATOR_KEY = 32;
exports.LENGTH_PROOF_OF_POSSESSION = 96;
exports.LENGTH_BLS_KEY = 48;
//# sourceMappingURL=constants.js.map