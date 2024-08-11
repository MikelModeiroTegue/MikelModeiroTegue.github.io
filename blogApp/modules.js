
const fs = require("fs");

const readStream = fs.createReadStream("./mikel.txt");
const writeStream = fs.createWriteStream("./Hardin.txt");

readStream.on("data", (chunk) => {
  console.log("..................NEW CHUNK.......................\n");
  console.log(chunk);
});

readStream.pipe(writeStream);