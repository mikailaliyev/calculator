//Neat DOM elements picking
const el = (htmlElement) => {
  if (htmlElement.charAt(0) === "#") {
    return document.querySelector(htmlElement);
  } else {
    return Array.from(document.querySelectorAll(htmlElement));
  }
};

//Changing colors of clicked buttons
el(".ops").forEach((i) => {
  i.addEventListener("click", () => {
    //Operations to screen
    if (!["C", "<", "+/-", "="].includes(i.innerText)) {
      el("#screen").innerText += i.innerText;
    }

    //Preventing operators to be shown more than once
    if (["/", "X", "-", "+", "%"].includes(i.innerText)) {
      ["/", "X", "-", "+", "%"].includes(el("#screen").innerText.slice(-1))
        ? el("#screen").innerText
        : (el("#screen").innerText += i.innerText);
    }

    //Clean screen
    if (i.innerText === "C") {
      el("#screen").innerText = "";
    }

    //Delete last character
    if (i.innerText === "<") {
      el("#screen").innerText = el("#screen").innerText.substr(
        0,
        el("#screen").innerText.length - 1
      );
    }
  });
});
