import { fileURLToPath } from "url";
import path from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

class TaskManager {
  constructor() {
    (this.commands = {}), this.loadCommands();
  }

  async loadCommands() {
    this.commands = {
      add: (await import("./commands/add.js")).default,
      list: (await import("./commands/list.js")).default,
      complete: (await import("./commands/complete.js")).default,
      delete: (await import("./commands/delete.js")).default,
    };

    const HelpCommand = (await import("./commands/help.js")).default;
    this.HelpCommandClass = HelpCommand;
  }

  parseArguments() {
    const args = process.argv.slice(2);
    const command = args[0];
    const commandArgs = args.slice(1);
    const options = this.parseOptions(commandArgs);

    return {
      command,
      args: commandArgs.filter((args) => !args.startsWith("--")),
      options,
    };
  }

  parseOptions(args) {
    const options = {};
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg.startsWith("--")) {
        const key = arg.slice(2);
        const value =
          args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
        options[key] = value;
        if (value !== true) i++;
      }
    }

    return options;
  }

  async run() {
    try {
      await this.loadCommands();
      const { command, args, options } = this.parseArguments();
      if (!command) {
        console.log("CLI Task Manager");
        console.log("Use 'Help' to see available commands");
        return;
      }

      let CommandClass = this.commands[command];

      if (command === "help") {
        CommandClass = class {
          async execute(args) {
            const helpInstance = new taskManager.HelpCommandClass(
              taskManager.commands
            );
            await helpInstance.execute(args);
          }
        };
      }

      if (!CommandClass) {
        console.error(`Unknown command: ${command}`);
        console.log("Use 'Help' to see available commands");
        process.exit(1);
      }

      const commandInstance = new CommandClass();

      commandInstance.execute(args, options);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
}

const taskManager = new TaskManager();
taskManager.run();

// console.log(process.argv.slice(2));
