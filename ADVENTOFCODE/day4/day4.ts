import * as fs from 'fs';
import * as rd from 'readline'

const fileName = './day4.txt';

const reader = rd.createInterface(fs.createReadStream(fileName))

function getOverlap(){

    let overlapCounter = 0;
    reader.on('line', (l:string) => {

        let pairs  = getPairs(l);
        let firstPairStartAndEnd = getPairStartAndEnd(pairs, 0)
        let secondPairStartAndEnd = getPairStartAndEnd(pairs, 1)
        let firstPairStart = getPairStart(firstPairStartAndEnd)
        let firstPairEnd = getPairEnd(firstPairStartAndEnd)
        let secondPairStart = getPairStart(secondPairStartAndEnd)
        let secondPairEnd = getPairEnd(secondPairStartAndEnd)



        // if(
        //     firstPairStart <= secondPairStart && firstPairEnd >= secondPairEnd || 
        //     secondPairStart <= firstPairStart && secondPairEnd >= firstPairEnd) {
        //         overlapCounter += 1
        //     }
        
        // part 2 (do something with ranges, this doesn't work)

        
                if (
                        //first overlaps
                        firstPairStart <= secondPairStart ||
                        firstPairEnd >= secondPairStart ||
                        // seconds overlaps
                        secondPairStart <= firstPairStart ||
                        secondPairEnd >= firstPairStart 
        
        
                    ) { overlapCounter += 1}

        
                


        console.log(overlapCounter);
        
    })



}

getOverlap();

function getPairs(string: string){
    let pairs = string.split(',')
  
    
    return pairs
}

function getPairStartAndEnd(arr: string[], index: number){
    let startAndEnd = arr[index].split('-')
   
    
    return startAndEnd;
}

function getPairStart(arr: string[]){
   
    return parseInt(arr[0]);
}

function getPairEnd(arr:string[]){
    return parseInt(arr[1])
}

