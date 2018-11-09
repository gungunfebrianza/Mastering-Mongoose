const mongoose = require('mongoose');
// No need to `await` on this, mongoose 4 handles connection buffering
// internally
mongoose.connect('mongodb://localhost:27017/test');

async function run() {
  await mongoose.connection.dropDatabase();
  const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
  await MyModel.create({ name: 'Val' });

  // Prints an array with 1 element, the above document
  console.log(await MyModel.find());
}

run().catch(error => console.error(error.stack));

/* This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
