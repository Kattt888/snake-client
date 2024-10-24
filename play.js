const { connect } = require('./client'); 
const { setupInput } = require("./input"); 

console.log("Connecting ...");
const connection = connect(); // create connection to the server

// pass the connection object to setupInput
setupInput(connection); 

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === "\u0003") { // If Ctrl+C is pressed
    process.exit(); // exit the program
  }
};

