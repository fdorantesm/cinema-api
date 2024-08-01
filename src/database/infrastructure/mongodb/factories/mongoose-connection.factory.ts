import { Connection } from 'mongoose';
// eslint-disable-next-line
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { anonymoose } from 'mongoose-anonymoose';

export class MongooseConnectionFactory {
  public static createForInstance(connection: Connection): Connection {
    connection.plugin(anonymoose);
    connection.plugin(mongoosePaginate);
    return connection;
  }
}
