const db = require(`../db/db`);
const messageModel = require(`../models/message`);

db
    .then(_ => messageModel.find())
    .then(message => console.log(message))
    .catch(err => console.log(`Error: ${err.message}`))
    .finally(() => process.exit());