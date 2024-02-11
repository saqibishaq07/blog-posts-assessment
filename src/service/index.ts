import axios from "axios";
import { IUser } from "../types";

export async function getUsers(): Promise<IUser[]> {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      throw new Error(JSON.stringify(message));
    }

    const message = `Unknown error when fetching users`;
    throw new Error(message);
  }
}
