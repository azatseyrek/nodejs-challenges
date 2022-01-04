//CRUD
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client)=> {
    if(error) {
        console.log("Unable to connect db");
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: "deniz",
        age: 4
    }, (error, result) => {
        if(error) {
            console.log("Unable to insert user");
        } 
        console.log(result);
    })
})

