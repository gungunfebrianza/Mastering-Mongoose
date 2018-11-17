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

// 3. Create Document
var Document = new ModelUpdate({
  _id: 100,
  sku: 'abc123',
  quantity: 250,
  instock: true,
  reorder: false,
  details: { model: '14Q2', make: 'xyz' },
  tags: ['apparel', 'clothing'],
  ratings: [{ by: 'ijk', rating: 4 }]
});

async function run() {
  await Document.save()
    .then(function(doc) {
      console.log(doc);
      console.log('Success Insert!');
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
