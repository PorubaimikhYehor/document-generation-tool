var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
const bodyParser = require('body-parser')

var languagesRouter = require('./routes/language.routes');
var blanksRouter = require('./routes/blank.routes');
var templatesRouter = require('./routes/template.routes');
var companyEntitiesRouter = require('./routes/companyEntities.routes');
var companyOwnersRouter = require('./routes/companyOwners.routes');
var contentRouter = require('./routes/content.routes');
var countriesRouter = require('./routes/country.routes');

const locations = require('../config/locations.config');

var app = express();

app.use(bodyParser.json())
app.use(cors());

app.use(logger('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: false, limit: '100mb' }));
app.use(cookieParser());

app.use('/api/languages', languagesRouter);
app.use('/api/blanks', blanksRouter);
app.use('/api/content', contentRouter);
app.use('/api/templates', templatesRouter);
app.use('/api/companyEntities', companyEntitiesRouter);
app.use('/api/companyOwners', companyOwnersRouter);
app.use('/api/countries', countriesRouter);

// const _app_folder = location.client;

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(locations.client, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.get('/*', (req, res) => {  
  res.status(200).sendFile(`/`, {root: locations.client});
});


module.exports = app;
