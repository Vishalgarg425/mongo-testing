const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err, client) => {
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected');
  var db=client.db('TodoApp');
  db.collection('Todos').find().toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('unable to fetch', err);
  });


  client.close();
});
