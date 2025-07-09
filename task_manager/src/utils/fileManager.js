/*
 *file manager utility
 *
 *handles file system operations for the task manager
 * this hmodule is responsible for reading, writing, and managing the tasks data file
 */

import { promises as fs } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

class fileManager {
  constructor() {
    this.dataDir = path.join(os.homedir(), "task_manager");
    this.dataFile = path.join(this.dataDir, "tasks.json");
    this.ensureDataDirectory();
  }

  /**
   * Ensures the data directory exists
   */

  async ensureDataDirectory() {
    try {
      await fs.access(this.dataDir);
    } catch (error) {
      fs.mkdir(this.dataDir, { recursive: true });
    }
  }

  /**
   * read all tasks from the data file
   * @returns (Array) Array of tasks
   */
  async readTasks() {
    try {
      const data = await fs.readFile(this.dataFile, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        return [];
      }

      throw new Error(`failed to read tasks: ${error.message}`);
    }
  }

  async writeTasks(tasks) {
    try {
      await this.ensureDataDirectory();
      await fs.writeFile(
        this.dataFile,
        JSON.stringify(tasks, null, 2),
        "utf-8"
      );
    } catch (error) {
      throw new Error(`failed to write tasks: ${error.message}`);
    }
  }

  async addTask(task) {
    const tasks = await this.readTasks();
    const newTask = {
      id: this.generateId(tasks),
      ...task,
      createdAt: new Date().toISOString(),
      completed: false,
      completedAt: null,
    };

    tasks.push(newTask);
    await this.writeTasks(tasks);
    console.log("new task is", newTask);
    return newTask;
  }

  async updateTask(id, updates) {
    const tasks = await this.readTasks();
    const tasksIndex = tasks.findIndex((task) => task.id === id);
    if (tasksIndex === -1) {
      return null;
    }

    let taskAtIndex = tasks[tasksIndex];
    taskAtIndex = { ...taskAtIndex, ...updates };
    // tasks.push(taskAtIndex);
    tasks[tasksIndex] = taskAtIndex;

    await this.writeTasks(tasks);
    return taskAtIndex;
  }

  async deleteTask(id) {
    const tasks = await this.readTasks();
    const initialLength = tasks.length;
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (initialLength === filteredTasks.length) {
      return false;
    }

    await this.writeTasks(filteredTasks);
    return true;
  }

  async getTaskById(id) {
    const tasks = await this.readTasks();
    return tasks.find((task) => task.id === id) ?? null;
  }

  async getStats() {
    const tasks = await this.readTasks();
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    return {
      total,
      completed,
      pending,
      completedRatio: completed > 0 ? Math.round((total / completed) * 100) : 0,
    };
  }

  async clearAllTasks() {
    await this.writeTasks([]);
  }

  generateId(tasks) {
    if (tasks.length === 0) return 1;
    const maxId = Math.max(...tasks.map((task) => task.id));
    return maxId + 1;
  }
}

export default new fileManager();

// console.log(Math.max(...[1, 2, 3]));
