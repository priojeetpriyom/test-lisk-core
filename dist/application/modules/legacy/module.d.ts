/// <reference types="node" />
import { BaseModule, TokenMethod, ValidatorsMethod, GenesisBlockExecuteContext, ModuleMetadata } from 'lisk-sdk';
import { LegacyMethod } from './method';
import { LegacyEndpoint } from './endpoint';
import { ModuleInitArgs } from './types';
import { ReclaimLSKCommand } from './commands/reclaim';
import { RegisterKeysCommand } from './commands/register_keys';
export declare class LegacyModule extends BaseModule {
    endpoint: LegacyEndpoint;
    method: LegacyMethod;
    legacyReserveAddress: Buffer;
    private _tokenMethod;
    private _validatorsMethod;
    private _moduleConfig;
    private readonly _reclaimLSKCommand;
    private readonly _registerKeysCommand;
    constructor();
    commands: (ReclaimLSKCommand | RegisterKeysCommand)[];
    addDependencies(tokenAPI: TokenMethod, validatorsMethod: ValidatorsMethod): void;
    metadata(): ModuleMetadata;
    init(args: ModuleInitArgs): Promise<void>;
    initGenesisState(ctx: GenesisBlockExecuteContext): Promise<void>;
}
