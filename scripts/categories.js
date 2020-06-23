async function getCategories() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    let data = await response.json();
    return data.drinks;
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
                    <a href="#!" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
                </li>
            </ul>
        `)
    })
}


$(document).ready(async function() {
    let categories = await getCategories()
    let ingredients = await getIngredients()

    ingredients.forEach(ingredient => {
        $('#ingredient-input').append(`
        <option value='${ingredient.strIngredient1}'>${ingredient.strIngredient1}</option>
    `);
    })

    $('select').formSelect();
    
    categories.forEach(category => {
        $('#row2').append(`
            <a class="waves-effect waves-light btn category-btn">${category.strCategory}</a>
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