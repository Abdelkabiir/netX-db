import * as mongo from 'mongodb';
import { dataBaseName, url } from './utils/constants';

export class MongoRunner {
    public static client: mongo.MongoClient;
    constructor() {}

    public static connect(): Promise<any> {
        return mongo.MongoClient
          .connect(url, {useNewUrlParser: true})
          .then(client => {
              const dataBase = client.db(dataBaseName);
              console.log('Attempting connection ..')
              return {
                  client,
                  dataBase
              }
          })
          .catch(error => console.error('Error while connecting to the server with error : ', error))
      }

    public disconnect(): void {
        MongoRunner.client.close();
    }
}