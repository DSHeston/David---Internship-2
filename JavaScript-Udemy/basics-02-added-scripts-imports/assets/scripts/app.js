const defaultResult=0;
let currentResult = defaultResult;
let logEntries = []

function getUserNumberInput () {
    return parseInt(userInput.value);
}

alert ('this works!');

//const CalcDescription being read as a string
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult (currentResult, calcDescription);
}

function writeToLog (operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        opperation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    //should console be a var?
    console.log(logEntries[0]);

}


function add () {
    const enteredNumber = getUserNumberInput ();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput ('+', initialResult, enteredNumber);
    writeToLog ('Add', initialResult, enteredNumber, currentResult);   
}

function subtract () {
    const enteredNumber = getUserNumberInput ();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput ('-', initialResult, enteredNumber);
    writeToLog ('Subtract', initialResult, enteredNumber, currentResult);
    add()
}

function multiply () {
    alert ('multiply has run!')
    const enteredNumber = getUserNumberInput ();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput ('*', initialResult, enteredNumber);
    writeToLog ('Multiply', initialResult, enteredNumber, currentResult);
}

function divide () {
    const enteredNumber = getUserNumberInput ();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput ('/', initialResult, enteredNumber);
    writeToLog ('Divide', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)

