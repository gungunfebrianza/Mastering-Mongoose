const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ProductSchema = new Schema({
  category: 'string',
  budget: Number,
  spent: 'number'
});

// 2. Compile Schema
var ProductModel = mongooseConnection.model('Product', ProductSchema);

var arrDocuments = [
  { category: 'food', budget: 400, spent: 450 },
  { category: 'drinks', budget: 100, spent: 150 },
  { category: 'clothes', budget: 100, spent: 50 },
  { category: 'misc', budget: 500, spent: 300 },
  { category: 'travel', budget: 200, spent: 650 }
];

async function run() {
  await ProductModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await ProductModel.find({ $expr: { $gt: ['$spent', '$budget'] } })
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
