"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAccountStore = exports.legacyAccountSchema = void 0;
const lisk_sdk_1 = require("lisk-sdk");
exports.legacyAccountSchema = {
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
class LegacyAccountStore extends lisk_sdk_1.BaseStore {
    constructor() {
        super(...arguments);
        this.schema = exports.legacyAccountSchema;
    }
}
exports.LegacyAccountStore = LegacyAccountStore;
//# sourceMappingURL=legacyAccountStore.js.map