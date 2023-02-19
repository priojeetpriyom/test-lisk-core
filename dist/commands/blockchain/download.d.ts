import { Command } from '@oclif/core';
export default class DownloadCommand extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        network: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        output: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        url: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
