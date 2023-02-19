/// <reference types="node" />
import { GenesisConfig } from 'lisk-sdk';
import { ModuleConfig, ModuleConfigJSON } from './types';
export declare function getModuleConfig(genesisConfig: GenesisConfig, moduleConfig: ModuleConfigJSON): ModuleConfig;
export declare function getLegacyAddress(publicKey: Buffer): Buffer;
