"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyModule = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const method_1 = require("./method");
const endpoint_1 = require("./endpoint");
const constants_1 = require("./constants");
const schemas_1 = require("./schemas");
const utils_1 = require("./utils");
const legacyAccountStore_1 = require("./stores/legacyAccountStore");
const reclaim_1 = require("./commands/reclaim");
const register_keys_1 = require("./commands/register_keys");
const reclaim_2 = require("./events/reclaim");
const registerKeys_1 = require("./events/registerKeys");
const validator = lisk_sdk_1.validator.validator;
class LegacyModule extends lisk_sdk_1.BaseModule {
    constructor() {
        super();
        this.endpoint = new endpoint_1.LegacyEndpoint(this.stores, this.offchainStores);
        this.method = new method_1.LegacyMethod(this.stores, this.events);
        this.legacyReserveAddress = constants_1.ADDRESS_LEGACY_RESERVE;
        this._reclaimLSKCommand = new reclaim_1.ReclaimLSKCommand(this.stores, this.events);
        this._registerKeysCommand = new register_keys_1.RegisterKeysCommand(this.stores, this.events);
        this.commands = [this._reclaimLSKCommand, this._registerKeysCommand];
        this.stores.register(legacyAccountStore_1.LegacyAccountStore, new legacyAccountStore_1.LegacyAccountStore(this.name));
        this.events.register(reclaim_2.ReclaimLSKEvent, new reclaim_2.ReclaimLSKEvent(this.name));
        this.events.register(registerKeys_1.RegisterKeysEvent, new registerKeys_1.RegisterKeysEvent(this.name));
    }
    addDependencies(tokenAPI, validatorsMethod) {
        this._tokenMethod = tokenAPI;
        this._validatorsMethod = validatorsMethod;
        this._reclaimLSKCommand.addDependencies(this._tokenMethod);
        this._registerKeysCommand.addDependencies(this._validatorsMethod);
    }
    metadata() {
        return {
            endpoints: [
                {
                    name: this.endpoint.getLegacyAccount.name,
                    request: schemas_1.legacyAccountRequestSchema,
                    response: schemas_1.legacyAccountResponseSchema,
                },
            ],
            commands: this.commands.map(command => ({
                name: command.name,
                params: command.schema,
            })),
            events: this.events.values().map(e => ({
                name: e.name,
                data: e.schema,
            })),
            assets: [
                {
                    version: 0,
                    data: schemas_1.genesisLegacyStoreSchema,
                },
            ],
            stores: [],
        };
    }
    async init(args) {
        const { genesisConfig, moduleConfig } = args;
        const mergedModuleConfig = lisk_sdk_1.utils.objects.mergeDeep({}, constants_1.defaultConfig, moduleConfig);
        this._moduleConfig = (0, utils_1.getModuleConfig)(genesisConfig, mergedModuleConfig);
        this._reclaimLSKCommand.init({
            tokenIDReclaim: this._moduleConfig.tokenIDReclaim,
            moduleName: this.name,
        });
    }
    async initGenesisState(ctx) {
        const legacyAssetsBuffer = ctx.assets.getAsset(this.name);
        if (!legacyAssetsBuffer) {
            return;
        }
        const { accounts } = lisk_sdk_1.codec.decode(schemas_1.genesisLegacyStoreSchema, legacyAssetsBuffer);
        validator.validate(schemas_1.genesisLegacyStoreSchema, { accounts });
        const uniqueLegacyAccounts = new Set();
        let totalBalance = BigInt('0');
        for (const account of accounts) {
            if (account.address.length !== constants_1.LEGACY_ACCOUNT_LENGTH)
                throw new Error(`legacy address length is invalid, expected ${constants_1.LEGACY_ACCOUNT_LENGTH}, actual ${account.address.length}`);
            uniqueLegacyAccounts.add(account.address.toString('hex'));
            totalBalance += account.balance;
        }
        if (uniqueLegacyAccounts.size !== accounts.length) {
            throw new Error('Legacy address entries are not pair-wise distinct');
        }
        if (totalBalance >= constants_1.LEGACY_ACC_MAX_TOTAL_BAL_NON_INC) {
            throw new Error('Total balance for all legacy accounts cannot exceed 2^64');
        }
        const lockedAmount = await this._tokenMethod.getLockedAmount(ctx.getMethodContext(), this.legacyReserveAddress, this._moduleConfig.tokenIDReclaim, this.name);
        if (totalBalance !== lockedAmount) {
            throw new Error('Total balance for all legacy accounts is not equal to locked amount');
        }
        const legacyStore = this.stores.get(legacyAccountStore_1.LegacyAccountStore);
        await Promise.all(accounts.map(async (account) => legacyStore.set(ctx, account.address, { balance: account.balance })));
    }
}
exports.LegacyModule = LegacyModule;
//# sourceMappingURL=module.js.map