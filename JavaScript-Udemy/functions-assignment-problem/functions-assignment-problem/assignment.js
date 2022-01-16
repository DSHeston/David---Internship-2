function sayHello(name) {
  console.log('Hi ' + name);
}

//sayHello();

function greeting (admin, ...guests) {
for (let elmt of guests) {
  console.log(`Welcome ${elmt}`)
}
console.log(`Your admin is ${admin}`)
}
 

function randomness(rndmNumber) {
rndmNumber();
}

const randomNumber= () => {
  let i = Math.random();
  console.log(i)
}

const z = () => {
  let a = Math.random();
  if (a < 0.5) {
    return 1
  } else {
    return null
  }
}

const t = () => {
  let a = Math.random();
  if (a < 0.8) {
    return 5
  } else {
    return 7
  }
} 
const g = t();
const x = z();
console.log(` var x value is ${x}`);
let secondRandomNumber = [];

function loopedRandomNumbers (scndRndmNumbers = 3) {
  for (let i = 0; i<g; i++) {
    console.log(`scndRndmNumbers is ${scndRndmNumbers}`)
    scndRndmNumbers += Math.random();
     secondRandomNumber.push(scndRndmNumbers);
  }
  console.log(`array ${secondRandomNumber}`)
}

randomness(randomNumber);

x == 1 ? loopedRandomNumbers(x) : loopedRandomNumbers(); 

greeting('David', secondRandomNumber[0], 'susan', 'max', 'sam')