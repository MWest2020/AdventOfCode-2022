"use strict";
exports.__esModule = true;
var fs = require("fs");
var rd = require("readline");
var fileName = '../data.txt';
var reader = rd.createInterface(fs.createReadStream(fileName));
function getNumbersArray() {
    var data = [];
    var acc;
    reader.on('line', function (l) {
        var nr = parseInt(l);
        if (l === "") {
            data.push(acc);
            acc = 0;
        }
        else {
            acc += nr;
        }
        data.sort().reverse();
        console.log("The answer is of day1 , puzzle 1 is : " + data[1]);
    });
}
getNumbersArray();
// let fileContent = fs.readFile(fileName, 'utf8', (err, data) => {
//     let acc: number = 0;
//     console.log(data)})
// console.log(fileContent);
