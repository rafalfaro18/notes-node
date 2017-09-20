console.log('Starting notes.js');

var addNote = (title,body) => {
  console.log('Add a Note',title,body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  console.log('Removing ',title);
};

var getNote = (title) => {
  console.log('Reading ',title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};
//the sames addNote : addNote
