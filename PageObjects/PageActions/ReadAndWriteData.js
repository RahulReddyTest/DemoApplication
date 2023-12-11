const fs = require("fs");

function readData(path){
    fs.readFileSync('user.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }
        // parse JSON object
        const myData = JSON.parse(data.toString('utf-8'));
        return myData;
      })
}

function writeFileData(path,key,value){

    const myData = readData(path);
    myData[key] = value;

    fs.writeFile(path, myData, (error) => {

        // throwing the error
        // in case of a writing problem
        if (error) {
          // logging the error
          console.error(error);
          throw error;
        }
      
        console.log("data written correctly");
    })

}


module.exports = {readData,writeFileData}