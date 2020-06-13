async function getByName(name) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    let data = await response.json();
    return data;
} 