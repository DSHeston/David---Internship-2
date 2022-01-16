// const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// let randomNumber = [];
// while (randomNumber < .7) {
//     let numberGenerator = Math.random();
//     randomNumber.push(numberGenerator)
//     if (randomNumber => .7) {
//         alert('randomnumber => .7')
//     }
// }

// let randomNumbers = [];
// let finished = false;

// while (!finished) {
//     let rndNmbrs = Math.random();
//     randomNumbers.push(rndNmbrs);
//     if (rndNmbrs > 0.8) {
//     finished = true;
//     alert('finished = true')
//     }
// }

 let randomNumbers = [];
 let secondNumbers = [];
 let finished = false;

 while (!finished) {
     let secondrndNmbrs = Math.random();
     let rndNmbrs = Math.random();
     randomNumbers.push(rndNmbrs);
     secondNumbers.push(secondrndNmbrs)
     // use a if else statement if I want a unique alert for different conditions met
    if (rndNmbrs > 0.7 && secondrndNmbrs > 0.7 || rndNmbrs < .02 || secondrndNmbrs < .02) {
    finished = true;
    loopArrays();
    //alert('finished = true')
     }
 }

 function loopArrays() {
     for (let elmt of randomNumbers){
         console.log(`${'1st array'} ${elmt}`)
         for (let i = secondNumbers.length-1; i>=0; i--) {
            console.log(`${'2nd array inverted'} ${secondNumbers[i]}`)
            break;
        }
     }
     
 }

