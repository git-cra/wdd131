const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Tim Crager - WI`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;


const mainnav = document.querySelector(".navList")
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const cities = [
	{
		cityName: "Oriata",
		type: "Village",
		population: 324,
		imageUrl: "https://cdna.artstation.com/p/assets/covers/images/009/459/028/large/offer-canfi-fantasy-starter-town-low.jpg?1519122342"
	},
	{
		cityName: "Akadon",
		type: "Village",
		population: 446,
		imageUrl: "https://i.pinimg.com/originals/06/b7/3f/06b73fef3701306458663ea93e37e167.jpg"
	},
	{
		cityName: "Kaesea",
		type: "Port",
		population: 673,
		imageUrl: "https://get.wallhere.com/photo/artwork-fantasy-city-town-digital-river-bridge-boat-medieval-old-bridge-old-building-magic-wizard-people-1743259.jpg"
	},
	{
		cityName: "Greville",
		type: "Village",
		population: 1023,
		imageUrl: "https://images.squarespace-cdn.com/content/v1/5ee552f5f8341714a0a13df8/7579783a-5aff-45f5-b9b7-1d4feb788a5e/AdobeStock_559104679.jpeg"
	},
	{
		cityName: "Eryburgh",
		type: "Village",
		population: 1501,
		imageUrl: "https://i.pinimg.com/originals/b0/9f/3a/b09f3a7ccd9157bd620ac5b8474d3137.jpg"
	},
	{
		cityName: "Driecburg",
		type: "Village",
		population: 2349,
		imageUrl: "https://i.pinimg.com/originals/a5/dd/63/a5dd63c12cdcc4805c61579e1b419600.jpg"
	},
	{
		cityName: "Anegate",
		type: "Town",
		population: 55641,
		imageUrl: "https://i.pinimg.com/originals/d0/c7/79/d0c779ebb3c412ba42bf18e248f4dff1.jpg"
	},
	{
		cityName: "Edruwood",
		type: "City",
		population: 341654,
		imageUrl: "https://i.pinimg.com/originals/e7/71/44/e7714443bdc9ad8481fe4a82161ca268.jpg"
	},
	{
		cityName: "Helbridge",
		type: "Port",
		population: 562148,
		imageUrl: "https://cdna.artstation.com/p/assets/images/images/005/780/018/large/sergey-lameyko-temple-1.jpg?1493727313"
	},
	{
		cityName: "Dawnstar",
		type: "Capital",
		population: 1860905,
		imageUrl: "https://wallpapercave.com/wp/wp8543466.jpg"
	},
]

function dataCities(items) {
	return `<figure>
				<img src="${items.imageUrl}" alt="${items.cityName}" width= 400, heigth= 250, loading"lazy" width="400"
                height="auto">
				<figcaption>
					<h3>${items.cityName}</h3>
					<p>Type of Town: ${items.type}</p>
					<p>Population: ${items.population}</p>
				</figcaption>
			</figure>`;

}

function rendersections(cities) {
	const html = cities.map(dataCities);
	document.querySelector(".gallery").innerHTML = html.join(" ");

}

rendersections(cities);