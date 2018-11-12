/*Aufgabe: Aufgabe3 - Unospiel
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 12.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Unoneu;
(function (Unoneu) {
    document.addEventListener("DOMContentLoaded", mainFunction);
    document.addEventListener("keydown", drawWithSpace);
    let color = ["blue", "yellow", "green", "red"];
    let value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "miss", "reverse"];
    let allCards = [{ color: "blue", value: "0" }, { color: "yellow", value: "0" }, { color: "green", value: "0" }, { color: "red", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    let cardTray = [];
    let playerCards = [];
    for (let cardNum = 0; cardNum < color.length; cardNum++) {
        for (let cardName = 0; cardName < value.length; cardName++) {
            for (let arrayAllCards = 0; arrayAllCards < 2; arrayAllCards++) {
                let card = { color: color[cardNum], value: value[cardName] }; // color und value wird ein Wert zugesprochen, fasst es als Karte zusammen und gibt es zurück (push) ins allCards Array.
                allCards.push(card);
            }
        }
    }
    console.log(allCards);
    function mainFunction() {
        // Kartenanzahl wird ausgegeben
        let numberOfCards;
        let prompttext = prompt("Please type in with how many cards you would like to play! (max 5)");
        numberOfCards = Number(prompttext);
        // Ausgabe von <= 5 Karten
        if (numberOfCards <= 0) {
            numberOfCards = 5;
        }
        else if (numberOfCards > 5) {
            numberOfCards = 5;
        }
        chooseRandomCards(numberOfCards);
        showMyCards();
        // EventListener
        let button = document.getElementById("sortcardshtml");
        button.addEventListener("click", sortCards);
        let drawCard = document.getElementById("Unohtml");
        drawCard.addEventListener("click", drawFromPile);
    }
    // Zufällige Anzahl von Karten
    function chooseRandomCards(_displayCard) {
        for (let displayCard = _displayCard; displayCard > 0; displayCard--) {
            let randomCards = Math.floor(Math.random() * (allCards.length - 1)); //zufällige Karte wird ausgewählt und aus Array allCards entfernt
            playerCards.push(allCards[randomCards]); //Karte wird zu Spielkarten hinzugefügt
            allCards.splice(randomCards, 1); //Karte wir aus Array allCards entfernt
        }
    }
    // nimmt vom Stapel
    function drawFromPile() {
        chooseRandomCards(1); // zieht immer nur eine Karte auf einemal vom Stapel
        showMyCards(); // erstellt Funktion zum Anzeigen der Karten *
    }
    // Funktion - Leertaste
    function drawWithSpace(event) {
        if (event.keyCode == 32) {
            drawFromPile();
        }
    }
    // Karten anzeigen lassen mit CSS
    //*
    function showMyCards() {
        document.getElementById("playercardshtml").innerHTML = ""; // nimmt die Info aus dem HTML-Element von Id um Karte an der richtigen Position anzeigen zu lassen.
        for (let showCard = 0; showCard < playerCards.length; showCard++) {
            let div = document.createElement("div"); // erstellt ein Div 
            document.getElementById("playercardshtml").appendChild(div); // verbindet div mit Eltern-div, div ist Kind von Handkarten(div)
            div.innerHTML = playerCards[showCard].value; // Fügt value zu Karte hinzu
            let id = showCard.toString(); // erstellt eine Id zu showCards
            div.setAttribute("id", id); // Ausführung mit Hilfe von einem Attribute
            div.classList.add("playercardshtml"); // Erstellt Klasse zu div Spielerkarten
            div.classList.add(playerCards[showCard].color); // Erstellt Klasse zu den angezeigten Spielerkarte
            div.addEventListener("click", layDownCard); // EventListener wird hinzugefügt, Funktion **
        }
    }
    // Karten ablegen
    //**
    function layDownCard(_event) {
        document.getElementById("cardtrayhtml").innerHTML = "";
        let choosenCard = _event.target;
        let index = parseInt(choosenCard.id);
        cardTray.push(playerCards[index]);
        let div = document.createElement("div");
        document.getElementById("cardtrayhtml").appendChild(div);
        div.innerHTML = playerCards[index].value;
        div.classList.add(playerCards[index].color);
        playerCards.splice(index, 1);
        showMyCards();
    }
    // sortiert Karten
    function sortCards() {
        console.log(playerCards);
        document.getElementById("playercardshtml").innerHTML = "";
        playerCards.sort(function (one, two) {
            if (one.color > two.color) {
                return 1;
            }
            if (one.color < two.color) {
                return -1;
            }
            if (one.value > two.value) {
                return 1;
            }
            if (one.value < two.value) {
                return -1;
            }
            return 0;
        });
        console.log(playerCards);
        showMyCards();
    }
})(Unoneu || (Unoneu = {}));
//# sourceMappingURL=Aufgabe3neu.js.map