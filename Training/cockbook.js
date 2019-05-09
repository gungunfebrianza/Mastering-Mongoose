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

async function run_find() {
  await MamaliaModel.find()
    .then(function(documents) {
      console.log('Find Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findById() {
  await MamaliaModel.find({ _id: '5cd06dd4c20128271d336f00' })
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByField() {
  await MamaliaModel.find({ type: 'Anjing' })
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByFields() {
  await MamaliaModel.find({ type: 'Harimau', age: 24 })
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByFieldGetSpecificField() {
  await MamaliaModel.find({ type: 'Anjing' }, 'name age')
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByFieldGetSpecificFields() {
  await MamaliaModel.find({ type: 'Anjing' }, { name: 1, age: 1 })
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByField() {
  await MamaliaModel.find({ type: 'Anjing' })
    .then(function(documents) {
      console.log('Find By Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByArrayElement() {
  await MamaliaModel.find({ live: 'Forest' })
    .then(function(documents) {
      console.log('Find By Object Properties Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByObjectProperties() {
  await MamaliaModel.find({ 'characteristic.weight': 20 })
    .then(function(documents) {
      console.log('Find By Object Properties Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByRegex() {
  await MamaliaModel.find({ name: /rista/i })
    .then(function(documents) {
      console.log('Find By Regex Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByRegexWithSpecificField() {
  await MamaliaModel.find({ name: /rista/i }, 'type name')
    .then(function(documents) {
      console.log('Find By Regex Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByEquality() {
  await MamaliaModel.find({ quantity: { $eq: 12000 } })
    .then(function(documents) {
      console.log('Find By Greater Than Properties Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByGreaterThan() {
  await MamaliaModel.find({ type: 'Anjing', age: { $gte: 12 } })
    .then(function(documents) {
      console.log('Find By Greater Than Properties Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByLowerThan() {
  await MamaliaModel.find({ type: 'Anjing', age: { $lte: 12 } })
    .then(function(documents) {
      console.log('Find By Lower Than Properties Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

async function run_findByRangeField() {
  await MamaliaModel.find({ age: { $gt: 10, $lt: 22 } })
    .then(function(documents) {
      console.log('Find By Range Field Success!');
      console.log('------ Result -------');
      for (let i = 0; i < documents.length; i++) {
        console.log(documents[i]);
      }
    })
    .catch(err => console.log(err));
}

// run_create();
// run_insertMany();

/* Find parameter :
db.collection.find(query, projection); */

// run_find();
// run_findById(); // { _id: '5cd06dd4c20128271d336f00' }
// run_findByField(); // { type: 'Anjing' }
// run_findByFields(); // { type: 'Harimau', age: 24 }
// run_findByFieldGetSpecificField(); // { type: 'Anjing' }, 'name age'
// run_findByFieldGetSpecificFields(); // { type: 'Anjing' }, { name: 1, age: 1 }
run_findByArrayElement(); // {live : 'Forest'}
// run_findByObjectProperties(); // { 'characteristic.weight': 20 }
// run_findByRegex(); // { name: /rista/i }
// run_findByRegexWithSpecificField(); // { name: /rista/i }, 'type name'

// ======[Comparison Operator] ======
// run_findByEquality(); // { quantity: { $eq: 12000 } } or { age: { $eq: 12000 } }
// run_findByGreaterThan(); // { type: 'Anjing', age: { $gte: 12 } }
// run_findByLowerThan(); // { type: 'Anjing', age: { $lte: 12 } }
// run_findByRangeField(); // { age: { $gt: 10, $lt: 22 } }

/* Find parameter :
db.collection.find(query, projection); */
