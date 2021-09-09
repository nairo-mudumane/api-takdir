const express = require('express');
const cors = require('cors');
const App = express();
const port = process.env.PORT || 3000;

require('./routes/index')(App);

App.use(cors());
App.use(express.json());
App.listen(port, () => console.log('server running'));
