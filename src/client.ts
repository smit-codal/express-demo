import axios from "axios";
import { User } from "./data/user-type";

const API_URL = "http://localhost:3000/api";

async function testApi() {
  try {
    // GET /api/users
    console.log("Fetching all users...");
    const response = await axios.get<User[]>(`${API_URL}/users`);
    console.log("Current users:", response.data);

    // POST /api/users
    console.log("\nCreating a new user...");
    const newUser = {
      name: "Shreya Jain",
      email: "shreya@example.com",
    };

    const createResponse = await axios.post<User>(`${API_URL}/users`, newUser);
    console.log("Created user:", createResponse.data);

    // Fetch again to show updated list
    console.log("\nFetching updated user list...");
    const finalResponse = await axios.get<User[]>(`${API_URL}/users`);
    console.log("Updated users:", finalResponse.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data || error.message);
    } else {
      console.error("Error:", error);
    }
  }
}

testApi();
