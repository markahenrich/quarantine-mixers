async function getByName(name) {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    let data = await response.json();
    return data;
} 

/* $(document).ready(function() {
    $('.main').append(`
        <h1>Quarantine Mixers</h1>
        <br></br>
        <h2>Welcome</h2>
        <img src='https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_1280.jpg'/>
        <p>Don't let quarantine get you down! Get started by clicking</p>
        <p>Categories at the top or press Random if you're feeling lucky.</p> 
        <br></br>
        <h2>Be safe!</h2>
        <p>Follow quarantine guidelines, wash your hands,</p>
        <p>and wear a mask! Get more information <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html' target="_blank">here.</a></p>
        <br></br>
        <h2>Don't over do it!</h2>
        <p>Drink responsibly. If you believe you have a problem,</p>
        <p>consider looking into the resources below to find help.</p>
        <p></p>
        <ul>
            <li><a href='https://www.alcohol.org' target='_blank'>alcohol.org</a></li>
            <li><a href='https://www.samhsa.gov/find-help/national-helpline' target='_blank'>Substance Abuse and Mental Health Services Administration</a></li>
        </ul>
    `);
});

*/