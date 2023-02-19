"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclaimLSKEvent = exports.accountReclaimedEventDataSchema = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const constants_1 = require("../constants");
exports.accountReclaimedEventDataSchema = {
    $id: 'lisk/legacy/accountReclaimedEventData',
    type: 'object',
    required: ['legacyAddress', 'address', 'amount'],
    properties: {
        legacyAddress: {
            dataType: 'bytes',
            maxLength: constants_1.LENGTH_LEGACY_ADDRESS,
            fieldNumber: 1,
        },
        address: {
            dataType: 'bytes',
            maxLength: constants_1.LENGTH_ADDRESS,
            fieldNumber: 2,
        },
        amount: {
            dataType: 'uint64',
            fieldNumber: 3,
        },
    },
};
class ReclaimLSKEvent extends lisk_sdk_1.BaseEvent {
    constructor() {
        super(...arguments);
        this.schema = exports.accountReclaimedEventDataSchema;
    }
    log(ctx, data) {
        this.add(ctx, data, [data.legacyAddress, data.address]);
    }
}
exports.ReclaimLSKEvent = ReclaimLSKEvent;
//# sourceMappingURL=reclaim.js.map