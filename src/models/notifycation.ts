import { NotificationType } from "constants/enum";
import { Store } from "./store";
import { Profile, User } from "./user";

export interface Notifycation {
  title?: string;
  createdAt?: string;
  body?: string;
  user?: User;
  type?: `${NotificationType}`;
  store?: Store;
  relatedUser?: {
    profile?: Profile;
  };
}
