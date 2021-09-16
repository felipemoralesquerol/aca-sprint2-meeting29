require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const { Router } = require('express');
const router = Router();
const app = express();

app.use(express.json())
app.use(morgan('dev'));

router.get('/', (req, res) => { res.json('Hola mundo!') });

// Importación de rutas
const auth = require('./routes/auth');

app.use(router);
app.use(auth);

app.set('port', 3000);
app.listen(3000, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Server listening on port ' + app.get('port'));
    }

})

