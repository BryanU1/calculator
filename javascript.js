let display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.reset');
let numArray = [];

for (const number of numbers) {
  number.addEventListener('click', () => {
    display.textContent += number.textContent;
  });
}

for (const operator of operations) {
  operator.addEventListener('click', () => {
    numArray.push(Number(display.textContent));
    if (numArray.length % 3 == 0) {
      display.textContent = operate(numArray[numArray.length - 3], numArray[numArray.length - 2], numArray[numArray.length - 1]);

      console.log(numArray);
      return;
    }
    numArray.push(operator.textContent);
    display.textContent = '';
  });
}

equal.addEventListener('click', () => {
  numArray.push(Number(display.textContent));
  if (numArray.length % 3 != 0) {
    display.textContent = '';
    alert('ERROR');
    return;
  }
  display.textContent = operate(numArray[numArray.length - 3], numArray[numArray.length - 2], numArray[numArray.length - 1]);
});

clear.addEventListener('click', () => {
  display.textContent = '';
  numArray = [];
});


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case 'x':
      return multiply(a,b);
    case '/':
      return divide(a,b);
  }
}