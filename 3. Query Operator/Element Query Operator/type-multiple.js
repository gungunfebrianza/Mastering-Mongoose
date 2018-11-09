const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var GradesSchema = new Schema({
  name: 'string',
  classAverage: Schema.Types.Mixed
});

// 2. Compile Schema
var GradesModel = mongooseConnection.model('Grades', GradesSchema);

var arrDocuments = [
  { name: 'Alice King', classAverage: 87.333333333333333 },
  { name: 'Bob Jenkins', classAverage: '83.52' },
  { name: 'Cathy Hart', classAverage: '94.06' },
  { name: 'Drew Williams', classAverage: 93 }
];

GradesModel.insertMany(arrDocuments)
  .then(function(doc) {
    console.log(doc);
    console.log('success Insert!');
  })
  .catch(err => console.log(err));

GradesModel.find({ classAverage: { $type: ['string', 'double'] } })
  .then(function(doc) {
    console.log(doc);
    console.log('Document Fetched!');
  })
  .catch(err => console.log(err));

/* This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
