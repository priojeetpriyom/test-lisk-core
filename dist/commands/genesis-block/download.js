"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const fs = require("fs-extra");
const path_1 = require("path");
const constants_1 = require("../../constants");
const download_1 = require("../../utils/download");
const flags_1 = require("../../utils/flags");
const path_2 = require("../../utils/path");
const commons_1 = require("../../utils/commons");
class DownloadCommand extends core_1.Command {
    async run() {
        const { flags } = await this.parse(DownloadCommand);
        const { url, network, 'data-path': dataPath, force } = flags;
        if (!url && !network) {
            this.error('Please provide either url or network to download the genesis block.');
        }
        const customUrl = !!flags.url;
        const downloadUrl = url !== null && url !== void 0 ? url : (0, commons_1.liskGenesisBlockUrl)(constants_1.DOWNLOAD_URL, network);
        let genesisBlockPath;
        if (network && dataPath) {
            genesisBlockPath = (0, path_2.getNetworkConfigFilesPath)(dataPath, network).genesisBlockFilePath;
        }
        else if (network) {
            genesisBlockPath = (0, path_2.getNetworkConfigFilesPath)((0, path_2.getDefaultPath)(), network).genesisBlockFilePath;
        }
        else if (dataPath) {
            genesisBlockPath = (0, path_2.getNetworkConfigFilesPath)(dataPath, constants_1.DEFAULT_NETWORK).genesisBlockFilePath;
        }
        else {
            genesisBlockPath = (0, path_1.join)(process.cwd(), 'genesis_block.json');
        }
        if (fs.existsSync(genesisBlockPath) && !force) {
            this.error(`The genesis block file already exists at ${genesisBlockPath}. Use --force to override.`);
        }
        const downloadDir = (0, path_1.dirname)(genesisBlockPath);
        const { fileName, filePath } = (0, download_1.getDownloadedFileInfo)(downloadUrl, downloadDir);
        this.log(`Downloading genesis block from ${downloadUrl}`);
        if (customUrl) {
            await (0, download_1.download)(downloadUrl, downloadDir);
            this.log(`Downloaded to path: ${filePath}.`);
        }
        else {
            await (0, download_1.downloadAndValidate)(downloadUrl, downloadDir);
            const checksum = (0, download_1.getChecksum)(downloadUrl, downloadDir);
            this.log(`Downloaded to path: ${filePath}.`);
            this.log(`Verified checksum: ${checksum}.`);
        }
        if (fs.existsSync(genesisBlockPath) && force) {
            this.log(`Removing existing genesis block at ${genesisBlockPath}`);
            fs.unlinkSync(genesisBlockPath);
        }
        this.log('Extracting genesis block file.');
        await (0, download_1.extract)(downloadDir, fileName, downloadDir, 0);
        this.log('Removing downloaded genesis block');
        fs.unlinkSync(filePath);
        this.log('Download completed.');
        this.log(`   ${genesisBlockPath}`);
    }
}
exports.default = DownloadCommand;
DownloadCommand.description = 'Download genesis block.';
DownloadCommand.examples = [
    'genesis-block:download --network mainnet -f',
    'genesis-block:download --network --data-path ./lisk/',
    'genesis-block:download --url http://mydomain.com/genesis_block.json.gz --data-path ./lisk/ --force',
];
DownloadCommand.flags = {
    'data-path': core_1.Flags.string(flags_1.flags.dataPath),
    network: core_1.Flags.string({
        ...flags_1.flags.network,
        env: 'LISK_NETWORK',
    }),
    url: core_1.Flags.string({
        char: 'u',
        description: 'The url to the genesis block.',
    }),
    force: core_1.Flags.boolean({
        char: 'f',
        description: 'Delete and overwrite existing blockchain data',
        default: false,
    }),
};
//# sourceMappingURL=download.js.map