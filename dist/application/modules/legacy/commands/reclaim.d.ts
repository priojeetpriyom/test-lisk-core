/// <reference types="node" />
import { BaseCommand, CommandExecuteContext, CommandVerifyContext, VerificationResult, TokenMethod } from 'lisk-sdk';
import { TokenIDReclaim, ModuleName } from '../types';
export declare class ReclaimLSKCommand extends BaseCommand {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            amount: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    legacyReserveAddress: Buffer;
    private _tokenMethod;
    private _tokenIDReclaim;
    private _moduleName;
    addDependencies(tokenMethod: TokenMethod): void;
    init(args: {
        tokenIDReclaim: TokenIDReclaim;
        moduleName: ModuleName;
    }): void;
    verify(ctx: CommandVerifyContext): Promise<VerificationResult>;
    execute(ctx: CommandExecuteContext): Promise<void>;
}
