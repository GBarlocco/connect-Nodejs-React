const db = require(`../db/db`);
const messageModel = require(`../models/message`);

const createMessage = async () => {
    //data que recibimos desde el endpoint, desde la API
    const data = {
        mensaje: `Nuevo mensaje`
    };

    // Realizamos una instancia del modelo:
    const message = new messageModel(data);

    db
        .then(_ => message.save())
        .then(document => console.log(`mensaje guardado`, document))
        .catch(err => console.log(`Error: ${err.message}`))
};

module.exports = createMessage;

