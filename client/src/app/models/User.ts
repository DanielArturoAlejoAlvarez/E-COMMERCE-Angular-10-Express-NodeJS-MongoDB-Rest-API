import { NumberValueAccessor } from "@angular/forms";

export default class User {
  id?: number;
  displayName: String;
  email: String;
  username: String;
  password: String;
  avatar: String;
  role: String;
  status: Boolean;
}