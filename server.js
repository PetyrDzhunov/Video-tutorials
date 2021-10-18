const express = require('express');
const app = express();
const { PORT } = require('./config/config');

require('./config/mongoose');


app.get('/', (req, res) => {
    res.send('working')
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));