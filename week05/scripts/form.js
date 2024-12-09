var date = new Date().getFullYear();
let LastModif = new Date(document.lastModified);
document.getElementById("year").innerHTML = date;
document.getElementById("lastModified").innerHTML = LastModif;

document.addEventListener("DOMContentLoaded", () =>{
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
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
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Review Submitted!: Total reviews: ${reviewCount}`);
        window.location.href = "review.html";
    }
})