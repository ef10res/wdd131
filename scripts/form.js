const lastModifiedDate = new Date(document.lastModified);
const year = lastModifiedDate.getFullYear();
const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(lastModifiedDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

document.getElementById('lastModified').innerHTML = `Last Modified: ${formattedDate}`;

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

function createSelect(products) {
    let selection = document.getElementById("#products");
    products.forEach(product => {
        let item = document.createElement("option");
        item.innerHTML = `Id: ${product.id} Name: ${product.name} Average Rating: ${product.averagerating}`;
        document.querySelector("select").appendChild(item);
    }
    )

}

createSelect(products);