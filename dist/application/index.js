"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplication = void 0;
const lisk_sdk_1 = require("lisk-sdk");
const modules_1 = require("./modules");
const getApplication = (config) => {
    const { app, method } = lisk_sdk_1.Application.defaultApplication(config, true);
    const legacyModule = new modules_1.LegacyModule();
    legacyModule.addDependencies(method.token, method.validator);
    app.registerModule(legacyModule);
    return app;
};
exports.getApplication = getApplication;
//# sourceMappingURL=index.js.map