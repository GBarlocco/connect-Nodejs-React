const createMessage = require('./CRUD/create');

const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    res.send(`Hello World! from server`);
});

app.post(`/post`, (req, res) => {
    console.log(`htpp post --> React`);
    res.redirect(`/feedback`);
    createMessage();
});

const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
