'use strict'

const express = require('express');
const app = express();

const config = require('./config');


require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.listen(config.PORT, function() {
  console.log(`API on port ${config.PORT}`)
});
