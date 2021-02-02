import Category from "./Category";

export default class Product {
  _id?: number|string;
  category: {};
  name: String;
  excerpt: String;
  description: String;
  price: number;
  stock: number;
  image: String;
  status: Boolean;
}