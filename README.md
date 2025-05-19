# Express Demo API

A simple REST API demonstration built with Express.js and TypeScript for managing user data with SQLite storage.

## Features

- RESTful API endpoints for user management
- TypeScript support
- SQLite database with better-sqlite3
- Persistent data storage
- Sample client implementation for testing

## Project Structure

```
src/
├── app.ts          # Main Express application
├── client.ts       # Test client for API demonstration
└── data/
    ├── user-type.ts # User interface definition
    └── db.ts        # Database configuration and initialization
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- SQLite3 (included via better-sqlite3)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

The database file (`users.db`) will be automatically created on first run.

## Available Scripts

- `npm run dev` - Starts the development server with hot-reload
- `npm run client` - Runs the test client to demonstrate API functionality

## API Endpoints

### GET /api/users

- Returns a list of all users from the SQLite database
- Response: Array of user objects

### POST /api/users

- Creates a new user in the SQLite database
- Request body: `{ "name": string, "email": string }`
- Response: Created user object with assigned ID
- Note: Email addresses must be unique

## Technology Stack

- Express.js - Web framework
- TypeScript - Programming language
- better-sqlite3 - SQLite database driver
- ts-node-dev - Development server
- Axios - HTTP client for the test application

## Database Schema

### Users Table

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
)
```

## License

ISC
