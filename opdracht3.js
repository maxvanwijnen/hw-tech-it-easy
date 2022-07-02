//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
//Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
//Dat er dubbele namen in zitten, is niet erg.

//map door de inventory  lijstheen
//haal de brands op en zet ze in eenarray

let brandListHTML = '<h2>Merken</h2><ul>';
inventory.map((item) => {
    brandListHTML = `${brandListHTML} <li>${item.brand}</li>`;
});
brandListHTML = `${brandListHTML} </ul>`;

const brandListElement = document.getElementById('brand-list');
brandListElement.innerHTML = brandListHTML;

//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
//Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

function createPropertyList( inputArray , propertyToShow , elementId , title ) {
    let listHTML = `<h2>${title}</h2><ul>`;
    inputArray.map((item) => {
        listHTML = `${listHTML} <li>${item[propertyToShow]}</li>`;
    });
    listHTML = `${listHTML} </ul>`;

    const brandListElement = document.getElementById( elementId );
    brandListElement.innerHTML = listHTML;
}
// argumenten : 1. de input array 2. key om te tonen 3. het id van het html elemenet waar het getoond moet worden
createPropertyList( inventory,'type' , 'type-list', 'Types');