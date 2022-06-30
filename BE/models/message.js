// creo el schema y modelo

const { Schema, model } = require(`mongoose`);

const messageSchema = new Schema({
    mensaje: { type: String, required: true, max: 100 },
});

module.exports = model(`Messages`, messageSchema);