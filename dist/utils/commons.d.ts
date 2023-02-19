import { NETWORK } from '../constants';
export declare const liskGenesisBlockUrl: (url: string, network: NETWORK) => string;
export declare const liskSnapshotUrl: (url: string, network: NETWORK) => string;
export declare const encryptPassphrase: (passphrase: string, password: string, outputPublicKey: boolean) => Promise<Record<string, unknown>>;
