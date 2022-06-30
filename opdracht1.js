//Opdracht 1a

// Maak een nieuwe array met tv-types
const tvTypes = inventory.map((item) => {
    return item.type;
});

console.log(tvTypes);


//Opdracht 1b
//Maak een nieuwe array en filter op originalStock - Sold > 0
//Indien true voeg toe aan nieuwe array
const soldOutTvs = inventory.filter((item) => {
    return (item.originalStock - item.sold) > 0;
});

console.log(soldOutTvs);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambilightTvs = inventory.filter((item) => {
    return item.options.ambiLight === true;
});

console.log(ambilightTvs);


//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//declareer een functie
//gebruik de sort methode om op basis van prijs te sorteren
function orderByPrice(inventory){

    return inventory.sort((a , b) => {
        if (a.price > b.price){
            return 1;
        }
        else if (a.price < b.price) {
            return -1;
        }
        else {
            return 0;
        }
    })
}


console.log(orderByPrice(inventory));
