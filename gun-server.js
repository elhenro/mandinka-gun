/*
// import the native http module
var http = require('http')

// import gun
var Gun = require('gun')

// create a new gun instance
var gun = new Gun()

// create a new server instance
var server = new http.Server()

// add the /gun.js route to your server
server.on('request', gun.wsp.server)

/*
  Handle incoming gun traffic
  from clients (that's where the
  real-time goodness comes from).
*/
/*
gun.wsp(server)

// start listening for requests on `localhost:8080`
server.listen(8080)
*/

// import the server function
var startGunServer = require('gun-server');

// use said function
var gun = startGunServer();

// by default, it'll listen on http://localhost:8080
