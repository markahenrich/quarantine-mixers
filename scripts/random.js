async function getRandom() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let data = await response.json();
    console.log(data.drinks[0]);
    return data.drinks[0];
}

$(document).ready(async function() {
    let drink = await getRandom();
    
    $('.main-random').append(`
    <img src='${drink.strDrinkThumb}'/>
    <h1>${drink.strDrink}</h1>`);
});