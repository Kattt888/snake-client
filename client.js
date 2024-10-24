const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 3000 // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Hello", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!"); // Print success message
 
  conn.write("Name: KNB");//adding initials for name here
  });

  return conn;
};

module.exports = { connect };


