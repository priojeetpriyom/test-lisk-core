"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
class LinkCommand extends core_1.Command {
    async run() {
        const { args: { targetSDKFolder }, } = await this.parse(LinkCommand);
        if (!(0, fs_extra_1.pathExistsSync)(targetSDKFolder)) {
            throw new Error(`Path '${targetSDKFolder}' does not exist or access denied.`);
        }
        const sdkLocalPath = (0, path_1.join)(__dirname, '../../../', 'node_modules', 'lisk-sdk');
        const targetSDKFolderFromNodeModule = (0, path_1.isAbsolute)(targetSDKFolder)
            ? targetSDKFolder
            : (0, path_1.join)('../', targetSDKFolder);
        (0, fs_extra_1.removeSync)(sdkLocalPath);
        await (0, fs_extra_1.symlink)(targetSDKFolderFromNodeModule, sdkLocalPath);
        this.log(`Linked '${targetSDKFolder}' to '${sdkLocalPath}'.`);
    }
}
exports.default = LinkCommand;
LinkCommand.description = 'Symlink specific SDK folder during development.';
LinkCommand.examples = ['sdk:link /path/to/lisk-sdk/sdk'];
LinkCommand.args = [
    { name: 'targetSDKFolder', required: true, description: 'The path to the lisk SDK folder' },
];
//# sourceMappingURL=link.js.map