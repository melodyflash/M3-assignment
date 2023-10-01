let coinFlip = parseInt(Math.round(Math.random()))
let outcome
// document.write(`${coinFlip}`)

userPick = prompt('Heads or Tails?').toLowerCase()

if (userPick === 'heads') {
    if (coinFlip == 1){
        outcome = 'The flip was heads and you chose heads...you win!'
    } else {
        outcome = 'The flip was tails but you chose heads...you lose!'
    }
} else if(userPick === 'tails') {
    if (coinFlip == 0){
        outcome = 'The flip was tails and you chose tails...you win!'
    } else {
        outcome = 'The flip was heads but you chose tails...you lose!'
    }
} else {
    outcome = 'You did not pick heads or tails.. you lose!'
}
document.write(`${outcome}`)