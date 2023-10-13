const express = require('express');
const db = require('./db');
const router = require('./router');
const app = express();
const PORT = 7000;


app.use(express.json());
app.use(router);






// SERVER CONTECTION CHECK

app.get('/health', (req,res)=>  {
    return res.send("healthy");
})

// DDBB CONECTION CHECK

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})

module.exports = app;