const imagesElement = document.querySelector("#images");
let imageList = {};

async function getSpace()
{
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=CdaCY9CqcXmX9ray8RE9E7KlJBMgenH4kbU1hkUH");
    if (response.ok)
    {
        imageList = await response.json();
        console.log(imageList);
        displayImages(imageList);
    }
}

function displayImages(imageList)
{
    //imageList.forEach((element) => {
        let article = document.createElement("article");
        let title = document.createElement("h3");
        title.textContent = imageList.title;
        let image = document.createElement("img");
        image.src = imageList.hdurl;
        image.alt = imageList.title;
        let date = document.createElement("h4");
        date.textContent = imageList.date; 
        let explanation = document.createElement("p");
        explanation.textContent = imageList.explanation;
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(date);
        article.appendChild(explanation);
        imagesElement.appendChild(article);
    //});
}

getSpace();
