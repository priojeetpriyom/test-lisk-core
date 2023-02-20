import { BaseCommand, ValidatorsMethod, CommandExecuteContext, CommandVerifyContext, VerificationResult } from 'lisk-sdk';
export declare class RegisterKeysCommand extends BaseCommand {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            blsKey: {
                dataType: string;
                minLength: number;
                maxLength: number;
                fieldNumber: number;
            };
            proofOfPossession: {
                dataType: string;
                minLength: number;
                maxLength: number;
                fieldNumber: number;
            };
            generatorKey: {
                dataType: string;
                minLength: number;
                maxLength: number;
                fieldNumber: number;
            };
        };
    };
    private readonly invalidBlsKey;
    private _validatorsMethod;
    addDependencies(validatorsMethod: ValidatorsMethod): void;
    verify(ctx: CommandVerifyContext): Promise<VerificationResult>;
    execute(ctx: CommandExecuteContext): Promise<void>;
}
