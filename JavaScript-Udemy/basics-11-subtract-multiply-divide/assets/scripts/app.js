const defaultResult = 0;
let currentResult = defaultResult;
let num1;
let num2;
let symbol = null; 

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function clearUserInput() {
  return usrInput.value = null;
  
}

function add() {
  num2 = getUserNumberInput ();
  currentResult = num1 + num2;
  createAndWriteOutput('+', num1, num2);
}

function subtract() {
  num2 = getUserNumberInput ();
  currentResult = num1 - num2;
  createAndWriteOutput('-', num1, num2);
}

function multiply() {
  num2 = getUserNumberInput ();
  currentResult = num1 * num2;
  createAndWriteOutput('*', num1, num2);
}

function divide() {
  num2 = getUserNumberInput ();
  currentResult = num1 / num2;
  createAndWriteOutput('/', num1, num2);
}

  
function symbolForAddition() {
  symbol = '+';
  num1 = getUserNumberInput();
  createAndWriteOutput('+', num1, 0);
  clearUserInput();
  
}

function symbolForMultiply() {
  symbol = '*';
  num1 = getUserNumberInput();
  createAndWriteOutput('*', num1, 0);
  clearUserInput();
  
}

function symbolForSubtraction() {
  symbol = '-';
  num1 = getUserNumberInput();
  createAndWriteOutput('-', num1, 0);
  clearUserInput();
}

function symbolForDivision() {
  symbol = '/';
  num1 = getUserNumberInput();
  createAndWriteOutput('/', num1, 0);
  clearUserInput();
}

function clear(params) {
  num1=0
  num2=0
  operator=null
  createAndWriteOutput(' ', num1, num2);
  outputResult(defaultResult, null)
  clearUserInput();

}

function inputResult() {
  return usrInput.value = currentResult;
  
}

function changBackgroundColor() {
  const currentBackgroundColor = document.getElementById('body');

  if (currentBackgroundColor.style.backgroundColor !== 'red') {
    currentBackgroundColor.style.backgroundColor = 'red';
  } else {
    currentBackgroundColor.style.backgroundColor = 'white';
  }
}

function runEquation (params) {
  switch (symbol) {
    case '+': add();
    
      
      break;

      case '*': multiply();
    

      break;

      case '/': divide();
      
      break;

      case '-': subtract();

      break;
  
    default: alert('no operator was selected!!!')
      break;
  }
}


addBtn.addEventListener('click', symbolForAddition);
equalsBtn.addEventListener('click', runEquation);
subtractBtn.addEventListener('click', symbolForSubtraction);
divideBtn.addEventListener('click', symbolForDivision);
multiplyBtn.addEventListener('click', symbolForMultiply);
clearBtn.addEventListener('click', clear);
inputResultBtn.addEventListener('click', inputResult);
changeBckrndBtn.addEventListener('click', changBackgroundColor);