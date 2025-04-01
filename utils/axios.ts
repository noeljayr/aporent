
import axios from "axios";
import { cookies } from "next/headers";

const token = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token");
};

export const fetchData = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
