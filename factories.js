const fs = require("fs");
const searchFile = (filename, callback) => {
  const path = `.///data/${filename}.txt`;
  fs.access(path, fs.F_OK, err => {
    if (err) {
      console.log(err);
      callback(false);
    } else {
      console.log("good");
      callback(true);
    }
  });
};

const outputFile = (filename, callBack) => {
  const path = `.///data/${filename}.txt`;
  fs.readFile(path, (err, data) => {
    if (err) callBack(err, null);
    return callBack(null, data);
  });
};

module.exports = { searchFile, outputFile };
