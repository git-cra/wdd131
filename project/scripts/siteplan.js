const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Tim Crager - WI`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

const mainnav = document.querySelector(".navList")
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});