const net = require("net");
const conn = net.createConnection({
  host: "localhost",
  port: 3000,
});
conn.on("data", (data) => {
  console.log("Server says: ", data);
});
conn.on("connect", () => {
  conn.write("Hello from client!");
});
conn.setEncoding("utf8");

////////

const net = require("net");

const conn = net.createConnection({
  host: "localhost", // change to IP address of computer, more on that below
  port: 50541,
});

conn.setEncoding("utf8"); // interpret data as text

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Hello", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();