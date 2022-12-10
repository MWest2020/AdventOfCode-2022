"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tsc --target es5 to compile. es6 doesn work es3 neither
var fs = require("fs");
var rd = require("readline");
var fileName = './day3.txt';
var reader = rd.createInterface(fs.createReadStream(fileName));
function getItemPriorityTotal() {
    var threeStringsArray = ["fill"];
    var totalPriority = 0;
    var countGroups = 0;
    reader.on('line', function (l) {
        // really weird fix for not undefined array
        if (threeStringsArray[0] === "fill")
            threeStringsArray.splice(0);
        threeStringsArray.push(l);
        var a = threeStringsArray[0];
        var b = threeStringsArray[1];
        var c = threeStringsArray[2];
        if (threeStringsArray.length == 3) {
            var common = getCommonCharacterOfThree(a, b, c);
            totalPriority += getLetterValue(common);
            threeStringsArray.splice(0);
            console.log("The total answer for day3, part 2 = " + totalPriority);
        }
    });
}
getItemPriorityTotal();
// function getTotalPriority(){
//     let totalPriority: number = 0;
//     reader.on('line', (l:string) => {
//         //write code
//         let a = l.slice(0, l.length / 2)
//         let b = l.slice(l.length /2 , l.length)
//         let commonCharacter = getCommonCharacter(a, b)
//         totalPriority += getLetterValue(commonCharacter)
//         console.log(totalPriority);
//     })
// }
// needed for day 1 answer
// getTotalPriority()
function getCommonCharacter(a, b) {
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var charA = a_1[_i];
        for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
            var charB = b_1[_a];
            if (charA === charB)
                return charA;
        }
    }
    return "";
}
function getCommonCharacterOfThree(a, b, c) {
    for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
        var charA = a_2[_i];
        for (var _a = 0, b_2 = b; _a < b_2.length; _a++) {
            var charB = b_2[_a];
            for (var _b = 0, c_1 = c; _b < c_1.length; _b++) {
                var charC = c_1[_b];
                if (charA === charB && charA === charC)
                    return charA;
            }
        }
    }
    return "";
}
function getLetterValue(string) {
    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letter = string;
    var letterValue = alphabets.indexOf(letter) + 1;
    return letterValue;
}
