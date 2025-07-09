import fileManager from "../utils/fileManager.js";
import validator from "../utils/validator.js";
import formatter from "../utils/formatter.js";

class AddCommand {
  constructor() {
    (this.name = "add"),
      (this.description = "Add a new task"),
      (this.usage = "add <description> [--piority <level>]");
  }

  async execute(args, options = {}) {
    try {
      const argsValidation = validator.validateArgs(args, 1, 1);
      if (!argsValidation.isValid) {
        console.error(formatter.formatError(argsValidation.error));
        this.showUsage();
        return;
      }

      const description = args[0];
      const piority = options.piority;

      const descriptionValidation = validator.validateDescription(description);
      if (!descriptionValidation.isValid) {
        console.error(
          formatter.formatError(`Error: ${descriptionValidation.error}`)
        );
        return;
      }

      const piorityValidation = validator.validatePiority(piority);
      if (!piorityValidation.isValid) {
        console.error(
          formatter.formatError(`Error: ${piorityValidation.error}`)
        );
        return;
      }

      const task = await fileManager.addTask({
        description: descriptionValidation.value,
        piority: piorityValidation.value,
        completed: false,
      });

      console.log(formatter.formatSuccess("Task added successfully!"));
      console.log(formatter.formatTask(task));
    } catch (error) {
      console.error(formatter.formatError(`Error: ${error.message}`));
    }
  }

  showUsage() {
    console.log("\n" + formatter.formatHelp("Usage:"));
    console.log(`  ${formatter.formatUsage(this.name, this.usage)}`);
    console.log("\n" + formatter.formatHelp("Options:"));
    console.log("  --piority <level> Set piority (low, medium, high)");
  }
}

export default AddCommand;
