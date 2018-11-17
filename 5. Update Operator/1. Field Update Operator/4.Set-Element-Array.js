const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ProductSchema = new Schema({
  _id: Number,
  sku: String,
  quantity: Number,
  instock: Boolean,
  reorder: Boolean,
  details: Schema.Types.Mixed,
  tags: [String],
  ratings: Schema.Types.Mixed
});

// 2. Compile Schema
var ModelUpdate = mongooseConnection.model('update', ProductSchema);

async function run() {
  await ModelUpdate.updateOne({ _id: 100 },
    {
      $set:
      {
        "tags.1": "rain gear",
        "ratings.0.rating": 2
      }
    })
    .then(function (doc) {
      console.log('------ Result -------');
      console.log(doc);
      /*       for (let i = 0; i < doc.length; i++) {
        console.log(doc[i]);
      } */
      console.log('Document Fetched!');
    })
    .catch(err => console.log(err));
}

run();

/* 
-------------------------------------------------
This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
