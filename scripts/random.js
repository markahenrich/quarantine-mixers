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

    $('#loader-row').remove();
    
    $('.main-random').append(`
    <div class="row random-card">
        <div class="col s12 m6 offset-m3">
            <div class="card">
              <div class="card-image">
                <img src="${drink.strDrinkThumb}">
                <span id="card-title-floating" class="card-title">${drink.strDrink}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <ul class='list'></ul>
                <br></br>
                <p>${drink.strInstructions}</p>
              </div>
            </div>
        </div>
    </div>
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