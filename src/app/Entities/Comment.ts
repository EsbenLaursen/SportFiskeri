import {Topic} from './Topic';
import {User} from './User';
/**
 * Created by EsbenLaursen on 26-04-2017.
 */
 export class Comment {
   Id: number;
   Content: string;
    Topic: Topic;
    TopicId: number;
    WrittenByUser: User;
    WrittenByUserId: number;
    Date: Date;
}
