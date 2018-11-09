const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ProductSchema = new Schema({
  item: Schema.Types.Mixed,
  qty: Number,
  tags: []
});

// 2. Compile Schema
var ModelProduct = mongooseConnection.model('Product', ProductSchema);

var arrDocuments = [
  { item: { name: 'ab', code: '123' }, qty: 15, tags: ['A', 'B', 'C'] },
  { item: { name: 'cd', code: '123' }, qty: 20, tags: ['B'] },
  { item: { name: 'ij', code: '456' }, qty: 25, tags: ['A', 'B'] },
  { item: { name: 'xy', code: '456' }, qty: 30, tags: ['B', 'A'] },
  { item: { name: 'mn', code: '000' }, qty: 20, tags: [['A', 'B'], 'C'] }
];

async function run() {
  await ModelProduct.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await ModelProduct.find({ tags: { $eq: ['A', 'B'] } })
    .then(function(doc) {
      console.log(doc);
      console.log(typeof doc);
      console.log(doc[0]);
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
