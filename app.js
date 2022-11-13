const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routers/mainRouter');

app.listen(3000, ()=>{
    console.log('Servidor Levantadoo');
    });

app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(mainRouter); 
