const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var schema = new Schema({
  name: 'string',
  age: {
    type: Number,
    min: [5, 'Too young'],
    max: 99
  },
  wallet: { type: Number, required: [true, 'Add Me Money!'] }
});

// 2. Compile Schema
var ModelMan = mongooseConnection.model('Man', schema);

ModelMan.find({ 'item.name': { $eq: 'ab' } })
  .then(function(doc) {
    console.log(doc);
    console.log(typeof doc);
    console.log(doc[0]);
    console.log(doc[0].name);
    console.log('Document Fetched!');
  })
  .catch(err => console.log(err));

/* Example Script :
{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: ["A", "B", "C"] }
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: ["B"] }
{ _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: ["A", "B"] }
{ _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: ["B", "A"] }
{ _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [["A", "B"], "C"] } */

/* This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
