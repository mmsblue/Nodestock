const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path =require('path');

const PORT = process.env.PORT || 5000;

// set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello there, this is otherstuff1"



// set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
      stuff: otherstuffat
    });
});





// set static folder
app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT, () => console.log('Server listening on PORT' + PORT));
