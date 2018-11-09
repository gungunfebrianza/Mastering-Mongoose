const mongoose = require('mongoose');

async function run() {
  mongoose.connect('mongodb://localhost:27017/test');

  await mongoose.connection.dropDatabase();

  const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));

  await MyModel.create({ name: 'Gun' }, { name: 'Febrianza' });

  // A cursor has a `.next()` function that returns a promise. The promise
  // will resolve to the next doc if there is one, or null if they are no
  // more results.
  const cursor = MyModel.find()
    .sort({ name: 1 })
    .cursor();
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    // Prints "Gun" followed by "Febrianza"
    console.log(doc.name);
  }
}

run().catch(error => console.error(error.stack));

/* This code has been Written By Gun Gun Febrianza
Need Help ? Advice ? or Ask Question hit me at:
gungunfebrianza@gmail.com

Dont Hesitate to connect with me on social media:
Facebook: www.facebook.com / papabitcoin
Twitter: @daddybitcoin
Instagram: mas.ggun */
