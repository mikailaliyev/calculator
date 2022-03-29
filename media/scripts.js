const el = (htmlElement) => {
    if(htmlElement.charAt(0) === "#") {
        return document.querySelector(htmlElement)
    }
}
