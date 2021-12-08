"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var routes_1 = require("../backend/routes/routes");
var http_1 = require("http");
var app = express_1["default"]();
app.use(cors_1["default"]());
var uri = 'mongodb+srv://Mikhail-Dobatkin:PH15ju74Vi23@cluster0.gj6x1.mongodb.net/BackendApp-React';
mongoose_1["default"].connect(uri, {});
app.use(body_parser_1["default"].json());
app.use(function (req, res, next) {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
app.use('/', routes_1["default"]);
app.use(function (req, res, next) {
    var error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
var httpServer = http_1["default"].createServer(app);
var PORT = process.env.PORT || 3000;
httpServer.listen(PORT, function () { return console.log("The server is running on port " + PORT); });
