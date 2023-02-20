"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclaimLSKCommand = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const constants_1 = require("../constants");
const schemas_1 = require("../schemas");
const utils_1 = require("../utils");
const legacyAccountStore_1 = require("../stores/legacyAccountStore");
const reclaim_1 = require("../events/reclaim");
const validator = lisk_sdk_1.validator.validator;
const { address: { getAddressFromPublicKey }, } = lisk_sdk_1.cryptography;
class ReclaimLSKCommand extends lisk_sdk_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.schema = schemas_1.reclaimLSKParamsSchema;
        this.legacyReserveAddress = constants_1.ADDRESS_LEGACY_RESERVE;
    }
    addDependencies(tokenMethod) {
        this._tokenMethod = tokenMethod;
    }
    init(args) {
        this._tokenIDReclaim = args.tokenIDReclaim;
        this._moduleName = args.moduleName;
    }
    async verify(ctx) {
        const params = ctx.params;
        try {
            validator.validate(schemas_1.reclaimLSKParamsSchema, params);
        }
        catch (err) {
            return {
                status: lisk_sdk_1.VerifyStatus.FAIL,
                error: err,
            };
        }
        const legacyAddress = (0, utils_1.getLegacyAddress)(ctx.transaction.senderPublicKey);
        const legacyStore = this.stores.get(legacyAccountStore_1.LegacyAccountStore);
        const isLegacyAddressExists = await legacyStore.has(ctx, legacyAddress);
        if (!isLegacyAddressExists) {
            return {
                status: lisk_sdk_1.VerifyStatus.FAIL,
                error: new Error(`Public key does not correspond to a reclaimable account.`),
            };
        }
        const legacyAccount = await legacyStore.get(ctx, legacyAddress);
        if (legacyAccount.balance !== params.amount) {
            return {
                status: lisk_sdk_1.VerifyStatus.FAIL,
                error: new Error('Input amount does not equal the balance of the legacy account.'),
            };
        }
        return { status: lisk_sdk_1.VerifyStatus.OK };
    }
    async execute(ctx) {
        const params = ctx.params;
        const legacyAddress = (0, utils_1.getLegacyAddress)(ctx.transaction.senderPublicKey);
        const legacyStore = this.stores.get(legacyAccountStore_1.LegacyAccountStore);
        await legacyStore.del(ctx, legacyAddress);
        const address = getAddressFromPublicKey(ctx.transaction.senderPublicKey);
        await this._tokenMethod.unlock(ctx.getMethodContext(), this.legacyReserveAddress, this._moduleName, this._tokenIDReclaim, params.amount);
        await this._tokenMethod.transfer(ctx.getMethodContext(), this.legacyReserveAddress, address, this._tokenIDReclaim, params.amount);
        const reclaimLSKEvent = this.events.get(reclaim_1.ReclaimLSKEvent);
        reclaimLSKEvent.log(ctx.getMethodContext(), {
            legacyAddress,
            address,
            amount: params.amount,
        });
    }
}
exports.ReclaimLSKCommand = ReclaimLSKCommand;
//# sourceMappingURL=reclaim.js.map