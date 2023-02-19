"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.legacyAccountRequestSchema = exports.genesisLegacyStoreSchema = exports.registerKeysParamsSchema = exports.reclaimLSKParamsSchema = exports.legacyAccountResponseSchema = void 0;
const constants_1 = require("./constants");
exports.legacyAccountResponseSchema = {
    $id: 'lisk/legacy/legacyAccount',
    type: 'object',
    required: ['balance'],
    properties: {
        balance: {
            dataType: 'uint64',
            fieldNumber: 1,
        },
    },
};
exports.reclaimLSKParamsSchema = {
    $id: 'lisk/legacy/reclaimLSK',
    type: 'object',
    required: ['amount'],
    properties: {
        amount: {
            dataType: 'uint64',
            fieldNumber: 1,
        },
    },
};
exports.registerKeysParamsSchema = {
    $id: 'lisk/legacy/registerKeys',
    type: 'object',
    required: ['blsKey', 'proofOfPossession', 'generatorKey'],
    properties: {
        blsKey: {
            dataType: 'bytes',
            minLength: constants_1.LENGTH_BLS_KEY,
            maxLength: constants_1.LENGTH_BLS_KEY,
            fieldNumber: 1,
        },
        proofOfPossession: {
            dataType: 'bytes',
            minLength: constants_1.LENGTH_PROOF_OF_POSSESSION,
            maxLength: constants_1.LENGTH_PROOF_OF_POSSESSION,
            fieldNumber: 2,
        },
        generatorKey: {
            dataType: 'bytes',
            minLength: constants_1.LENGTH_GENERATOR_KEY,
            maxLength: constants_1.LENGTH_GENERATOR_KEY,
            fieldNumber: 3,
        },
    },
};
exports.genesisLegacyStoreSchema = {
    $id: 'lisk/legacy/genesisLegacyStore',
    type: 'object',
    required: ['accounts'],
    properties: {
        accounts: {
            type: 'array',
            fieldNumber: 1,
            items: {
                type: 'object',
                required: ['address', 'balance'],
                properties: {
                    address: {
                        dataType: 'bytes',
                        minLength: constants_1.LENGTH_LEGACY_ADDRESS,
                        maxLength: constants_1.LENGTH_LEGACY_ADDRESS,
                        fieldNumber: 1,
                    },
                    balance: {
                        dataType: 'uint64',
                        fieldNumber: 2,
                    },
                },
            },
        },
    },
};
exports.legacyAccountRequestSchema = {
    $id: 'lisk/legacy/endpoint/getLegacyAccount',
    type: 'object',
    required: ['publicKey'],
    properties: {
        publicKey: {
            type: 'string',
            format: 'hex',
        },
    },
};
//# sourceMappingURL=schemas.js.map