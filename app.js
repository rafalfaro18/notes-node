console.log('starting app.');

const fs = require('fs');
const os = require('os');

fs.appendFile('greetings.txt','Hello World!', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
