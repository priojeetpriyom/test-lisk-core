"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../constants");
const commons_1 = require("../../utils/commons");
const path_1 = require("../../utils/path");
const download_1 = require("../../utils/download");
const flags_1 = require("../../utils/flags");
class DownloadCommand extends core_1.Command {
    async run() {
        const { flags } = await this.parse(DownloadCommand);
        const network = flags.network ? flags.network : constants_1.DEFAULT_NETWORK;
        const url = flags.url ? flags.url : (0, commons_1.liskSnapshotUrl)(constants_1.SNAPSHOT_URL, network);
        const dataPath = flags.output ? flags.output : process.cwd();
        this.log(`Downloading snapshot from ${url} to ${(0, path_1.getFullPath)(dataPath)}`);
        try {
            await (0, download_1.downloadAndValidate)(url, dataPath);
            const checksum = (0, download_1.getChecksum)(url, dataPath);
            this.log(`Downloaded to path: ${dataPath}.`);
            this.log(`Verified checksum: ${checksum}.`);
        }
        catch (errors) {
            const errorMessage = Array.isArray(errors)
                ? errors.map(err => err.message).join(',')
                : errors;
            this.error(errorMessage);
        }
    }
}
exports.default = DownloadCommand;
DownloadCommand.description = 'Download snapshot from <URL>.';
DownloadCommand.examples = [
    'download',
    'download --network betanet',
    'download --url https://snapshots.lisk.com/mainnet/blockchain.db.tar.gz --output ./downloads',
];
DownloadCommand.flags = {
    network: core_1.Flags.string({
        ...flags_1.flags.network,
        env: 'LISK_NETWORK',
        default: constants_1.DEFAULT_NETWORK,
    }),
    output: core_1.Flags.string({
        char: 'o',
        description: 'Directory path to specify where snapshot is downloaded. By default outputs the files to current working directory.',
    }),
    url: core_1.Flags.string({
        char: 'u',
        description: 'The url to the snapshot.',
    }),
};
//# sourceMappingURL=download.js.map