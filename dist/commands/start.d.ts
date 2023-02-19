import { BaseStartCommand } from 'lisk-commander';
import { Application, PartialApplicationConfig } from 'lisk-sdk';
export declare class StartCommand extends BaseStartCommand {
    static flags: {
        'enable-forger-plugin': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'enable-monitor-plugin': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'monitor-plugin-port': import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        'monitor-plugin-whitelist': import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        'enable-report-misbehavior-plugin': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'enable-faucet-plugin': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'faucet-plugin-port': import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        'enable-dashboard-plugin': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'dashboard-plugin-port': import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        'data-path': import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        network: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        config: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        'overwrite-config': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        port: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        'api-ipc': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'api-ws': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'api-http': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        'api-port': import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        'api-host': import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        log: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        'seed-peers': import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    getApplication(config: PartialApplicationConfig): Promise<Application>;
    getApplicationConfigDir(): string;
}
