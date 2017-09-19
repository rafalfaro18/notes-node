console.log('starting app.');
const fs = require('fs');
fs.appendFile('greetings.txt','Hello World!', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
