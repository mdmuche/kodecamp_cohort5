import formatter from "../utils/formatter.js";

class HelpCommand {
  constructor(commands) {
    this.name = "help";
    this.description = "Show available commands and usage";
    this.usage = "help [command]";
    this.commands = commands;
  }

  async execute(args) {
    if (args.length === 0) {
      this.showAllCommands();
    } else {
      const cmdName = args[0];
      const cmd = this.commands[cmdName];
      if (cmd) {
        const instance = new cmd();
        console.log(formatter.colorize(`\nCommand: ${cmdName}`, "bright"));
        console.log(` ${instance.description}`);
        console.log(formatter.formatHelp("\nUsage:"));
        console.log(` ${formatter.formatUsage("", instance.usage)}`);
      } else {
        console.log(formatter.formatWarning(`Unknown command: ${cmdName}`));
        this.showAllCommands();
      }
    }
  }

  showAllCommands() {
    console.log(formatter.colorize("\n Available Commands:", "bright"));
    for (const [name, CmdClass] of Object.entries(this.commands)) {
      const instance = new CmdClass();
      console.log(
        ` ${formatter.colorize(name.padEnd(10), "blue")} - ${
          instance.description
        }`
      );
    }
    console.log(
      `\nUse ${formatter.colorize("help <command>", "dim")} for details`
    );
  }
}

export default HelpCommand;
