let year = new Date().getFullYear();
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}` 




let lastModifiedParagraph = document.querySelector("#lastModified")
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`