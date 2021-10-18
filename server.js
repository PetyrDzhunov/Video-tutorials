const express = require('express');

const app = express();
const { PORT } = require('./config/config');



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));