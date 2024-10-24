const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Hello", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!"); // Print success message
 
  conn.write("Name: KNB");//adding initials for name here
  
  //setTimeout(() => { //setTimeout because initials and move were concatenated!
  //conn.write("Move: up");//move snake up command
  //}, 50);//50 ms delay
});

  return conn;
};

module.exports = { connect };


