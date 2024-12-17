const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Tim Crager, WI`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", () =>{
    const products = [
        {
          id: "fc-1888",
          name: "Blu-Ray",
        },
        {
        id: "jj-1969",
        name: "Book",
        },
        {
          id: "ac-2000",
          name: "CD",
        },
        {
          id: "fc-2050",
          name: "Digital",
        },
        {
          id: "fs-1987",
          name: "DVD",
        }
      ];
    const productSelect = document.getElementById("pl")
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    })
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);
    localStorage.setItem('reviewCount', reviewCount);
    document.querySelector('form').onsubmit = function(event){
        event.preventDefault();
        const mediaObject = {};
        const typeValue = document.getElementById("type").value;
        const mediaNameValue = document.getElementById("media").value;
        const relyearValue = document.getElementById("relyear").value;
        const nameValue = document.getElementById("name").value;
        const checkedStars = Array.from(document.getElementsByName('stars')).filter( e => e.checked);
        const checkedEditions = Array.from(document.getElementsByName('edition')).filter( e => e.checked);

        mediaObject.type = typeValue
        mediaObject.name = mediaNameValue
        mediaObject.relyear = relyearValue
        mediaObject.name = nameValue

        if(checkedStars.length === 1) {
          mediaObject.stars = checkedStars[0].value
        }

        mediaObject.editions = checkedEditions.map(e=>e.value)

        localStorage.setItem(mediaNameValue, mediaObject);
        alert(`Saved Request by name ${mediaNameValue}`);
    }
})