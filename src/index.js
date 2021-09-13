const express = require('express');
const cors = require('cors');
const App = express();
const port = process.env.PORT || 8080;

App.use(cors());
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

require('./routes/index')(App);

App.listen(port, () => console.log(`API running on: http://localhost:${port}`));
