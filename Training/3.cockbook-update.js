const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect("mongodb://localhost:27017/training");
//support multi-connection
var connection = mongoose.createConnection(
  'mongodb://localhost:27017/training',
  { useNewUrlParser: true }
);

var db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We Are Connected!');
});

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

async function run_updateOne() {
  await MamaliaModel.updateOne({ name: 'Max' }, { name: 'Maximum' })
    .then(documents => {
      console.log('Update One Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateMany() {
  await MamaliaModel.updateMany({ name: 'Maximum' }, { name: 'Max' })
    .then(documents => {
      console.log('Update Many Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateOneWithSet() {
  await MamaliaModel.updateOne({ name: 'Qrista' }, { $set: { age: 25 } })
    .then(documents => {
      console.log('Update With Set Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateManyWithSet() {
  await MamaliaModel.updateMany({ name: 'Qrista' }, { $set: { age: 22 } })
    .then(documents => {
      console.log('Update With Set Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateAddNewField() {
  await MamaliaModel.updateOne(
    { name: 'Qrista' },
    { $set: { age: 27, gender: 'Women' } }
  )
    .then(documents => {
      console.log('Update Add New Field With Set Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateWithPositionalOperator() {
  await MamaliaModel.update(
    { name: 'Matheo', live: 'Forest' },
    { $set: { 'live.$': 'Mountain' } }
  )
    .then(documents => {
      console.log('Update With Positional Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateWithPushOperator() {
  await MamaliaModel.update({ name: 'Matheo' }, { $push: { live: 'Forestry' } })
    .then(documents => {
      console.log('Update With Push Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateWithPullOperator() {
  //Behaviour be careful! Will Remove all Forest Element
  await MamaliaModel.update({ name: 'Matheo' }, { $pull: { live: 'Forest' } })
    .then(documents => {
      console.log('Update With Pull Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

async function run_updateWithPopOperator() {
  // value -1 This will remove the first value from the live array
  // value 1 This will remove the last value from the live array
  await MamaliaModel.update({ name: 'Matheo' }, { $pop: { live: -1 } })
    .then(documents => {
      console.log('Update With Pop Operator Success!');
      console.log('------ Result -------');
      console.log(documents);
    })
    .catch(err => {
      console.log(err);
    });
}

/* Update parameter :
db.collection.updateOne(filter, update, options); */

//Will replace only first matching document.
//run_updateOne();

//Will replace all matching documents.
//run_updateMany();

//Will update only first matching document.
//run_updateOneWithSet();

//Will update all matching documents.
//run_updateManyWithSet();

//If a new field is coming for update, that field will be added to the document.
//run_updateAddNewField(); //limited with schema

//Use the positional operator $
//run_updateWithPositionalOperator();

//The $push operator allows you to push a value into an array
//run_updateWithPushOperator();

//The $pull operator is the opposite of $push
//run_updateWithPullOperator();

//The $pop operator allows you to remove the first or the last value from an array
run_updateWithPopOperator();
