// Create new file to app
// const fs = require('fs');
// const os = require('os');

const http = require('http');

// create a server object:
http
  .createServer((req, res) => {
    res.write('Hello World!'); // write a response to the client
    res.end(); // end the response
  })
  .listen(5000); // the server object listens on port 8080

// var user = os.userInfo();

// console.log(user.username);

// fs.appendFileSync('greeting.txt', `Hello Wordly fuckers! from ${user.username} Hahahaha`);

// console.log('Hello Worldly Fuckers');
