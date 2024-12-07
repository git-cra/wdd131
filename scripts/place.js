
const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Tim Crager, WI`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;


function calculateWindChill(temp, windSpeed) {
    
    const windChill = 13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2); 
}

const temperature = 8; 
const windSpeed = 10; 

if (temperature <= 10 && windSpeed > 4.8) {
    
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChillValue + " °C";
} else {
    
    document.getElementById("windChill").textContent = "N/A";
}
