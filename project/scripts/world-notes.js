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
          name: "Flux capacitor",
          averagerating: 4.5
        },
        {
          id: "ac-2000",
          name: "Low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "fc-2050",
          name: "Power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "Time circuits",
          averagerating: 3.5
        },
        {
          id: "jj-1969",
          name: "Warp equalizer",
          averagerating: 5.0
        }
      ];

      Object.values(localStorage)  
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
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Review Submitted!: Total reviews: ${reviewCount}`);
        window.location.href = "review.html";
    }
})
save to storage using variable
on submit load from local storage recalling variable