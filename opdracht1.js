//Opdracht 1a

// Maak een nieuwe array met tv-types
const tvTypes = inventory.map((item) => {
    return item.type;
});

//console.log(tvTypes); <-- console.log van opdracht 1


//Opdracht 1b
//Maak een nieuwe array en filter op originalStock - Sold > 0
//Indien true voeg toe aan nieuwe array
//voor de bonusopdracht zet het geheel in een functie

function getSoldOutTvs(){
    const soldOutTvs = inventory.filter((item) => {
        return (item.originalStock - item.sold) <= 0;
    });
    //console.log(soldOutTvs); <-- console.log van opdracht 1

    return soldOutTvs;
}




//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

//gebruik de filter methode om alle tv's met ambilight op te halen
//maak een nieuwe array en stop ze daarin
//voor de bonusopdracht:  stop het geheel in een functie
//return het resultaat

function getAmbilightTvs() {
    const ambilightTvs = inventory.filter((item) => {
        return item.options.ambiLight === true;
    });
    //console.log(ambilightTvs); <-- de console.log van opdracht 1
    return ambilightTvs;
}



//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//declareer een functie
//gebruik de sort methode om op basis van prijs te sorteren
function orderByPrice(){

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


//console.log(orderByPrice()); <-- console.log voor opdracht 1
