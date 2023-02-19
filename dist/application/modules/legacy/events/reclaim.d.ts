/// <reference types="node" />
import { BaseEvent, EventQueuer } from 'lisk-sdk';
export interface reclaimLSKEventData {
    legacyAddress: Buffer;
    address: Buffer;
    amount: bigint;
}
export declare const accountReclaimedEventDataSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        legacyAddress: {
            dataType: string;
            maxLength: number;
            fieldNumber: number;
        };
        address: {
            dataType: string;
            maxLength: number;
            fieldNumber: number;
        };
        amount: {
            dataType: string;
            fieldNumber: number;
        };
    };
};
export declare class ReclaimLSKEvent extends BaseEvent<reclaimLSKEventData> {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            legacyAddress: {
                dataType: string;
                maxLength: number;
                fieldNumber: number;
            };
            address: {
                dataType: string;
                maxLength: number;
                fieldNumber: number;
            };
            amount: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    log(ctx: EventQueuer, data: reclaimLSKEventData): void;
}
