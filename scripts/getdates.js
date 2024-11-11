const full =
document.querySelector("#full");

const today = newDate();

full.innerHTML = `<span id="currentyear">${new Intl.DateTimeFormat("en-US",
{dateStyle: "full"}).format(today)}</span>`;

alert(document.lastModified);