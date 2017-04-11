
var express = require('express'),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    autoIncrement = require('mongoose-auto-increment');

var url = 'mongodb://127.0.0.1:27017/productDB';    


var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));


var connection = mongoose.connect(url, function(err){
    if(err){
        process.exit(1);
    }else{
        console.log("Connection Established !");
    }
});


autoIncrement.initialize(connection);

app.use(function (req, res, next) {
        res.set('X-Powered-By', 'Product Web API');
        next();
    });

    var allowCrossDomain = function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    }

    app.use(allowCrossDomain);
    //app.use(autoReap);
    //enable pre-flight.
    //enable all cors request.
   // app.use(cors());


var route = require("./routers/route");

app.use('/api', route);

    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            log.error("unexpected error occur ", err);
            res.status(err.status || 500);
            res.json({
                errorMsg: "Currently we are experiencing technical difficulties. Please try after some time."
            });
        });
    }


app.listen(4000, function(){
    console.log("Service is running on port 4000");
});