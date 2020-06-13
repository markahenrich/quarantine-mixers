async function getCategories() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    let data = await response.json();
    return data;
}

async function getByIngredient(ingredient) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    let data = response.json();
    return data;
}

$(document).ready(function() {
    $('.main-categories').append("<h1>Categories</h1>");
});