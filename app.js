console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

var res = notes.addNote();

// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}.` , (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
