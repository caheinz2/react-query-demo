import axios from "axios";
import { ProfileDTO } from "../types/api";

axios.defaults.baseURL = "http://localhost:3001";
export async function getProfileById(id: number): Promise<ProfileDTO> {
  const result = await axios.get(`user/${id}`);
  return result.data;
}
