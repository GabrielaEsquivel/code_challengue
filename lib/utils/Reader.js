const fs = require("fs");
//require("../../explorers.json")
class Reader {
    static readJsonFile(path){
        const rawdata = fs.readFileSync('visualpartners.json');
        return JSON.parse(rawdata);  
    }
}
module.exports = Reader;
