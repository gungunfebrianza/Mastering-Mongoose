const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var connection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ProductSchema = new Schema({
  _id: Number,
  item: String,
  qty: Number
});

// 2. Compile Schema
var ModelProduct = connection.model('Product', ProductSchema);

// 3. Create Document
var Document = new ModelProduct({
  _id: 21,
  item: 'Flower',
  qty: 5
});

// 4. Async Function
async function saveDocument() {
  /*   await ModelProduct.create(Document)
    .then(function(product) {
      console.log(product);
    })
    .catch(err => {
      console.log(err);
    }); */

  await Document.save()
    .then(function(product) {
      console.log(product);
    })
    .catch(err => {
      console.log(err);
    });
}

saveDocument();

/* 
-------------------------------------------------
This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
