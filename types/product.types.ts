import { TCategory } from "./category.types";

export type TProducts = {
  name: string;
  _id: string;
  cover_image: {
    path: string;
    public_id: string;
  };
  createdAt: string;
  updatedAt: string;
  description: string;
  category: TCategory;
  brand: TCategory;
  price: string;
  stock: string;
};
