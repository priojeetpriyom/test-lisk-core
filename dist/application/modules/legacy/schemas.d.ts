export declare const legacyAccountResponseSchema: {
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
export declare const reclaimLSKParamsSchema: {
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
export declare const registerKeysParamsSchema: {
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
export declare const genesisLegacyStoreSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        accounts: {
            type: string;
            fieldNumber: number;
            items: {
                type: string;
                required: string[];
                properties: {
                    address: {
                        dataType: string;
                        minLength: number;
                        maxLength: number;
                        fieldNumber: number;
                    };
                    balance: {
                        dataType: string;
                        fieldNumber: number;
                    };
                };
            };
        };
    };
};
export declare const legacyAccountRequestSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        publicKey: {
            type: string;
            format: string;
        };
    };
};
