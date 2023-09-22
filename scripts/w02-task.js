/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Aaron Fisk"
let currentYear = 2023;
let profilePicture = "images/IMG_1721.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = profilePicture;
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let foods = ["Ice cream", "Peanut butter", "Fresh bread"];
foodElement.innerHTML = foods;

let cereal = "cereal";
foods.push(cereal);
foodElement.innerHTML += `<br>${foods}`;

foods.shift();
foodElement.innerHTML += `<br>${foods}`;

foods.pop();
foodElement.innerHTML += `<br>${foods}`;