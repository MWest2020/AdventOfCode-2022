//tsc --target es5 to compile. es6 doesn work es3 neither
import * as fs from 'fs'
import * as rd from 'readline'

const fileName = './day3.txt'

const reader = rd.createInterface(fs.createReadStream(fileName))

function getTotalPriority(){

    let totalPriority: number = 0;

    reader.on('line', (l:string) => {

        //write code
        let a = l.slice(0, l.length / 2)
        let b = l.slice(l.length /2 , l.length)

        let commonCharacter = getCommonCharacter(a, b)
        totalPriority += getLetterValue(commonCharacter)
        console.log(totalPriority);
        
    })

}
getTotalPriority()

function getCommonCharacter(a: string, b : string){
    for (const charA of a){
        for (const charB of b){
            if (charA === charB) return charA;
        }
    }
    return "";
}

function getLetterValue(string: string): number{
    // let val={
    //     a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    //     l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    //     u: 21, v: 22, w: 23, x: 24, y: 25, z: 26, A:27, B:28, C:29, D:30,
    //     E:31, F:32, G:33, H:34, I:35, J:36, K:37, L:38, M:39, N:40, O:41, 
    //     P:42, Q:43, R:44, S:45, T:46, U:47, V:48, W:49, X:50, Y:51, Z:52 
    // }
    

    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let letter = string;
    let letterValue = alphabets.indexOf(letter)+1;
    return letterValue;
}


