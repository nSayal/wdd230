let year = new Date().getFullYear();
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}` 

let lastModifiedParagraph = document.querySelector("#lastModified")
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

  