//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console

//declare variabele waarin we aantal verkochte tvs opslaan
//voore elke tv in de inventory haal het aantal sold op en  tel het op bij totalTvsSold
//log het totaalTvsSold

let totalTvsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalTvsSold = totalTvsSold + inventory[i].sold;
}

console.log(totalTvsSold);


//Opdracht 2b

const TvsSoldAmountElement = document.getElementById('tvs-sold-amount');
TvsSoldAmountElement.innerText = totalTvsSold;


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

