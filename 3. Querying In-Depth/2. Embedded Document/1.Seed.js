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
  size: Schema.Types.Mixed,
  status: String
});

// 2. Compile Schema
var ArrayModel = mongooseConnection.model('EmbedDoc', ArraySchema);

var arrDocuments = [
  { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },
  {
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },
  {
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
];

async function run() {
  await ArrayModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('Insert Success!');
      console.log('------ Result -------');
      for (let i = 0; i < doc.length; i++) {
        console.log(doc[i]);
      }
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
