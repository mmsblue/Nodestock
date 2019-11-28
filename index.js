//hej

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path =require('path');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;



// use bodyparser middleware

app.use(bodyParser.urlencoded({extended: false}));





// API key pk_0a84705a741f416c91697d90270c1f48
// create call api function
function call_api(finishedApi, ticker) {
  request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_0a84705a741f416c91697d90270c1f48', { json:true}, (err, res, body) => {
    if (err) {return console.log(err);}
    if (res.statusCode === 200){
      //console.log(body);
      finishedApi(body);
    };
  });
};








// set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello there, this is otherstuff1"



// set handlebars index get  routes
app.get('/', function (req, res) {
  call_api(function(doneApi) {
    res.render('home', {
      stock: doneApi
    });
  },"fb");

});


// set handlebars index post routes
app.post('/', function (req, res) {
  call_api(function(doneApi) {
    //posted_stuff = req.body.stock_ticker;
    res.render('home', {
      stock: doneApi,
    });
  }, req.body.stock_ticker);

});



//create about page routes
app.get('/about.html', function (req, res) {
    res.render('about',);
});






// set static folder
app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT, () => console.log('Server listening on PORT' + PORT));
