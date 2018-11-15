/*Aufgabe: Aufgabe3 - Unospiel
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 12.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Unoneu {

    document.addEventListener("DOMContentLoaded", mainFunction);
    document.addEventListener("keydown", drawWithSpace);

    interface UNO {
        color: string;
        value: string;
    }

    let color: string[] = ["blue", "yellow", "green", "red"];
    let value: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "miss", "reverse"];
    let allCards: UNO[] = [{ color: "blue", value: "0" }, { color: "yellow", value: "0" }, { color: "green", value: "0" }, { color: "red", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    let cardTray: UNO[] = [];
    let playerCards: UNO[] = [];

    for (let cardNum: number = 0; cardNum < color.length; cardNum++) {                    // Wenn Nummer kleiner als die Länge des Arrays color ist, addiere immer +1.
        for (let cardName: number = 0; cardName < value.length; cardName++) {             // Wenn Nummer kleiner als die Länge des Arrays value ist, addiere immer +1.
            for (let arrayAllCards: number = 0; arrayAllCards < 2; arrayAllCards++) {     // Wenn die Anzahl von Werten kleiner ist als 2 ist, addiere immer +1 und gehe weiter im Array.
                let card: UNO = { color: color[cardNum], value: value[cardName] };        // color und value wird ein Wert zugesprochen, fasst es als Karte zusammen und gibt es zurück (push) ins allCards Array.
                allCards.push(card);
            }
        }
    }
    console.log(allCards);

    

    function mainFunction(): void {
        
        // Kartenanzahl wird ausgegeben
        
        let numberOfCards: number;
        let prompttext: string = prompt("Please type in with how many cards you would like to play! (max 5)");
        numberOfCards = Number(prompttext);
        
        // Ausgabe von <= 5 Karten
        if(numberOfCards <= 0) {
            numberOfCards = 5;
            }
        
        else if (numberOfCards > 5) {
            numberOfCards = 5;
            }

        chooseRandomCards(numberOfCards);
        showMyCards();
        
        // EventListener

        let button: HTMLElement = document.getElementById("sortcardshtml");
        button.addEventListener("click", sortCards);

        let drawCard: HTMLElement = document.getElementById("Unohtml");
        drawCard.addEventListener("click", drawFromPile);

    }
    
    // Zufällige Anzahl von Karten
    function chooseRandomCards(_displayCard: number): void {                              
        for (let displayCard: number = _displayCard; displayCard > 0; displayCard--) {    //löscht bei jedem Durchlauf eine Karte.
            let randomCards: number = Math.floor(Math.random() * (allCards.length - 1));  //zufällige Karte wird ausgewählt und aus Array allCards entfernt
            playerCards.push(allCards[randomCards]);                                      //Karte wird zu Spielkarten hinzugefügt
            allCards.splice(randomCards, 1);                                              //Karte wir aus Array allCards entfernt
        }
    }
    
    // nimmt vom Stapel
    function drawFromPile(): void {
        chooseRandomCards(1);         // zieht immer nur eine Karte auf einemal vom Stapel
        showMyCards();                // erstellt Funktion zum Anzeigen der Karten *

    }
    
    
    // Funktion - Leertaste
    function drawWithSpace(event: KeyboardEvent): void {
        if (event.keyCode == 32) {                        //Code für Leertaste
            drawFromPile();
        }
    }
    
    
    // Karten anzeigen lassen mit CSS
    
    //*
    function showMyCards(): void {

        document.getElementById("playercardshtml").innerHTML = "";                       // nimmt die Info aus dem HTML-Element von Id um Karte an der richtigen Position anzeigen zu lassen.
        for (let showCard: number = 0; showCard < playerCards.length; showCard++) {      // zeigt eine Karte nach der anderen an, bis alle Karten im playerCards Array sichtlich vorhanden sind
            let div: HTMLElement = document.createElement("div");                        // erstellt ein Div 
            document.getElementById("playercardshtml").appendChild(div);                 // verbindet div mit Eltern-div, div ist Kind von Handkarten(div)
            div.innerHTML = playerCards[showCard].value;                                 // Fügt value zu Karte hinzu
            let id: string = showCard.toString();                                        // erstellt eine Id zu showCards
            div.setAttribute("id", id);                                                  // Ausführung mit Hilfe von einem Attribute
            div.classList.add("playercardshtml");                                        // Erstellt Klasse zu div Spielerkarten
            div.classList.add(playerCards[showCard].color);                              // Erstellt Klasse zu den angezeigten Spielerkarte
            div.addEventListener("click", layDownCard);                                  // EventListener wird hinzugefügt, Funktion **

        }
    }

    
    // Karten ablegen
    
    //**
    function layDownCard(_event: MouseEvent): void {
        document.getElementById("cardtrayhtml").innerHTML = "";      // nimmt Information duch id "cardtray" aus der HTML
        let choosenCard: HTMLElement = <HTMLElement>_event.target;   // angeklickte Karte (_event.target) wird aus dem HTMLElement ausgesucht
        let index: number = parseInt(choosenCard.id);                // erstellt index, index wird eine bestimmte Zeichenkette zugesprochen und wndelt sie in eine Ganzzahl um (parseInt())
        cardTray.push(playerCards[index]);                           // anhand des indexs wird eine bestimmte Karte aus dem Array playerCards in das Array cardTray gepusht
        let div: HTMLElement = document.createElement("div");        // erstellt ein div
        document.getElementById("cardtrayhtml").appendChild(div);    // verbindet div mit Eltern div, div ist Kind von Ablage(div)
        div.innerHTML = playerCards[index].value;                    // fügt value, zu individueller Stelle einer Karte in playercards, hinzu
        div.classList.add(playerCards[index].color);                 // erstellt Klasse zu zum persönlichen index von Handkarten bezogen auf das Array color
        playerCards.splice(index, 1);                                // den Handkarten wird jeweils eine Karte entfernt, Karte wird aus index gewählt
        showMyCards();                                               // übrig geblieben Karten werden angezeigt
    }


    // sortiert Karten
    function sortCards(): void {
        console.log(playerCards);
        document.getElementById("playercardshtml").innerHTML = "";
        playerCards.sort(function(one: UNO, two: UNO): number {
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

}
