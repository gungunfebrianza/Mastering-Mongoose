const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ArraySchema = new Schema({
  results: [Number]
});

// 2. Compile Schema
var ArrayModel = mongooseConnection.model('Array', ArraySchema);

var arrDocuments = [{ results: [82, 85, 88] }, { results: [75, 88, 89] }];

async function run() {
  await ArrayModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await ArrayModel.find({ results: { $elemMatch: { $gte: 80, $lt: 85 } } })
    .then(function(doc) {
      console.log(doc);
      console.log('Document Fetched!');
    })
    .catch(err => console.log(err));
}

run();

/* 
-----------------------------------------------
This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
