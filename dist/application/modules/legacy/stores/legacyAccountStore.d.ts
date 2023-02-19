import { BaseStore } from 'lisk-sdk';
export interface legacyAccount {
    balance: bigint;
}
export declare const legacyAccountSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        balance: {
            dataType: string;
            fieldNumber: number;
        };
    };
};
export declare class LegacyAccountStore extends BaseStore<legacyAccount> {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            balance: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
}
