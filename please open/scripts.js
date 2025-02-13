function acceptValentine() {
    window.location.href = "location.html";
}

function rejectValentine() {
    document.body.innerHTML = "<h1>💔 Sad... Maybe next time.</h1>";
}

function selectChoice(category, choice) {
    localStorage.setItem(category, choice);
    nextPage(category);
}

function nextPage(category) {
    const pages = ["location", "restaurant", "main_course", "dessert", "last_destination"];
    let index = pages.indexOf(category);
    if (index !== -1 && index < pages.length - 1) {
        window.location.href = pages[index + 1] + ".html";
    } else {
        window.location.href = "confirmation.html";
    }
}

function showSelections() {
    const categories = ["location", "restaurant", "main_course", "dessert", "last_destination"];
    let resultHTML = "<h1>Confirmed Selections</h1><ul>";
    categories.forEach(cat => {
        let choice = localStorage.getItem(cat) || "Not selected";
        resultHTML += `<li>${cat}: ${choice}</li>`;
    });
    resultHTML += "</ul><a href='index.html'>Start Over</a>";
    document.getElementById("results").innerHTML = resultHTML;
}
