const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var UpdateSchema = new Schema({
  item: String,
  qty: Number,
  size: Schema.Types.Mixed,
  status: String
});

// 2. Compile Schema
var ModelUpdate = mongooseConnection.model('update', UpdateSchema);

/* var arr = [
  { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
  { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
  { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
]; */

async function run() {
/*   await ModelUpdate.insertMany(arr)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err)); */

  await ModelUpdate.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" }
    }
  )
    .then(function(doc) {
      console.log('------ Result -------');
      console.log(doc);
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
