// Create new file to app
const fs = require('fs');
const os = require('os');

var user = os.userInfo();

console.log(user.username);

fs.appendFileSync('greeting.txt', `Hello Wordly fuckers! from ${user.username} Hahahaha`);

// console.log('Hello Worldly Fuckers');
