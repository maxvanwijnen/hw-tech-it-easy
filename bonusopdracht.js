//Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
// Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de de console loggen als de

const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click',() => {
    orderByPrice();
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = generateProductGrid(inventory);
});

const ambilightButton = document.getElementById('ambilight-button');
ambilightButton.addEventListener('click',() => {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = generateProductGrid(getAmbilightTvs());
});

const soldOutButton = document.getElementById('sold-out-button');
soldOutButton.addEventListener('click',() => {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = generateProductGrid(getSoldOutTvs());
});

