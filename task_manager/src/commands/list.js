import fileManager from "../utils/fileManager.js";
import validator from "../utils/validator.js";
import formatter from "../utils/formatter.js";

class ListCommand {
  constructor() {
    this.name = "list";
    this.description = "List tasks with optional filters";
    this.usage = "List [--status <status>] [--piority <level>]";
  }

  async execute(args, options = {}) {
    try {
      // validate filters
      const statusResult = validator.validateStatus(options.status);
      const piorityResult = validator.validPiorityFilter(options.piority);

      if (!statusResult.isValid) {
        console.error(formatter.formatError(statusResult.error));
        return;
      }

      if (!piorityResult.isValid) {
        console.error(formatter.formatError(piorityResult.error));
        return;
      }

      const tasks = await fileManager.readTasks();

      // apply filters
      let filtered = tasks;
      if (statusResult.value !== "all") {
        filtered = filtered.filter(
          (task) => task.piority === piorityResult.value
        );
      }

      if (filtered.length === 0) {
        console.log(formatter.formatWarning("No matching tasks found"));
        return;
      }

      console.log(formatter.formStTaskList(filtered));
    } catch (error) {
      console.log(formatter.formatError(`Error: ${error.message}`));
    }
  }
}

export default ListCommand;
