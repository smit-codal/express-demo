# Express Demo API

A simple REST API demonstration built with Express.js and TypeScript for managing user data.

## Features

- RESTful API endpoints for user management
- TypeScript support
- In-memory data storage with file persistence
- Sample client implementation for testing

## Project Structure

```
src/
├── app.ts          # Main Express application
├── client.ts       # Test client for API demonstration
└── data/
    ├── user-type.ts # User interface definition
    └── users.ts     # User data store
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev` - Starts the development server with hot-reload
- `npm run client` - Runs the test client to demonstrate API functionality

## API Endpoints

### GET /api/users

- Returns a list of all users
- Response: Array of user objects

### POST /api/users

- Creates a new user
- Request body: `{ "name": string, "email": string }`
- Response: Created user object with assigned ID

## Technology Stack

- Express.js - Web framework
- TypeScript - Programming language
- ts-node-dev - Development server
- Axios - HTTP client for the test application

## License

ISC
