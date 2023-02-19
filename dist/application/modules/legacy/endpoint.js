"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyEndpoint = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const schemas_1 = require("./schemas");
const legacyAccountStore_1 = require("./stores/legacyAccountStore");
const utils_1 = require("./utils");
const validator = lisk_sdk_1.validator.validator;
const { NotFoundError } = lisk_sdk_1.chain;
class LegacyEndpoint extends lisk_sdk_1.BaseEndpoint {
    async getLegacyAccount(ctx) {
        validator.validate(schemas_1.legacyAccountRequestSchema, ctx.params);
        const publicKey = Buffer.from(ctx.params.publicKey, 'hex');
        const legacyStore = this.stores.get(legacyAccountStore_1.LegacyAccountStore);
        try {
            const legacyAddressBuffer = (0, utils_1.getLegacyAddress)(publicKey);
            const legacyAddress = legacyAddressBuffer.toString('hex');
            const hasLegacyAddress = await legacyStore.has(ctx, legacyAddressBuffer);
            if (!hasLegacyAddress) {
                return {
                    legacyAddress,
                    balance: '0',
                };
            }
            const legacyAccount = await legacyStore.get(ctx, legacyAddressBuffer);
            return {
                legacyAddress,
                balance: legacyAccount.balance.toString(),
            };
        }
        catch (err) {
            if (err instanceof NotFoundError) {
                return undefined;
            }
            throw err;
        }
    }
}
exports.LegacyEndpoint = LegacyEndpoint;
//# sourceMappingURL=endpoint.js.map