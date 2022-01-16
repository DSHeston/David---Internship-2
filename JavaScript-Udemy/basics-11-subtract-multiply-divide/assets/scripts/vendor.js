const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');
const equalsBtn = document.getElementById('btn-equals');
const inputResultBtn = document.getElementById('input-result-btn');
const changeBckrndBtn = document.getElementById('btn-backgroun-change');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
