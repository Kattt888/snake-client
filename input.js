let connection;  // Stores the active TCP connection object

const handleUserInput = (key) => {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  // adding movement commands 
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
};

const setupInput = (conn) => {
  connection = conn;  // save the connection object
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };