import { BaseEndpoint, JSONObject, ModuleEndpointContext } from 'lisk-sdk';
import { LegacyStoreData } from './types';
export declare class LegacyEndpoint extends BaseEndpoint {
    getLegacyAccount(ctx: ModuleEndpointContext): Promise<JSONObject<LegacyStoreData> | undefined>;
}
