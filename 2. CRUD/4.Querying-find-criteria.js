const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ProductSchema = new Schema({
  item: String,
  qty: Number
});

// 2. Compile Schema
var ModelProduct = mongooseConnection.model('Product', ProductSchema);

ModelProduct.find({ item: 'Flower', qty: { $gte: 5 } })
  .then(function(doc) {
    console.log('---Result :');
    console.log(doc);
    console.log('---Detail Information :');
    console.log(`Data Type : ${typeof doc}`);
    console.log(`Data at Index 0 : ${doc[0]}`);
    console.log(`Item Name : ${doc[0].item}`);
    console.log('Document Fetched!');
  })
  .catch(err => console.log(err));

/* 
-------------------------------------------------
This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
