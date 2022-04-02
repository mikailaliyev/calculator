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
let oldNumber;
let operator;
let result;

//Functions to handle values
const getNumber = (e) => {
  if (result) {
    newNumber = "";
    oldNumber = "";
    screen.innerText = "";
  }

  screen.innerText += e;
  newNumber += e;
  console.log(newNumber);
};

const getOperator = (e) => {
  operator = e;
  console.log(operator);
  oldNumber = newNumber = parseFloat(newNumber);
  newNumber = "";

  if (operator === "C") {
    newNumber = "";
    oldNumber = "";
    screen.innerText = "";
  }
};

const equal = () => {
  newNumber = parseFloat(newNumber);
  switch (operator) {
    case "/":
      result = oldNumber / newNumber;
      screen.innerText = result;
      break;
    case "X":
      result = oldNumber * newNumber;
      screen.innerText = result;
      break;
    case "-":
      result = oldNumber - newNumber;
      screen.innerText = result;
      break;
    case "+":
      result = oldNumber + newNumber;
      screen.innerText = result;
      break;
    default:
      console.log(``);
  }
};

//Cycling through array of values of buttons to get values
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = () => getNumber(numbers[i].textContent);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = () => getOperator(operators[i].textContent);
  if (operators[i].innerText === "=") {
    operators[i].onclick = () => equal();
  }
}
