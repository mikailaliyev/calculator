const el = (htmlElement) => {
    if(htmlElement.charAt(0) === "#") {
        return document.querySelector(htmlElement)
    } else {
        return Array.from(document.querySelectorAll(htmlElement))
    }
}


//Changing colors of clicked buttons
el(".ops").forEach(i => {
   i.addEventListener("click", () => {
       if(['/','X','-','+'].includes(i.innerText)) {
           i.style.border = "3px solid red"
       }
       if(i.innerText === "=") {
        el(".ops").forEach(i => {
            i.style.border = null
        })
       }
    })
})



