const lastModifiedDate = new Date(document.lastModified);
const year = lastModifiedDate.getFullYear();
const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(lastModifiedDate.getDate()).padStart(2, '0');

const formattedDate = `Last Modified ${year}/${month}/${day}`;

document.getElementById('lastModified').textContent = formattedDate;

function calculateWindChill(t, w) {
    let f;
    if (t >= 50 || w < 3) {
        f = 35.74 + 0.6215 * t - 35.75 * (w ** 0.16) + 0.4275 * t * (w ** 0.16);
    }
    else {
        f = "N/A"
    }
    return f;
}

let windChill;
let temperature = 32;
let windSpeed = 10;

windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('chill').textContent = `Wind Chill: ${windChill} F`