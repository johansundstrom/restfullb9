var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Site = require('./models/model'), //läs in modellen här
    bodyParser = require('body-parser'); //

// mongoose instans
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://be9.asuscomm.com/sitedb', { useMongoClient: true }); //eliminerar ett problem med mongoose 4.11

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/route'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' hittade inte' })
});

app.listen(port);
console.log('Account RESTful API server startad på: ' + port);

