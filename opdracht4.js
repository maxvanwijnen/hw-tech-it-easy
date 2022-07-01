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

