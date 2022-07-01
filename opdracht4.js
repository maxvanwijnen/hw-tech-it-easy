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
console.log(generateProductTitle('43PUS6504/12'));