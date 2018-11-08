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
  age: {
    type: Number,
    min: [5, 'Too young'],
    max: 99
  },
  wallet: { type: Number, required: [true, 'Add Me Money!'] }
});

// 2. Compile Schema
var ModelMan = connection.model('Man', schema);

// 3. Create Document
var x = new ModelMan({
  name: 'YumaTULUL',
  age: 32,
  wallet: 2433.87773839
});

// 4. Async Function
async function saveDocument() {
  await x
    .save()
    .then(function(product) {
      console.log(product);
    })
    .catch(err => {
      console.log(err);
    });
}

saveDocument();

/* Document.prototype.save()
Parameters

[options]«Object» options optional options
[options.safe]«Object» (DEPRECATED) overrides schema's safe option
[options.validateBeforeSave]«Boolean» set to false to save without validating.
    [fn]«Function» optional callback

Returns:

«Promise, undefined» Returns undefined if used with callback or a Promise otherwise.

Saves this document. */
