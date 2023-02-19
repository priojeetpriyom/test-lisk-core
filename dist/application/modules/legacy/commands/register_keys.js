"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterKeysCommand = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const constants_1 = require("../constants");
const schemas_1 = require("../schemas");
const registerKeys_1 = require("../events/registerKeys");
const { address: { getAddressFromPublicKey }, } = lisk_sdk_1.cryptography;
const validator = lisk_sdk_1.validator.validator;
class RegisterKeysCommand extends lisk_sdk_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.schema = schemas_1.registerKeysParamsSchema;
        this.invalidBlsKey = constants_1.INVALID_BLS_KEY;
    }
    addDependencies(validatorsMethod) {
        this._validatorsMethod = validatorsMethod;
    }
    async verify(ctx) {
        const validatorAddress = getAddressFromPublicKey(ctx.transaction.senderPublicKey);
        const validatorKeys = await this._validatorsMethod.getValidatorKeys(ctx.getMethodContext(), validatorAddress);
        if (Buffer.compare(validatorKeys.blsKey, this.invalidBlsKey) !== 0) {
            return {
                status: lisk_sdk_1.VerifyStatus.FAIL,
                error: new Error('Validator already has a registered BLS key.'),
            };
        }
        return { status: lisk_sdk_1.VerifyStatus.OK };
    }
    async execute(ctx) {
        const params = ctx.params;
        validator.validate(schemas_1.registerKeysParamsSchema, params);
        const validatorAddress = getAddressFromPublicKey(ctx.transaction.senderPublicKey);
        await this._validatorsMethod.setValidatorGeneratorKey(ctx.getMethodContext(), validatorAddress, params.generatorKey);
        await this._validatorsMethod.setValidatorBLSKey(ctx.getMethodContext(), validatorAddress, params.blsKey, params.proofOfPossession);
        const registerKeysEvent = this.events.get(registerKeys_1.RegisterKeysEvent);
        registerKeysEvent.log(ctx.getMethodContext(), {
            address: validatorAddress,
            generatorKey: params.generatorKey,
            blsKey: params.blsKey,
        });
    }
}
exports.RegisterKeysCommand = RegisterKeysCommand;
//# sourceMappingURL=register_keys.js.map