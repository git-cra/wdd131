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

const temples = [
	{
		templeName: "Chicago Illinois",
		location: "Chicago, IL",
		dedicated: "1985, August 9",
		area: 37062,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/5dbebad7cd20cfc90592b6acb8c5864db3a98ade/full/1920%2C/0/default"
	},
	{
		templeName: "Cebu City Philippines",
		location: "Cebu City, Philippines",
		dedicated: "2010, June 13",
		area: 29556,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/751a0dd8846a820488f147fd2b50664be8141efd/full/1920%2C/0/default"
	},
	{
		templeName: "Dallas Texas",
		location: "Dallas, Texas",
		dedicated: "1984, October 19",
		area: 44207,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/167b081b94fddc43d81200a03a9d5fc26c38a770/full/1920%2C/0/default"
	},
	{
		templeName: "Manila Philippines",
		location: "Manila, Philippines",
		dedicated: "1984, September 1984",
		area: 26683,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/de7a4293e088152271f9c6292ee37fbf83799741/full/1920%2C/0/default"
	},
	{
		templeName: "Provo Utah",
		location: "Provo, Utah",
		dedicated: "1972, February 9",
		area: 130825,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/15e3f7bd07d84cbff0cb7440cc9b32253706fc39/full/1920%2C/0/default"
	},
	{
		templeName: "Rexburg Idaho",
		location: "Rexburg, Idaho",
		dedicated: "2008, February 3",
		area: 57504,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/7b6a4d1244ef80f58e5fc47da75707a8c3237173/full/1920%2C/0/default"
	},
	{
		templeName: "Sacramento California",
		location: "Sacramento, California",
		dedicated: "2006, September 3",
		area: 19500,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/f7bec2948b877dc7cbecba7e355d5a6847b52f7e/full/1920%2C/0/default"
	},
	{
		templeName: "Salt Lake Utah",
		location: "Salt Lake City, Utah",
		dedicated: "1893, April 6",
		area: 253000,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/1920%2C/0/default",
	},
	{
		templeName: "San Antonio Texas",
		location: "San Antonio, Texas",
		dedicated: "2005, May 22",
		area: 16800,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/ff8075c9cfce23e3e37d14c00bd996c21ea4d530/full/1920%2C/0/default"
	},
	{
		templeName: "Star Valley Wyoming",
		location: "Afton, WY",
		dedicated: "2016, October 30",
		area: 18609,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/165dc66321dfd7b3f59570883647b3a9476e69a7/full/1920%2C/0/default"
	},
]

function dataTemples(items) {
	return `<figure>
				<img src="${items.imageUrl}" alt="${items.templeName}" width= 400, heigth= 250, loading"lazy" width="400"
                height="auto">
				<figcaption>
					<h3>${items.templeName}</h3>
					<p>Location: ${items.location}</p>
					<p>Dedicated: ${items.dedicated}</p>
					<p>Size: ${items.area}</p>
				</figcaption>
			</figure>`;

}

function rendersections(temples) {
	const html = temples.map(dataTemples);
	document.querySelector(".gallery").innerHTML = html.join(" ");

}

rendersections(temples);


const oldLink = document.getElementById("old");
oldLink.addEventListener('click', () => {
	const oldTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.slice(0, 4));
		return year < 1900;
	});
	rendersections(oldTemples);
});

const newLink = document.getElementById("new");
newLink.addEventListener('click', () => {
	const newTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.slice(0, 4));
		return year > 2000;
	});
	rendersections(newTemples);
});

const largeLink = document.getElementById("large");
largeLink.addEventListener('click', () => {
	const largeTemples = temples.filter(temple => {
		const size = temple.area > 90000;
		return size;
	});
	rendersections(largeTemples)

})
const smallLink = document.getElementById("small");
smallLink.addEventListener('click', () => {
	const smallTemples = temples.filter(temple => {
		const size = temple.area < 20000;
		return size;
	});
	rendersections(smallTemples)

})

const homeLink = document.querySelector(".active")
homeLink.addEventListener('click', () => {
	rendersections(temples);
});






