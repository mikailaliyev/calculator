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
    if (!["/", "X", "-", "+", "=", "C", "<", "%"].includes(i.innerText)) {
      el("#screen").innerText += i.innerText;
    }
    //Changing border color of math operators NOT WORKING YET!
    if (["/", "X", "-", "+", "=", "C", "<", "%"].includes(i.innerText)) {
      //Preventing operators to be shown more than once
      ["/", "X", "-", "+", "=", "C", "<", "%"].includes(el("#screen").innerText.slice(-1))
        ? el("#screen").innerText
        : (el("#screen").innerText += i.innerText);

      //   if (!i.style.border) i.style.border = "3px solid red";
      //
    }

    //Equal does things
    if (i.innerText === "=") {
      el(".ops").forEach((i) => {
        i.style.border = null;
      });
      el("#screen").innerText = "";
    }
  });
});
