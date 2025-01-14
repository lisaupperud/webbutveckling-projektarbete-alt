// hämta cont-element där kanpp ska läggas (tom <article> på varje sida)
const buttonContainer = document.getElementById('button-container');

// funktion för att skpaa och lägga till knappar
function createNavigationButton(nextPage) {
    // skapa nytt knappelement
    const button = document.createElement('button');

    //sätter text på knappen
    button.textContent = 'Learn More'

    // ger knappen en css-klass för rätt stil
    button.className = 'learn-more-button';

    // vid klick -> navigera till nästa sida
    button.addEventListener('click', function () {
        window.location.href = nextPage;
    });

    // lägg till knapp till container-element
    buttonContainer.appendChild(button);
}

// kontrollerar vilken sida som visas och skapar rätt knapp utifrån det
if (window.location.pathname.includes("index.html")) {
    createNavigationButton('about.html'); // länk till About Me
}
else if (window.location.pathname.includes("about.html")) {
    createNavigationButton('technical.html');
}
else if (window.location.pathname.includes("technical.html")) {
    createNavigationButton('cv.html');
}
else if (window.location.pathname.includes("cv.html")) {
    createNavigationButton('contact.html');
}
