'use strict';
// KHAI BÁO THƯ VIỆN
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express     = require('express');
const cors       = require('cors');
const bodyParser  = require('body-parser');
const { Server }  = require('ws');
// THÔNG TIN SERVER
const URI_MONGODB = "mongodb+srv://admin:db11112222@rabbitcluster.jjait.mongodb.net/";
const DB_NAME = 'cho-thu-db';
const PORT = process.env.PORT || 3000;
// KHỞI TẠO SERVER
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
const wss = new Server({ server });

const { config } = require("./common/config");
const { UTIL } = require("./common/utils");

var { dataController } = require("./modules/data-controller");
var { unitController } = require("./modules/unit-controller");
var { productController } = require("./modules/product-controller");
var { guildController } = require("./modules/guild-controller");
var { townController } = require("./modules/town-controller");
var { userController } = require("./modules/user-controller");

MongoClient.connect(URI_MONGODB, function(err, db) {
    if (err) throw err;
    var dbo = db.db(DB_NAME);

    dataController.install(app, config);
    unitController.install(app, dbo, mongodb, UTIL);  
    productController.install(app, dbo, mongodb, UTIL);
    guildController.install(app, dbo, mongodb, UTIL);
    townController.install(app, dbo, mongodb, UTIL);
    userController.install(app, dbo, mongodb, UTIL);
});