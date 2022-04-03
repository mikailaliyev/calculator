//Neat DOM elements picking
const el = (htmlElement) => {
  if (htmlElement.charAt(0) === "#") {
    return document.querySelector(htmlElement);
  } else {
    return Array.from(document.querySelectorAll(htmlElement));
  }
};

//Setting up variables
let screen = el("#screen");
let numbers = el(".nums");
let operators = el(".ops");
let newNumber = "";
let oldNumber = 0;
let operator;
let result;

const getNumber = (e) => {
  if (newNumber) {
    newNumber = "";
  }
  if (screen.innerText === operator) {
    screen.innerText = "";
  }
  newNumber += e;
  screen.innerText += newNumber;
  console.log(`New number is: ${newNumber}`);
};

const getOperator = (e) => {
  operator = e;
  if (oldNumber) {
    oldNumber = result;
  } else {
    oldNumber = parseFloat(newNumber);
  }

  screen.innerText = operator;
  console.log(`Old number is: ${oldNumber}`);
  switch (operator) {
    case "/":
      result = oldNumber / newNumber;
      break;
    case "=":
      screen.innerText = result;
      break;
  }
};

//Cycling through array of values of buttons to get values
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = () => getNumber(numbers[i].textContent);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = () => getOperator(operators[i].textContent);
}
