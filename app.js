const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel.js');
const app = express();
const port = 3000;

require('dotenv').config();

app.use(webpackMiddleware(webpack(webpackConfig)));
app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, './build')}));
app.listen(port, () => console.log(`Listening on port ${port}...`));