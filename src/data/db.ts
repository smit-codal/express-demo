import Database from "better-sqlite3";

const db = new Database("users.db");
db.pragma("journal_mode = WAL");

// Create users table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`);

// Add initial data if table is empty
interface CountResult {
  count: number;
}
const userCount = db
  .prepare("SELECT COUNT(*) as count FROM users")
  .get() as CountResult;
if (userCount.count === 0) {
  const insert = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");

  // Insert initial users
  insert.run("John Doe", "john@example.com");
  insert.run("Jane Smith", "jane@example.com");
  insert.run("Smit Raghani", "smit@example.com");
}

export default db;
