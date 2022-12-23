const placesUrl = "http://localhost:8080/places";
const placesSelector = "#place";
const placesContent = `<option selected disabled value="">Choisir un lieu dans la liste</option>`;

const themesUrl = "http://localhost:8080/themes";
const themesSelector = "#theme";
const themesContent = `<option selected disabled value="">Choisir un thème dans la liste</option>`;

load(placesUrl, placesSelector, placesContent);
load(themesUrl, themesSelector, themesContent);

async function load(url, idSelector, content) {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await fetch(url, options);
    const elements = await response.json();
    const target = document.querySelector(idSelector);

    elements.forEach(element => {
        content += elementTemplate(element);
    });
    target.innerHTML = content;
}

function elementTemplate(element) {
    return `
    <option value="${element.id}">${element.name}</option>
    `;
}



