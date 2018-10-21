var UNO;
(function (UNO) {
    function Unospiel() {
        ;
        // Karte 0
        let card0 = {
            Cards: "0",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 1
        let card1 = {
            Cards: "1",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 2
        let card2 = {
            Cards: "2",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 3
        let card3 = {
            Cards: "3",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 4
        let card4 = {
            Cards: "4",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 5
        let card5 = {
            Cards: "5",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 6
        let card6 = {
            Cards: "6",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 7
        let card7 = {
            Cards: "7",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 8
        let card8 = {
            Cards: "8",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Karte 9
        let card9 = {
            Cards: "9",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // nehme 2 Karten
        let cardtaketwo = {
            Cards: "taketwo",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // nehme 4 Karten
        let cardtakefour = {
            Cards: "takefour",
            y: 0,
            r: 0,
            g: 0,
            blue: 0,
            black: 4,
        };
        // setze eine Runde aus
        let cardmiss = {
            Cards: "miss",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // Richtungswechsel
        let cardreverse = {
            Cards: "reverse",
            y: 2,
            r: 2,
            g: 2,
            blue: 2,
            black: 0,
        };
        // wünsche Dir eine Farbe
        let cardwish = {
            Cards: "wish",
            y: 0,
            r: 0,
            g: 0,
            blue: 0,
            black: 4,
        };
        // Array --> Fügt alle Bezeichnungen (Karten) zusammen
        let array = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, cardtaketwo, cardtakefour, cardmiss, cardreverse, cardwish];
        //Deklaration der Funktion(random) --> zufällige Kartenwahl
        function random(num) { return Math.floor(Math.random() * Math.floor(num)); }
        ;
        //function placeDiv --> erstellt Dokument in HTML 
        function placeDiv(_color, cards, input) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + input);
            document.getElementById("a" + input).innerHTML += cards;
            //CSS Style Deklaration
            let s = div.style;
            s.border = "2px solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 130 + "px";
            s.height = 180 + "px";
            s.left = (input + 1) * 150 + "px";
            s.bottom = 50 + "px";
            s.textAlign = "center";
            //Schriftfarbe wird zu weiß #FFFFFF geändert, da Text(Zahl) sonst nicht angezeigt wird
            if (_color == "#000000") {
                s.color = "#FFFFFF";
            }
        }
        // Spieler wird gefragt mit wie vielen Karten er spielen möchte, "Mit wie vielen Karten möchtest du spielen" erscheint in Box
        let howmanycards;
        let select = prompt("Mit wie vielen Karten möchtest du spielen?");
        howmanycards = Number(select);
        let c = "";
        for (let i = 0; i < howmanycards; i++) {
            let howmanycards = random(15);
            let colors = random(5);
            switch (colors) {
                case 0:
                    c = "#FFFF00";
                    if (array[howmanycards].y > 0) {
                        placeDiv(c, array[howmanycards].Cards, i);
                        array[howmanycards].y--;
                        continue;
                    }
                case 1:
                    c = "#FF0000";
                    if (array[howmanycards].r > 0) {
                        placeDiv(c, array[howmanycards].Cards, i);
                        array[howmanycards].r--;
                        continue;
                    }
                case 2:
                    c = "#01DF01";
                    if (array[howmanycards].g > 0) {
                        placeDiv(c, array[howmanycards].Cards, i);
                        array[howmanycards].g--;
                        continue;
                    }
                case 3:
                    c = "#2E64FE";
                    if (array[howmanycards].blue > 0) {
                        placeDiv(c, array[howmanycards].Cards, i);
                        array[howmanycards].blue--;
                        continue;
                    }
                case 4:
                    c = "#000000";
                    if (array[howmanycards].black > 0) {
                        placeDiv(c, array[howmanycards].Cards, i);
                        array[howmanycards].black--;
                        continue;
                    }
                    else {
                        i--;
                        continue;
                    }
            }
        }
        function cardtray() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "dotted grey";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#E6E6E6";
            s.width = 130 + "px";
            s.height = 180 + "px";
            s.left = 300 + "px";
            s.top = 40 + "px";
        }
        function stack() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "UNO");
            document.getElementById("UNO").innerHTML += "UNO";
            let s = div.style;
            s.border = "2px solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#6E6E6E";
            s.width = 130 + "px";
            s.height = 180 + "px";
            s.left = 150 + "px";
            s.top = 40 + "px";
        }
        cardtray();
        stack();
    }
    document.addEventListener("DOMContentLoaded", (Unospiel));
})(UNO || (UNO = {}));
//# sourceMappingURL=Aufgabe 2.js.map