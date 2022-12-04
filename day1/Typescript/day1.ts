import * as fs from 'fs';
import * as rd from 'readline'
 
const fileName: string = '../data.txt';

const reader = rd.createInterface(fs.createReadStream(fileName));


function getNumbersArray(){
    
    const data: Array<Number> = [];
    let acc : number;

    reader.on('line', (l: string) => {
        
        let nr = parseInt(l);
        
        if(l === ""){
            data.push(acc)
            acc = 0;
        } else {
            acc += nr;
        }
        
        data.sort().reverse()
        console.log(data)
    }
    )
}

getNumbersArray()




// let fileContent = fs.readFile(fileName, 'utf8', (err, data) => {
//     let acc: number = 0;

    
    
//     console.log(data)})
// console.log(fileContent);
