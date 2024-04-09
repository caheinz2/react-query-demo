import axios from "axios";
import { ProductDTO, ProductPreviewDTO, ProfileDTO } from "../types/api";

axios.defaults.baseURL = "http://localhost:3001";
export async function getProfileById(id: number): Promise<ProfileDTO> {
  const result = await axios.get(`users/${id}`);
  return result.data;
}

export async function getAllProductPreviews(): Promise<ProductPreviewDTO[]> {
  const result = await axios.get("products");
  return result.data;
}

export async function getProductById(id: number): Promise<ProductDTO> {
  const result = await axios.get(`products/${id}`);
  return result.data;
}
