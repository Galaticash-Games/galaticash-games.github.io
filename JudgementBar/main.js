const fs = require("fs");

// Submit the text from the input box to be written to a file
function submitInput() {
  let inputBox = document.getElementById("test-input");
  let text = inputBox.innerHTML;

  let filename = "testWrite";
  readFile(filename);
  writeFile(filename, text);
  readFile(filename);
}

// Try to read data from the given file
function readFile(filename) {
    fs.writeFile(filename, (err, data) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Read file: ");
    console.log(data);
  });
}

// Try writing the given data to the given file
function writeFile(filename, text) {
  fs.writeFile(filename, text (err) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Successfully updated!");
  });
}
