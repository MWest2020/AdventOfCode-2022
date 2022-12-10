//tsc --target es5 to compile. es6 doesn work es3 neither
import * as fs from 'fs'
import * as rd from 'readline'

const fileName = './day3.txt'

const reader = rd.createInterface(fs.createReadStream(fileName))


function getItemPriorityTotal(){

    const threeStringsArray = ["fill"];
    let totalPriority: number  = 0;
  
    reader.on('line', (l:string) => {
        // really weird fix for not undefined array
        if(threeStringsArray[0] === "fill") threeStringsArray.splice(0)
        threeStringsArray.push(l);

        let a =  threeStringsArray[0];
        let b = threeStringsArray[1];
        let c = threeStringsArray[2];

       if(threeStringsArray.length == 3){
           
        let common = getCommonCharacterOfThree(a,b,c);
        totalPriority += getLetterValue(common)
        threeStringsArray.splice(0)
    
        console.log("The total answer for day3, part 2 = " + totalPriority);
       }
    })
}

getItemPriorityTotal()


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

function getCommonCharacter(a : string, b: string){
    for (const charA of a){
        for (const charB of b){
            if (charA === charB) return charA;
        }
    }
    return "";
}


function getCommonCharacterOfThree(a : string, b: string, c: string){
    for (const charA of a){
        for (const charB of b){
            for (const charC of c){
                if (charA === charB && charA === charC) return charA;
            }
        }
    }
    return "";
}




function getLetterValue(string: string): number{

    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let letter = string;
    let letterValue = alphabets.indexOf(letter)+1;
    return letterValue;
}


