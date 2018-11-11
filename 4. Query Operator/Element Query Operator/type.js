const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var AddressSchema = new Schema({
  address: String,
  zipCode: Schema.Types.Mixed
});

// 2. Compile Schema
var AddressModel = mongooseConnection.model('Address', AddressSchema);

var arrDocuments = [
  { address: '2030 Martian Way', zipCode: '90698345' },
  { address: '156 Lunar Place', zipCode: '43339374' },
  { address: '2324 Pluto Place', zipCode: 3921412 },
  { address: '55 Saturn Ring', zipCode: 88602117 }
];

async function run() {
  await AddressModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await AddressModel.find({ zipCode: { $type: 'number' } })
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
