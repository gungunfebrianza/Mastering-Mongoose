const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var connection = mongoose.createConnection(
  'mongodb://localhost:27017/training'
);

// 1. Create Schema
var AnimalSchema = new Schema({
  type: String,
  name: String,
  characteristic: Schema.Types.Mixed,
  age: { type: Number, min: 1, max: 25 },
  quantity: Number,
  live: [],
  updated: { type: Date, default: Date.now }
});

// 2. Compile Schema
var MamaliaModel = connection.model('Animal', AnimalSchema);

var carnivoraDocuments = [
  {
    type: 'Harimau',
    name: 'Max',
    characteristic: {
      weight: 200,
      color: 'Yellow & Black',
      food: ['Deer', 'Sheep']
    },
    age: 20,
    quantity: 4000,
    live: ['Forest', 'Mountain']
  },
  {
    type: 'Anjing',
    name: 'Krista',
    characteristic: {
      weight: 50,
      color: 'Black',
      food: ['Meat', 'Rat']
    },
    age: 15,
    quantity: 59000,
    live: ['Forest', 'Home']
  }
];

async function run_insertMany() {
  await MamaliaModel.insertMany(carnivoraDocuments)
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

run_insertMany();
