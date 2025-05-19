import express from "express";
import { users } from "./data/users";
import * as fs from "fs/promises";
import * as path from "path";
import { User } from "./data/user-type";

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// GET /api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST /api/users
app.post("/api/users", async (req, res) => {
  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);
  const usersFilePath = path.join(__dirname, "data", "users.ts");

  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8");
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error writing to users.ts:", error);
    res.status(500).json({ error: "Failed to update users file" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
