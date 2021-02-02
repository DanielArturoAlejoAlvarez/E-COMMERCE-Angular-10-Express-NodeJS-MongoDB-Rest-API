import { NumberValueAccessor } from "@angular/forms";

export default class User {
  _id?: number|string;
  displayName: String;
  email: String;
  username: String;
  password: String;
  avatar: String;
  role: String;
  status: Boolean;
}