const PORT = 3030;
const HOST = "localhost";

const express = require('express');
const path = require('path')

const app = express();

app.get('/', (request, response) => {
    response.redirect('/login')
})

app.use(express.static('styles'));
app.use(express.static('assets'));
// temporary
app.use(express.static('temp_scripts'));

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, '..') + '/pages/login/index.html')
})

app.get('/registration', (request, response) => {
    response.sendFile(path.join(__dirname, '..') + '/pages/registration/index.html')
})

app.listen(PORT, HOST, () => {
    console.log(`Frontend server runs on: http://${HOST}:${PORT}`);
})
