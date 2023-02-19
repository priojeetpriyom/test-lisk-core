"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockchainDB = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const path_1 = require("./path");
const getBlockchainDB = (dataPath) => new lisk_sdk_1.db.StateDB((0, path_1.getBlockchainDBPath)(dataPath));
exports.getBlockchainDB = getBlockchainDB;
//# sourceMappingURL=db.js.map