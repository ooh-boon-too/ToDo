/*function dodanieElementu() {
        var a = prompt("Zadanie:");

        document.getElementById("lista").innerHTML = a + "<button id=\"usun\" onclick=\"usunElement()\">Zakończony</button>";
}

function usunElement() {
    document.getElementById("lista").innerHTML = "";
}*/

function dodajElement() {
    var zadanie = prompt("Nowe zadanie:");

    document.getElementById("lista").innerHTML = zadanie + " <button id=\"usun\" onclick=\"usunElement()\">Zakończone</button>";
}

function usunElement() {
    document.getElementById("lista").innerHTML = "";
}

document.getElementById("dodaj").onclick = dodajElement();