class Validator {
  validateDescription(description) {
    if (!description || typeof description !== "string") {
      return {
        isValid: false,
        error: "Task description is required and must be a string",
      };
    }

    const trimmed = description.trim();
    if (trimmed.length === 0) {
      return {
        isValid: false,
        error: "Task description cannot be empty",
      };
    }

    if (trimmed.length > 500) {
      return {
        isValid: false,
        error: "Task description cannot exceed 500 character",
      };
    }

    return {
      isValid: true,
      value: trimmed,
    };
  }

  validatePiority(piority) {
    const validPiorities = ["low", "medium", "high"];
    if (!piority) {
      return {
        isValid: true,
        value: "medium",
      };
    }

    const normalizedPiorities = piority.toLowerCase();
    if (!validPiorities.includes(normalizedPiorities)) {
      return {
        isValid: false,
        error: `Piority must be one of ${validPiorities.join(",")}`,
      };
    }

    return {
      isValid: true,
      value: normalizedPiorities,
    };
  }

  validateId(id) {
    if (id === undefined || id === null) {
      return {
        isValid: false,
        error: "Task ID is required",
      };
    }

    const numId = parseInt(id, 10);
    if (Number.isNaN(numId)) {
      return {
        isValid: false,
        error: "Task ID must be a valid number",
      };
    }

    if (numId <= 0) {
      return {
        isValid: false,
        error: "Task ID must be a positive number",
      };
    }

    return {
      isValid: true,
      value: numId,
    };
  }

  validateStatus(status) {
    const validStatuses = ["all", "pending", "completed"];
    if (!status) {
      return {
        isValid: true,
        value: "all",
      };
    }

    const normalizedStatus = status.toLowerCase().trim();
    if (!validStatuses.includes(normalizedStatus)) {
      return {
        isValid: false,
        error: `Status  must be one of ${validStatuses.join(",")}`,
      };
    }

    return {
      isValid: true,
      value: normalizedStatus,
    };
  }

  validPiorityFilter(piority) {
    const validPiorities = ["all", "low", "medium", "high"];
    if (!piority) {
      return {
        isValid: true,
        value: "all",
      };
    }

    const normalizedPiority = piority.toLowerCase().trim();
    if (!validPiorities.includes(normalizedPiority)) {
      return {
        isValid: false,
        error: `Piority filter must be one of ${validPiorities.join(",")}`,
      };
    }

    return {
      isValid: true,
      value: normalizedPiority,
    };
  }

  validateArgs(args, minArgs = 0, maxArgs = Infinity) {
    if (!Array.isArray(args)) {
      return {
        isValid: false,
        error: "Arguments must be an array",
      };
    }

    if (args.length < minArgs) {
      return {
        isValid: false,
        error: `Atlest ${minArgs} is required`,
      };
    }

    if (args.length > maxArgs) {
      return {
        isValid: false,
        error: `Maximum ${maxArgs} allowed`,
      };
    }

    return {
      isValid: true,
      value: args,
    };
  }

  validateDate(dateString) {
    if (!dateString) {
      return {
        isValid: false,
        error: "Date is required",
      };
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return {
        isValid: false,
        error: "Invalid date format",
      };
    }

    return {
      isValid: true,
      value: date.toISOString(),
    };
  }

  validateTaskObject(task) {
    if (!task || typeof task !== "object") {
      return {
        isValid: false,
        error: "Task must be an object",
      };
    }

    const requiredFields = ["description"];
    const missingFields = requiredFields.filter((field) => !task[field]);

    if (missingFields.length > 0) {
      return {
        isValid: false,
        error: `Missing required fields ${missingFields.join(",")}`,
      };
    }

    const validDescription = this.validateDescription(task.description);
    if (!validDescription) {
      return validDescription;
    }

    if (task.piority) {
      const piorityValidation = this.validatePiority(task.piority);
      if (!piorityValidation) {
        return piorityValidation;
      }
    }

    return {
      isValid: true,
      value: task,
    };
  }

  sanitizeString(input) {
    if (typeof input !== "string") {
      return "";
    }

    return input.trim().replace(/\s+/g, " ").replace(/[<>]/g, "");
  }
}

export default new Validator();
