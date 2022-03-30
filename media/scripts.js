//Neat DOM elements picking
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
       //Operations to screen
        if(!['/','X','-','+','=','C','<','%'].includes(i.innerText)) {
            el("#screen").innerText = i.innerText  
        }
        //Changing border color of math operators NOT WORKING YET!
       if(['/','X','-','+','=','C','<','%'].includes(i.innerText) && i.style.border === null) {
           i.style.border = "3px solid red"
       }

       if(i.innerText === "=") {
        el(".ops").forEach(i => {
            i.style.border = null
        })
       }
    })
})



