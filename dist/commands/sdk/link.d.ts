import { Command } from '@oclif/core';
export default class LinkCommand extends Command {
    static description: string;
    static examples: string[];
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    run(): Promise<void>;
}
