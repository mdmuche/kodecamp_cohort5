# CLI Task Manager 📝

A simple Command Line Interface (CLI) application built with Node.js to manage your daily tasks.  
Supports adding tasks, listing them, marking as complete, deleting, and viewing help for commands.

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone
cd task-manager
```

2. **Install dependencies**

```bash
npm install
```

---

## Running the App

Use the following command to run the CLI:

```bash
node src/index.js <command> [options]
```

---

## Available Commands

### `add`

Add a new task.

```bash
node src/index.js add "Buy groceries" --piority high
```

- `description` – Task description (required)
- `--piority` – Task priority (`low`, `medium`, `high`). Defaults to `medium`.

---

### `list`

View all tasks (with optional filters).

```bash
node src/index.js list
node src/index.js list --status completed
node src/index.js list --piority high
```

- `--status` – Filter by task status (`all`, `pending`, `completed`)
- `--piority` – Filter by task priority (`all`, `low`, `medium`, `high`)

---

### `complete`

Mark a task as completed.

```bash
node src/index.js complete 3
```

- `3` – The ID of the task you want to mark as completed.

---

### `delete`

Delete a task by ID.

```bash
node src/index.js delete 3
```

- `3` – The ID of the task you want to delete.

---

### `help`

Show help information for all or a specific command.

```bash
node src/index.js help
node src/index.js help add
```

---

## Data Storage

All tasks are stored in a `tasks.json` file inside your home directory under the `kc-task-manager/` folder.  
This ensures cross-platform compatibility and prevents cluttering the project directory.

---

## 🛠 Technologies Used

- Node.js
- ES Modules
- File System (`fs`) module
- CLI colors and formatting

---

## 🧾 License

MIT License
