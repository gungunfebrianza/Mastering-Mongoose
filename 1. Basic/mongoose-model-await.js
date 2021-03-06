const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var connection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var schema = new Schema({
  name: 'string',
  size: 'string'
});

// 2. Compile Schema
var ModelTank = connection.model('ModelTank', schema);

// 3. Create Document
var DocumentBig = new ModelTank({
  name: 'big',
  size: 'big'
});

DocumentBig.save()
  .then(function(doc) {
    console.log(doc);
    console.log('saved'); // saved!
  })
  .catch(err => {
    console.log(err);
  });

// 4. Querying
//we want to display all the tank we've seen.
async function ModelFind() {
  let x = await ModelTank.find(function(err, tanks) {
    if (err) return console.error(err);
    console.log(tanks);
  });

  return x;
}

function display(x) {
  console.log(typeof x);
}

display(ModelFind());

/* This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
