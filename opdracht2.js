//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console

//declare variabele waarin we aantal verkochte tvs opslaan
let totalTvsSold = 0;

//voore elke tv in de inventory haal het aantal sold op en  tel het op bij totalTvsSold
for (let i = 0; i < inventory.length; i++) {
    totalTvsSold = totalTvsSold + inventory[i].sold;
}

//log het totaalTvsSold
console.log(totalTvsSold);


