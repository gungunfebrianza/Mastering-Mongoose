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
  instock: Schema.Types.Mixed
});

// 2. Compile Schema
var ArrayModel = mongooseConnection.model('Projection', ArraySchema);

async function run() {
  await ArrayModel.find({ status: 'A' }, { item: 1, status: 1, instock: { $slice: -1 } })
    .then(function(doc) {
      console.log('------ Result -------');
      //console.log(doc);
      for (let i = 0; i < doc.length; i++) {
        console.log(doc[i]);
      }
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
