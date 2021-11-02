const fs = require('fs');
const ReadStream = fs.createReadStream(__dirname + '\\text.txt', "utf8");
 
ReadStream.on("data", function(chunk){ 
    console.log(chunk);
});
