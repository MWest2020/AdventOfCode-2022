import * as fs from 'fs';
import * as rd from 'readline'
 
const fileName: string = './day2.txt';

const reader = rd.createInterface(fs.createReadStream(fileName));


function getTournementScore(){
    
    let score = 0;
    
    reader.on('line', (l: string) => {
        switch(l){
            case "A X":
                score += 4 
                break;
            case "A Y":
                score += 8
                break;
            case "A Z":
                score += 3
                break;
            case "B X":
                score += 1 
                break;
            case "B Y":
                score += 5
                break;
            case "B Z":
                score += 9
                break;    
            case "C X":
                score += 7 
                break;
            case "C Y":
                score += 2
                break;
            case "C Z":
                score += 6
                break;
        }
        
        console.log(score);
                
    }
    
    )
}

// getTournementScore()

function getSecretTournementScore(){
    
    let score = 0;
    
    reader.on('line', (l: string) => {
        switch(l){
            case "A X":
                //lose = Scissor
                score += 3 
                break;
            case "A Y":
                //draw = Rock 
                score += 4
                break;
            case "A Z":
                //win = Paper
                score += 8
                break;
            case "B X":
                //lose = Rock
                score += 1
                break;
            case "B Y":
                //draw = Paper
                score += 5
                break;
            case "B Z":
                //win = Scissor
                score += 9
                break;    
            case "C X":
                //lose = Paper
                score += 2
                break;
            case "C Y":
                //draw = Scissor
                score += 6
                break;
            case "C Z":
                //win = Rock
                score += 7
                break;
        }
        
        console.log(score);
                
    }
    
    )
}

getSecretTournementScore()