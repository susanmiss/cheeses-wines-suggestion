const express =  require('express')
const morgan =  require('morgan')
const bodyParser =  require('body-parser')
const cors =  require('cors')
const axios = require('axios')
const fetch = require('node-fetch');
const fs = require('fs');
require('dotenv').config()

const app = express()

//ROUTEs
// const postRoutes = require('./routes/postRoute')
// const {listCheeses} = require('./controllers/postController');

//MIDDLEWARES
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
//ROUTES MIDDLEWARE

app.get('/',  (req, res) => {
    fetch(`http://cheesebored.herokuapp.com/cheeses`)
    .then(res => res.json())
    .then(data => res.json( data ))
    .catch(error => {console.log(err) })
})


app.get('/cheese/:id',  (req, res) => {
    const id = req.params.id;
    console.log('id is ', req.params)
    fetch(`http://cheesebored.herokuapp.com/cheeses/${id}`)
    .then(res => res.json())
    .then(data => res.json( data ))
    .catch(error => {console.log(err) })
})

app.get('/cheese-created/:id',  (req, res) => {
    const id = req.params.id;
    console.log('id is ', req.params)
    
})

app.get('/wines',  (req, res) => {
    fetch(`https://winebored.herokuapp.com/wines`)
    .then(res => res.json())
    .then(data => res.json( data ))
    .catch(error => {console.log(err) })
})



app.post('/create',  (req, res) => {
  console.log(req.body)

  fs.writeFile('database.json', '{"cheeses":[]}', (err) => {
    if (err) {
        console.log('error saving to file');
        return
    };
    console.log('Created Database File');
});

  fs.readFile('./database.json', 'utf8', (err, data) => {
    if (err) {
        console.log('error reading file!');
        return
    };
    console.log('Reading from file...');
    
    let dataJson = JSON.parse(data);
  

    //Assign ID in one line
    req.body.id = dataJson.cheeses.length;
    dataJson.cheeses.push(req.body);
  
    //Write JSON to database file
    let myJson = JSON.stringify(dataJson);
    fs.writeFile('database.json', myJson, (err) => {
        if (err) {
            console.log('error saving new Cheese to file');
            return
        };
        console.log('Saved new Cheese to file!');
    });
    console.log(myJson);
    res.send(myJson);
});
    
})



//LISTEN:
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`App is listen on port ${port}`))