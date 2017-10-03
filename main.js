"use strict";

var corpus;//utf8 string of the body of text

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}


// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  //console.log(data);
  corpus = data;
  printCorpus();
});

function printCorpus (){
console.log(corpus);
console.log(corpus.length);
}
