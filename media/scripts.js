//Neat DOM elements picking
const el = (htmlElement) => {
  if (htmlElement.charAt(0) === "#") {
    return document.querySelector(htmlElement);
  } else {
    return Array.from(document.querySelectorAll(htmlElement));
  }
};

let screen = el("#screen");
let numbers = el(".nums");
let operators = el(".ops");
let newNumber;
let oldNumber;
let operator;
let result;

const alertThis = (e) => {
  newNumber = parseFloat(e);
};
const alertThat = (e) => {
  operator = e;
  console.log(operator);
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = () => alertThis(numbers[i].textContent);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = () => alertThat(operators[i].textContent);
}
