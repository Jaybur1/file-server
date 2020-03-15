const net = require("net");
const server = net.createServer();
const { searchFile, outputFile } = require("./factories");

server.on("connection", user => {
  console.log("someone is connected");
  user.setEncoding("utf8");
  user.write("your connected");

  user.on("data", data => {
    const input = data.substr(0, data.length - 1);
    console.log(`Searching ${input}`);
    searchFile(input, boolean => {
      if (boolean) {
        outputFile(input, (err, res) => {
          if (err) {
            user.write(`Sorry, the file you are looking is not there`);
          } else {
            user.write(res);
          }
        });
      } else {
        user.write(`Sorry,no file found with the name ${input}`);
      }
    });
  });
});

console.log("Server is on ...");
server.listen("3000");
