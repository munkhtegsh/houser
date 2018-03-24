require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const port = process.env.PORT || 3010;

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname + '/public'))

massive(process.env.DB_PORT).then((db) => {
    app.set('db', db)
});

app.get('/api/houses', (req, res) => {
    app.get('db').get_houses().then((respond) => {
        res.status(200).send(respond);
    });
});

// This is the original .post()_______________________________
// app.post('/api/house', (req, res) => {
//     let { name, address, city, state, zipcode } = req.body;

//     app.get('db').add_house([name, address, city, state, zipcode]).then((response) => {
//         res.status(200).send(response);
//     });
// });

// Step 8_______________________________
app.post('/api/house', (req, res) => {
    // let { name, address, city, state, zipcode, add } = req.body;
       let { name, address, city, state, zipcode, img, mortgage, rent } = req.body;
    console.log( name, address, city, state, zipcode, img, mortgage, rent )
    app.get('db').add_house([name, address, city, state, zipcode, img, mortgage, rent]).then((response) => {
        res.status(200).send(response);
    });
});

app.delete('/api/house/:id', (req, res) => {
    let { id } = req.params;
    app.get('db').delete_house([id]).then((response) => {
        res.status(200).send(response)
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));

