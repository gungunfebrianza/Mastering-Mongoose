const mongoose = require('mongoose');
// No need to `await` on this, mongoose 4 handles connection buffering
// internally
mongoose.connect('mongodb://localhost:27017/test');

async function run(sadas) {
  await mongoose.connection.dropDatabase();
  const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
  await MyModel.create({ name: 'Val' });

  // Prints an array with 1 element, the above document
  console.log(await MyModel.find());
}

run().catch(error => console.error(error.stack));

