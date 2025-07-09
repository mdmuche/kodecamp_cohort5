import fileManager from "../utils/fileManager.js";
import validator from "../utils/validator.js";
import formatter from "../utils/formatter.js";

class DeleteCommand {
  constructor() {
    this.name = "delete";
    this.description = "Delete a task by ID";
    this.usage = "delete <taskId>";
  }

  async execute(args) {
    try {
      const argsValidation = validator.validateArgs(args, 1, 1);
      if (!argsValidation.isValid) {
        console.error(formatter.formatError(argsValidation.error));
        this.showUsage();
        return;
      }

      const idValidation = validator.validateId(args[0]);
      if (!idValidation.isValid) {
        console.error(formatter.formatError(idValidation.error));
        return;
      }

      const success = await fileManager.deleteTask(idValidation.value);

      if (success) {
        console.log(
          formatter.formatSuccess(
            `Task #${idValidation.value} deleted successfully`
          )
        );
      } else {
        console.log(
          formatter.formatWarning(`Task #${idValidation.value} not found`)
        );
      }
    } catch (error) {
      console.error(formatter.formatError(`Error: ${error.message}`));
    }
  }

  showUsage() {
    console.log("\n" + formatter.formatHelp("Usage:"));
    console.log(` ${formatter.formatUsage(this.name, this.usage)}`);
  }
}

export default DeleteCommand;
