async function getRandom() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let data = await response.json();
    return data;
}

$(document).ready(function(){
    // code
});