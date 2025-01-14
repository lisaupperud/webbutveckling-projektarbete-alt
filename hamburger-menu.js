// funktion för att växla hamburgarmeny
// kollar om meny har klassen 'responsive'
function toggleMenu() {
    //hämta meny och lägg till / ta bort klassen
    const menu = document.getElementById("myLinks");

    // växla mellan att visa och dölja meny 
    if(menu.className === "responsive") {
        menu.className = "";
    } else {
        menu.className = "responsive";
    }
}