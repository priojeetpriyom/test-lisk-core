/// <reference types="node" />
import { GenesisConfig, JSONObject } from 'lisk-sdk';
export interface LegacyStoreData {
    legacyAddress: string;
    balance: bigint;
}
export interface ReclaimLSKParamsData {
    amount: bigint;
}
export type TokenIDReclaim = Buffer;
export interface ModuleConfig {
    tokenIDReclaim: TokenIDReclaim;
}
export type ModuleConfigJSON = JSONObject<ModuleConfig>;
export interface ModuleInitArgs {
    genesisConfig: GenesisConfig;
    moduleConfig: Record<string, unknown>;
}
export interface registerKeysData {
    blsKey: Buffer;
    proofOfPossession: Buffer;
    generatorKey: Buffer;
}
export interface genesisLegacyStoreData {
    accounts: {
        address: Buffer;
        balance: bigint;
    }[];
}
export type ModuleName = string;
