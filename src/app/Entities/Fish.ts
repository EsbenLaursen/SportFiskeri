import {User} from "./User";
/**
 * Created by EsbenLaursen on 24-04-2017.
 */
export class Fish {
  id: number;
  Type: string;
  DayCaught: Date;
  Length: number;
  Weight: number;
  Bait: string;
  Location: string;
  CaughtByUser: User;
  CaughtByUserId: number;
}
