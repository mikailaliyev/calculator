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
let count = 0


//Getting digits from buttons
const getNumber = (e) => {
  if (screen.innerText === operator) {
    screen.innerText = "";
  }
  screen.innerText = newNumber += e;
  console.log(`New number is: ${newNumber}`);
};

//Getting math operators from buttons
const getOperator = (e) => {
  operator = e;
  if(!oldNumber) {    
    oldNumber = newNumber = parseFloat(newNumber);
    newNumber = ""
    screen.textContent = ""
  }
  screen.innerText = operator;
  newNumber = ""
};

const equal = () => {      
      switch (operator) {
        case "/":
          result = oldNumber / parseFloat(newNumber);
          break;
        case "X":
          result = oldNumber * parseFloat(newNumber);
          break;
        case "-":
          result = oldNumber - parseFloat(newNumber);
          break;
        case "+":
          result = oldNumber + parseFloat(newNumber);
          break;
      }
      screen.innerText = result;
      oldNumber = result
      newNumber = ""
}

const reset = () => {
  result = 0
  oldNumber = "";
  newNumber = "";
  screen.innerText = ""
  count = 0
}

const fixLastDigit = () => {
    newNumber = newNumber.substring(0, newNumber.length - 1)
  screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
}

const changeDigitSign = () => {
  newNumber = -newNumber
  screen.innerText = newNumber
  console.log(newNumber);
}

//Cycling through array of values of buttons to get values
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = () => getNumber(numbers[i].textContent);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = () => getOperator(operators[i].textContent);
  if (operators[i].innerText === "=") {
    operators[i].onclick = () => equal(operators[i].textContent)
  }
  if (operators[i].innerText === "C") {
    operators[i].onclick = () => reset(operators[i].textContent)
  }
  if (operators[i].innerText === "<") {
    operators[i].onclick = () => fixLastDigit(operators[i].textContent)
  }
  if (operators[i].innerText === "+/-") {
    operators[i].onclick = () => changeDigitSign(operators[i].textContent)
  }
}
