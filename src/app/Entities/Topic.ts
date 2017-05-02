import {Comment} from './Comment';
import {User} from './User';
/**
 * Created by EsbenLaursen on 25-04-2017.
 */
export class Topic {
  Id: number;
  Header?: string;
  Comments?: Comment[];
  WrittenByUser?: User;
  Date?: Date;

}
