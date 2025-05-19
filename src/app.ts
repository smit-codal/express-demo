import express from "express";
import { User } from "./data/user-type";
import db from "./data/db";

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Prepare statements once
const getAllUsers = db.prepare("SELECT * FROM users");
const insertUser = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");

app.get("/api/users", (req, res) => {
  try {
    const users = getAllUsers.all();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

//@ts-ignore
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  // Input validation
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({ error: "Name and email must be strings" });
  }

  try {
    console.log("Attempting to insert user:", { name, email });
    const result = insertUser.run(name, email);
    console.log("Insert result:", result);

    const newUser: User = {
      id: result.lastInsertRowid as number,
      name,
      email,
    };

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error inserting user:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
