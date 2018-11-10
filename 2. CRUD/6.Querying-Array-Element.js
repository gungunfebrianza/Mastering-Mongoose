const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ArraySchema = new Schema({
  item: String,
  qty: Number,
  tags: [String],
  dim_cm: [Number]
});

// 2. Compile Schema
var ArrayModel = mongooseConnection.model('Array', ArraySchema);

var arrDocuments = [
  { item: 'journal', qty: 25, tags: ['blank', 'red'], dim_cm: [14, 21] },
  { item: 'notebook', qty: 50, tags: ['red', 'blank'], dim_cm: [14, 21] },
  {
    item: 'paper',
    qty: 100,
    tags: ['red', 'blank', 'plain'],
    dim_cm: [14, 21]
  },
  { item: 'planner', qty: 75, tags: ['blank', 'red'], dim_cm: [22.85, 30] },
  { item: 'postcard', qty: 45, tags: ['blue'], dim_cm: [10, 15.25] }
];

async function run() {
  await ArrayModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await ArrayModel.find({ tags: 'red' })
    .then(function(doc) {
      console.log(doc);
      console.log('Document Fetched!');
    })
    .catch(err => console.log(err));

  await ArrayModel.find({ dim_cm: { $gt: 25 } })
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
