"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterKeysEvent = exports.keysRegisteredEventDataSchema = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const constants_1 = require("../constants");
exports.keysRegisteredEventDataSchema = {
    $id: 'lisk/legacy/keysRegisteredEventData',
    type: 'object',
    required: ['address', 'generatorKey', 'blsKey'],
    properties: {
        address: {
            dataType: 'bytes',
            maxLength: constants_1.LENGTH_ADDRESS,
            fieldNumber: 1,
        },
        generatorKey: {
            dataType: 'bytes',
            maxLength: constants_1.LENGTH_GENERATOR_KEY,
            fieldNumber: 2,
        },
        blsKey: {
            dataType: 'bytes',
            maxLength: constants_1.LENGTH_BLS_KEY,
            fieldNumber: 3,
        },
    },
};
class RegisterKeysEvent extends lisk_sdk_1.BaseEvent {
    constructor() {
        super(...arguments);
        this.schema = exports.keysRegisteredEventDataSchema;
    }
    log(ctx, data) {
        this.add(ctx, data, [data.address, data.generatorKey, data.blsKey]);
    }
}
exports.RegisterKeysEvent = RegisterKeysEvent;
//# sourceMappingURL=registerKeys.js.map