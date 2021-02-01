import { NumberValueAccessor } from "@angular/forms";

export default class Product {
  id?: number;
  category: String;
  name: String;
  excerpt: String;
  description: String;
  price: number;
  stock: number;
  image: String;
  status: Boolean;
}