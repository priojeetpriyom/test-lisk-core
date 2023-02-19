import { Command } from '@oclif/core';
export default class DownloadCommand extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        'data-path': import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        network: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        url: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        force: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
