"use strict";
exports.__esModule = true;
var fs = require("fs");
var rd = require("readline");
var fileName = './day4.txt';
var reader = rd.createInterface(fs.createReadStream(fileName));
function getOverlap() {
    var overlapCounter = 0;
    reader.on('line', function (l) {
        var pairs = getPairs(l);
        var firstPairStartAndEnd = getPairStartAndEnd(pairs, 0);
        var secondPairStartAndEnd = getPairStartAndEnd(pairs, 1);
        var firstPairStart = getPairStart(firstPairStartAndEnd);
        var firstPairEnd = getPairEnd(firstPairStartAndEnd);
        var secondPairStart = getPairStart(secondPairStartAndEnd);
        var secondPairEnd = getPairEnd(secondPairStartAndEnd);
        // if(
        //     firstPairStart <= secondPairStart && firstPairEnd >= secondPairEnd || 
        //     secondPairStart <= firstPairStart && secondPairEnd >= firstPairEnd) {
        //         overlapCounter += 1
        //     }
        // part 2
        if (
        // //first overlaps
        // firstPairStart <= secondPairStart ||
        // firstPairEnd >= secondPairStart ||
        // // seconds overlaps
        // secondPairStart <= firstPairStart ||
        // secondPairEnd >= firstPairStart 
        firstPairStart > secondPairEnd || secondPairStart > firstPairEnd) {
            overlapCounter += 1;
        }
        console.log(overlapCounter);
    });
}
getOverlap();
function getPairs(string) {
    var pairs = string.split(',');
    return pairs;
}
function getPairStartAndEnd(arr, index) {
    var startAndEnd = arr[index].split('-');
    return startAndEnd;
}
function getPairStart(arr) {
    return parseInt(arr[0]);
}
function getPairEnd(arr) {
    return parseInt(arr[1]);
}
