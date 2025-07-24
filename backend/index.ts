const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use('/api', router);

async function start() {
    try {
        app.listen(PORT, '0.0.0.0', () =>
            console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();