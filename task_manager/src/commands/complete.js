import fileManager from "../utils/fileManager.js";
import validator from "../utils/validator.js";
import formatter from "../utils/formatter.js";

class CompleteCommand {
  constructor() {
    this.name = "complete";
    this.description = "Mark a test as completed";
    this.usage = "complete <taskId>";
  }

  async execute(args) {
    const idValidation = validator.validateId(args[0]);

    if (!idValidation.isValid) {
      console.error(formatter.formatError(idValidation.error));
      this.showUsage();
      return;
    }

    const task = await fileManager.getTaskById(idValidation.value);

    if (!task) {
      console.error(formatter.formatError(`Task with ID ${args[0]} not found`));
      return;
    }

    if (task.completed) {
      console.log(formatter.formatInfo("Task is already completed"));
      return;
    }

    const updated = await fileManager.updateTask(task.id, {
      completed: true,
      completedAt: new Date().toISOString(),
    });

    console.log(formatter.formatSuccess("Task marked as completed!"));
    console.log(formatter.formatTask(updated));
  }

  showUsage() {
    console.log("\n" + formatter.formatHelp("Usage:"));
    console.log(` ${formatter.formatUsage(this.name, this.usage)}`);
  }
}

export default CompleteCommand;
