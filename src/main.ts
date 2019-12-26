import { MongoRunner } from "./mongo.runner";

MongoRunner
    .connect()
    .then(x => {
        console.log(x.dataBase.collection('global').find({}));
        x.client.close()
    })