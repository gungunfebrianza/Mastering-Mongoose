const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var mongooseConnection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var ArticleSchema = new Schema({
  subject: { type: String, text: true },
  author: String,
  views: 'number'
});

// 2. Compile Schema
var ArticleModel = mongooseConnection.model('Article', ArticleSchema);

var arrDocuments = [
  { subject: 'coffee', author: 'xyz', views: 50 },
  { subject: 'Coffee Shopping', author: 'efg', views: 5 },
  { subject: 'Baking a cake', author: 'abc', views: 90 },
  { subject: 'baking', author: 'xyz', views: 100 },
  { subject: 'Café Con Leche', author: 'abc', views: 200 },
  { subject: 'Сырники', author: 'jkl', views: 80 },
  { subject: 'coffee and cream', author: 'efg', views: 10 },
  { subject: 'Cafe con Leche', author: 'xyz', views: 10 }
];

ArticleSchema.index({ subject: 1 }); // schema level

async function run() {
  await ArticleModel.insertMany(arrDocuments)
    .then(function(doc) {
      console.log(doc);
      console.log('success Insert!');
    })
    .catch(err => console.log(err));

  await ArticleModel.find({ $text: { $search: 'coffee' } })
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
