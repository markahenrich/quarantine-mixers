async function getRandom() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let data = await response.json();
    console.log(data.drinks[0]);
    return data.drinks[0];
}

$(document).ready(async function() {
    let drink = await getRandom();
    let { 
        strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, 
        strMeasure5 
    } = drink;
    let ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
    let measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5]
    
    $('.main-random').append(`
    <img src='${drink.strDrinkThumb}'/>
    <h1>${drink.strDrink}</h1>
    <ul class='list'></ul>
    <br></br>
    <p>${drink.strInstructions}</p>
    `);

    let counter = 0;
    
    ingredients.forEach(ingredient => {

        if (ingredient != null) {
            
            if (measures[counter] != null) {
                $('.list').append(`
                    <li>${measures[counter] + ' ' + ingredient}
                `)
            }
            
            else {
                $('.list').append(`
                <li>${ingredient}</li>
            `) 
            }
        }

        counter += 1;

    })
});