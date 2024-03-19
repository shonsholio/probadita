const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//IMPORTING ROUTES
const mainRoutes = require('./routes/main')

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//MIDDLEWARES
app.use(morgan('dev'));


//ROUTES
app.use('/', mainRoutes);

app.listen(app.get('port'), () => {
  console.log('CONECTADO AL PUERTO 3000')
});