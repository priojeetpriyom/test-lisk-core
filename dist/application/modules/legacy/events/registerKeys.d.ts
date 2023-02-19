/// <reference types="node" />
import { BaseEvent, EventQueuer } from 'lisk-sdk';
export interface registerKeysEventData {
    address: Buffer;
    generatorKey: Buffer;
    blsKey: Buffer;
}
export declare const keysRegisteredEventDataSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        address: {
            dataType: string;
            maxLength: number;
            fieldNumber: number;
        };
        generatorKey: {
            dataType: string;
            maxLength: number;
            fieldNumber: number;
        };
        blsKey: {
            dataType: string;
            maxLength: number;
            fieldNumber: number;
        };
    };
};
export declare class RegisterKeysEvent extends BaseEvent<registerKeysEventData> {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            address: {
                dataType: string;
                maxLength: number;
                fieldNumber: number;
            };
            generatorKey: {
                dataType: string;
                maxLength: number;
                fieldNumber: number;
            };
            blsKey: {
                dataType: string;
                maxLength: number;
                fieldNumber: number;
            };
        };
    };
    log(ctx: EventQueuer, data: registerKeysEventData): void;
}
