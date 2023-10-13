/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = {};

/* async displayTemples Function */
function displayTemples(templeList)
{
    templeList.forEach((temple) => {
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.textContent = temple.templeName
        let image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.location;
        article.appendChild(name);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
async function getTemples()
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok)
    {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset()
{
    const articles = templesElement.querySelectorAll("article");
    articles.forEach((article) => {
        article.remove();
    });
}

/* sortBy Function */
function sortBy(temples)
{
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch(filter)
    {
        case "utah":
            let utah = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utah);
            break;
        case "notutah":
            let notUtah = temples.filter(temple => !temple.location.includes("Utah"))
            displayTemples(notUtah);
            break;
        case "older":
            let older = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});