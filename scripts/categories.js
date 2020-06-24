async function getCategories() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    let data = await response.json();
    return data.drinks;
}

async function getByCategory(category) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    let data = await response.json()
    returnResults(data.drinks)   
}

async function getIngredients() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    let data = await response.json();
    return data.drinks;
}

async function getByIngredient(ingredient) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    let data = await response.json();
    return data;
}

async function getByID(id) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await response.json()
    return data.drinks[0]
}

async function getByLetter(letter) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    let data = await response.json()
    returnResults(data.drinks)
}


function returnResults(objects) {
    $('#results').empty()
   
    objects.forEach(object => {
        $('#results').append(`
            <ul id='result-collection' class="collection">
                <li id='result-card' class="collection-item avatar">
                    <img src="${object.strDrinkThumb}" alt="" class="circle">
                    <span class="title">${object.strDrink}</span>
                    <p>${object.strCategory} <br>
                       ${object.strAlcoholic}
                    </p>
                    <a onClick=detailView('${object.idDrink}') href="#!" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
                </li>
            </ul>
        `)
    })
}

async function detailView(id) {
    
    let drink = await getByID(id)

    let { 
        strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, 
        strMeasure5 
    } = drink;
    let ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
    let measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5]
    
    $('#results').empty()

    $('#results').append(`
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
    `)

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
}
 
$(document).ready(async function() {
    let categories = await getCategories()
    /*let ingredients = await getIngredients()

    ingredients.forEach(ingredient => {
        $('#ingredient-input').append(`
        <option value='${ingredient.strIngredient1}'>${ingredient.strIngredient1}</option>
    `);
    })

    $('select').formSelect();
    */
    
    categories.forEach(category => {
        let stringCategory = category.strCategory.split(' ').join('_')

        $('#row2').append(`
            <a onClick=getByCategory('${stringCategory}') class="waves-effect waves-light btn category-btn">${category.strCategory}</a>
        `);
    });

    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    letters.forEach(letter => {
        $('#row3').append(`
            <a onClick=getByLetter('${letter}') id='letter' href='#' >${letter}</a>
        `);
    });
});