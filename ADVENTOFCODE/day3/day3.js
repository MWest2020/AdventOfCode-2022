"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tsc --target es5 to compile. es6 doesn work es3 neither
var fs = require("fs");
var rd = require("readline");
var fileName = './day3.txt';
var reader = rd.createInterface(fs.createReadStream(fileName));
function getTotalPriority() {
    var totalPriority = 0;
    reader.on('line', function (l) {
        //write code
        var a = l.slice(0, l.length / 2);
        var b = l.slice(l.length / 2, l.length);
        console.log("first half is : " + a.length);
        console.log("second half is: " + b.length);
        var commonCharacter = getCommonCharacter(a, b);
        totalPriority += getLetterValue(commonCharacter);
        console.log(totalPriority);
    });
}
getTotalPriority();
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
function getLetterValue(string) {
    // let val={
    //     a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    //     l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    //     u: 21, v: 22, w: 23, x: 24, y: 25, z: 26, A:27, B:28, C:29, D:30,
    //     E:31, F:32, G:33, H:34, I:35, J:36, K:37, L:38, M:39, N:40, O:41, 
    //     P:42, Q:43, R:44, S:45, T:46, U:47, V:48, W:49, X:50, Y:51, Z:52 
    // }
    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letter = string;
    var letterValue = alphabets.indexOf(letter) + 1;
    return letterValue;
}
