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
//Getting digits from buttons
const getNumber = (e) => {
  if (screen.innerText === operator) {
    screen.innerText = "";
  }
  screen.innerText = newNumber += e;
};
//Getting math operators from buttons
const getOperator = (e) => {
  operator = e;
  if (!oldNumber) {
    oldNumber = newNumber = parseFloat(newNumber);
    newNumber = "";
    screen.innerText = "";
  }
  screen.innerText = operator;
  newNumber = "";
};
//Getting result with equal button
const equal = () => {
  if (!operator) {
    result = 0;
    oldNumber = 0;
    newNumber = "";
    screen.innerText = result;
  } else {
    result = 0; //To show zero when the equal button clicked right after page load
    switch (operator) {
      case "/":
        result = oldNumber / parseFloat(newNumber);
        break;
      case "X":
        result = oldNumber * parseFloat(newNumber);
        break;
      case "*":
        result = oldNumber * parseFloat(newNumber);
        break;
      case "-":
        result = oldNumber - parseFloat(newNumber);
        break;
      case "+":
        result = oldNumber + parseFloat(newNumber);
        break;
    }
    oldNumber = result;
    screen.innerText = oldNumber;
    newNumber = "";
    operator = "";
  }
};
//Resetting result, oldNumber, newNumber, and cleaning the sreen
const reset = () => {
  result = 0;
  oldNumber = "";
  newNumber = "";
  screen.innerText = "0";
};
//Fixing last number both on screen and in memory
const fixLastDigit = () => {
  if (!newNumber) {
    oldNumber = parseFloat(
      String(result).substring(0, String(result).length - 1)
    );
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
  } else {
    newNumber = String(newNumber).substring(0, String(newNumber).length - 1);
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
  }
};
//Changing numbers sing (positive or negative) both on screen and memory
const changeDigitSign = () => {
  newNumber = -newNumber;
  screen.innerText = newNumber;
  if (oldNumber) {
    oldNumber = -oldNumber;
    screen.innerText = oldNumber;
  }
};
//Working with percents
const percent = () => {
  result = (parseFloat(newNumber) * oldNumber) / 100;
  screen.innerText = result;
  oldNumber = 0
};
//Cycling through array of values of buttons to get values
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = () => getNumber(numbers[i].textContent);
}
//Cycling through array of values of buttons to get values for operators
for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = () => getOperator(operators[i].textContent);
  if (operators[i].innerText === "=") {
    operators[i].onclick = () => equal(operators[i].textContent);
  }
  if (operators[i].innerText === "C") {
    operators[i].onclick = () => reset(operators[i].textContent);
  }
  if (operators[i].innerText === "<") {
    operators[i].onclick = () => fixLastDigit(operators[i].textContent);
  }
  if (operators[i].innerText === "+/-") {
    operators[i].onclick = () => changeDigitSign(operators[i].textContent);
  }
  if (operators[i].innerText === "%") {
    operators[i].onclick = () => percent(operators[i].textContent);
  }
}

document.addEventListener("keydown", (event) => {
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(event.key)) {
    getNumber(event.key);
  }
  if (["%", "/", "*", "X", "-", "+"].includes(event.key)) {
    event.preventDefault();
    getOperator(event.key);
  }
  if (["Enter"].includes(event.key)) {
    equal(event.key);
  }
  if (["Delete"].includes(event.key)) {
    reset(event.key);
  }
  if (["ArrowRight"].includes(event.key)) {
    fixLastDigit(event.key);
  }
  if (["ArrowUp"].includes(event.key)) {
    changeDigitSign(event.key);
  }
  if (["ArrowDown"].includes(event.key)) {
    percent(event.key);
  }
});
