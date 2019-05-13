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
    type: 'Harimau',
    name: 'Mod',
    characteristic: {
      weight: 250,
      color: 'Yellow & Black',
      food: ['Monkey', 'Sheep']
    },
    age: 24,
    quantity: 2000,
    live: ['River', 'Desert']
  },
  {
    type: 'Harimau',
    name: 'Shim',
    characteristic: {
      weight: 250,
      color: 'Yellow & Black',
      food: ['Monkey', 'Sheep']
    },
    age: 24,
    quantity: 2000,
    live: ['River', 'Desert']
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
  },
  {
    type: 'Anjing',
    name: 'Matheo',
    characteristic: {
      weight: 30,
      color: 'Red',
      food: ['Fox', 'Fish']
    },
    age: 10,
    quantity: 12000,
    live: ['Forest', 'Home']
  }
];

async function run_create() {
  await MamaliaModel.create({
    type: 'Anjing',
    name: 'Qrista',
    characteristic: {
      weight: 20,
      color: 'Pink',
      food: ['Human', 'Egg']
    },
    age: 12,
    quantity: 300,
    live: ['Cave', 'Dungeon']
  })
    .then(function(documents) {
      console.log('Create Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => console.log(err));
}

async function run_insertMany() {
  await MamaliaModel.insertMany(carnivoraDocuments)
    .then(function(documents) {
      console.log('Insert Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

/* Insert parameter :
 */

// run_create();
// run_insertMany();
