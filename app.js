const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');


// Add the route handlers here:

app.get('/', (req, res) => {
    res.render('index');
});



app.get('/about.hbs', (req, res) => {
    res.render('about');
})

app.get('/works.hbs', (req, res) => {
    res.render('works');
})

app.get('/photos.hbs', (req, res) => {
    res.render('photos');
})


app.listen(3000, () => console.log('🏃‍ on port 3000'));

