//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console

//declare variabele waarin we aantal verkochte tvs opslaan
//voor elke tv in de inventory haal het aantal sold op en  tel het op bij totalTvsSold
//log het totaalTvsSold

let totalTvsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalTvsSold = totalTvsSold + inventory[i].sold;
}

console.log(totalTvsSold);


//Opdracht 2b

const TvsSoldAmountElement = document.getElementById('tvs-sold-amount');
TvsSoldAmountElement.innerHTML = `<h2>Totaal verkocht</h2><p>${totalTvsSold}</p>`;


//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht?
//Schrijf een script dat dit berekent. Log de uitkomst in de console.

//declareer een variabele voor het totaal
//loop alle items langs en tel de originalstock telkens bij het totaal op
//log het resultaat
let totalPurchased = 0;

inventory.map((item) => {
    totalPurchased = totalPurchased + item.originalStock;
});

console.log(totalPurchased);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

//Zoek het element op in de dom
//Voeg de TotalPurchased waarde toe aan het element
tvsPurchasedAmountElement = document.getElementById('tvs-purchased-amount');
tvsPurchasedAmountElement.innerHTML = `<h2>Totaal ingekocht</h2><p>${totalPurchased}</p>`;

const totalToSell = totalPurchased - totalTvsSold;

tvsToSellElement = document.getElementById('tvs-to-sell-amount');
tvsToSellElement.innerHTML = `<h2>Verkoop target</h2><p>${totalToSell}</p>`;

