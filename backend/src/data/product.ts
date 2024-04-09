import { ProductDTO, ProductPreviewDTO } from "../types/api";

export const ProductPreviews: ProductPreviewDTO[] = [
  {
    productId: 1,
    productTitle: "Product 1",
    thumbnailUri: "http://localhost:3001/images/1",
  },
  {
    productId: 2,
    productTitle: "Product 2",
    thumbnailUri: "http://localhost:3001/images/2",
  },
  {
    productId: 3,
    productTitle: "Product 3",
    thumbnailUri: "http://localhost:3001/images/3",
  },
];

export const Products: Record<number, ProductDTO> = {
  1: {
    id: 1,
    title: "Product 1",
    price: 1.23,
    barcode: "1a2b3c",
  },
  2: {
    id: 2,
    title: "Product 2",
    price: 2.34,
    barcode: "2b3c4d",
  },
  3: {
    id: 3,
    title: "Product 3",
    price: 3.45,
    barcode: "3c4d5e",
  },
};
