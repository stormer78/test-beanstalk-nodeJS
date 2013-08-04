#!/usr/bin/env node

// *********************************************************************************************
// *********************************************************************************************
// *********************************************************************************************
//	HTTP Service
var http = require('http');
var fs = require("fs");

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hi Shane, nodeJS server pulled from github");
}).listen(8080);
