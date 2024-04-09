export type ProfileDTO = {
  id: number;
  firstName: string;
  lastName: string;
  favoriteColor: string;
};

export type ProductPreviewDTO = {
  productId: number;
  productTitle: string;
  thumbnailUri: string;
};

export type ProductDTO = {
  id: number;
  title: string;
  price: number;
  barcode: string;
};
