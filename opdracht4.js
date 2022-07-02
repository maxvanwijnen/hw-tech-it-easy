//Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv
//en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

//declarereer een functie met het type als parameter
//Gebruik de  methode find om de entry te zoeken op basis van het type
//Return een string in het juiste format

function generateProductTitle(type){
    const tv = inventory.find((item) => {
        return item.type === type;
    });

    return `${tv.brand} ${tv.type} - ${tv.name}`;
}
//console.log(generateProductTitle('43PUS6504/12'));

//Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159)
// teruggeeft in het format €379,- of €159,-.

//declareer een functie met die paramater originalPrice
//return de geformatte waarde met het euro teken e.d.
function formatPrice(originalPrice) {
    return `€${originalPrice},-`
}

//Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv.
//De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches
// ([schermgrootte omgerekend]cm

//declareer een functie met de parameter type
//zoek de juiste entry aan de hand van het type
//declareer een string voor de screensize output
//loop door de screensize heen
//declareer een const voor de maat in inches
//declareer een const voor de maat in cm
//voeg per gevonden screensize deze netjes toe aan de string
//voeg een | toe aan het eind van de string, maar doe dat niet bij de laatste
function generateSizeString(type){
    const tv = inventory.find((item) => {
            return item.type === type;
    });

    let screenSizeString = '';
    for (let i = 0; i < tv.availableSizes.length ; i++) {
        const screenSizeInches = tv.availableSizes[i];
        const screenSizeCM  = screenSizeInches * 2.54;

        screenSizeString = `${screenSizeString} ${screenSizeInches} inch (${screenSizeCM} cm)`;

        if (i < tv.availableSizes.length - 1){
            screenSizeString = `${screenSizeString} |`
        }

    }

    return screenSizeString;
}
generateSizeString('43PUS6504/12');

//Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
//Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function generateProductTile(type){

    //dit is eigenlijk dubbel op voor de title en size , want daar doe ik ook een find in de generate fucntie
    //maar hij is nodig voor de price om dat de formatPrice functie nu alleen een string format en niet de entry zoekt
    //om me netjes aan de opdracht daar te houden heb ik die functie niet aangepast en staat de find in deze functie
    const tv = inventory.find((item) => {
        return item.type === type;
    });

    const productTileHTML = '<div>';

    const titleHTML = `<div>${generateProductTitle(tv.type)}</div>`;
    const priceHTML = `<div>${formatPrice(tv.price)}</div>`;
    const sizesHTML = `<div>${generateSizeString(tv.type)}</div>`;

    return `${titleHTML}
            ${priceHTML}
            ${sizesHTML}`;
}

const productTile = document.getElementById('product-tile');
productTile.innerHTML = generateProductTile('43PUS6504/12');

//Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina.
// Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function generateProductGrid(itemsToShow) {
    let productGrid = '<div class="product-grid">';
    itemsToShow.map((item) => {
        productGrid = `${productGrid} <div class="product-tile"> ${generateProductTile(item.type)}</div>`;
    });
    return `${productGrid} </div>`;
}
const productGrid = document.getElementById('product-grid');
productGrid.innerHTML = generateProductGrid(inventory);






