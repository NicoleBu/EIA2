var UNO;
(function (UNO) {
    function Unospiel() {
        // Alle gelben Karten    
        let yellow1 = {
            color: "#FFFF00",
            value: "0",
        };
        let yellow2 = {
            color: "#FFFF00",
            value: "1",
        };
        let yellow3 = {
            color: "#FFFF00",
            value: "1",
        };
        let yellow4 = {
            color: "#FFFF00",
            value: "2",
        };
        let yellow5 = {
            color: "#FFFF00",
            value: "2",
        };
        let yellow6 = {
            color: "#FFFF00",
            value: "3",
        };
        let yellow7 = {
            color: "#FFFF00",
            value: "3",
        };
        let yellow8 = {
            color: "#FFFF00",
            value: "4",
        };
        let yellow9 = {
            color: "#FFFF00",
            value: "4",
        };
        let yellow10 = {
            color: "#FFFF00",
            value: "5",
        };
        let yellow11 = {
            color: "#FFFF00",
            value: "5",
        };
        let yellow12 = {
            color: "#FFFF00",
            value: "6",
        };
        let yellow13 = {
            color: "#FFFF00",
            value: "6",
        };
        let yellow14 = {
            color: "#FFFF00",
            value: "7",
        };
        let yellow15 = {
            color: "#FFFF00",
            value: "7",
        };
        let yellow16 = {
            color: "#FFFF00",
            value: "8",
        };
        let yellow17 = {
            color: "#FFFF00",
            value: "8",
        };
        let yellow18 = {
            color: "#FFFF00",
            value: "9",
        };
        let yellow19 = {
            color: "#FFFF00",
            value: "9",
        };
        let yellow20 = {
            color: "#FFFF00",
            value: "+2",
        };
        let yellow21 = {
            color: "#FFFF00",
            value: "+2",
        };
        let yellow22 = {
            color: "#FFFF00",
            value: "X",
        };
        let yellow23 = {
            color: "#FFFF00",
            value: "X",
        };
        let yellow24 = {
            color: "#FFFF00",
            value: "<->",
        };
        let yellow25 = {
            color: "#FFFF00",
            value: "<->",
        };
        // Alle grünen Karten
        let green1 = {
            color: "#01DF01",
            value: "0",
        };
        let green2 = {
            color: "#01DF01",
            value: "1",
        };
        let green3 = {
            color: "#01DF01",
            value: "1",
        };
        let green4 = {
            color: "#01DF01",
            value: "2",
        };
        let green5 = {
            color: "#01DF01",
            value: "2",
        };
        let green6 = {
            color: "#01DF01",
            value: "3",
        };
        let green7 = {
            color: "#01DF01",
            value: "3",
        };
        let green8 = {
            color: "#01DF01",
            value: "4",
        };
        let green9 = {
            color: "#01DF01",
            value: "4",
        };
        let green10 = {
            color: "#01DF01",
            value: "5",
        };
        let green11 = {
            color: "#01DF01",
            value: "5",
        };
        let green12 = {
            color: "#01DF01",
            value: "6",
        };
        let green13 = {
            color: "#01DF01",
            value: "6",
        };
        let green14 = {
            color: "#01DF01",
            value: "7",
        };
        let green15 = {
            color: "#01DF01",
            value: "7",
        };
        let green16 = {
            color: "#01DF01",
            value: "8",
        };
        let green17 = {
            color: "#01DF01",
            value: "8",
        };
        let green18 = {
            color: "#01DF01",
            value: "9",
        };
        let green19 = {
            color: "#01DF01",
            value: "9",
        };
        let green20 = {
            color: "#01DF01",
            value: "+2",
        };
        let green21 = {
            color: "#01DF01",
            value: "+2",
        };
        let green22 = {
            color: "#01DF01",
            value: "X",
        };
        let green23 = {
            color: "#01DF01",
            value: "X",
        };
        let green24 = {
            color: "#01DF01",
            value: "<->",
        };
        let green25 = {
            color: "#01DF01",
            value: "<->",
        };
        // Alle roten Karten 
        let red1 = {
            color: "#FF0000",
            value: "0",
        };
        let red2 = {
            color: "#FF0000",
            value: "1",
        };
        let red3 = {
            color: "#FF0000",
            value: "1",
        };
        let red4 = {
            color: "#FF0000",
            value: "2",
        };
        let red5 = {
            color: "#FF0000",
            value: "2",
        };
        let red6 = {
            color: "#FF0000",
            value: "3",
        };
        let red7 = {
            color: "#FF0000",
            value: "3",
        };
        let red8 = {
            color: "#FF0000",
            value: "4",
        };
        let red9 = {
            color: "#FF0000",
            value: "4",
        };
        let red10 = {
            color: "#FF0000",
            value: "5",
        };
        let red11 = {
            color: "#FF0000",
            value: "5",
        };
        let red12 = {
            color: "#FF0000",
            value: "6",
        };
        let red13 = {
            color: "#FF0000",
            value: "6",
        };
        let red14 = {
            color: "#FF0000",
            value: "7",
        };
        let red15 = {
            color: "#FF0000",
            value: "7",
        };
        let red16 = {
            color: "#FF0000",
            value: "8",
        };
        let red17 = {
            color: "#FF0000",
            value: "8",
        };
        let red18 = {
            color: "#FF0000",
            value: "9",
        };
        let red19 = {
            color: "#FF0000",
            value: "9",
        };
        let red20 = {
            color: "#FF0000",
            value: "+2",
        };
        let red21 = {
            color: "#FF0000",
            value: "+2",
        };
        let red22 = {
            color: "#FF0000",
            value: "X",
        };
        let red23 = {
            color: "#FF0000",
            value: "X",
        };
        let red24 = {
            color: "#FF0000",
            value: "<->",
        };
        let red25 = {
            color: "#FF0000",
            value: "<->",
        };
        // Alle blauen Karten
        let blue1 = {
            color: "#2E64FE",
            value: "0",
        };
        let blue2 = {
            color: "#2E64FE",
            value: "1",
        };
        let blue3 = {
            color: "#2E64FE",
            value: "1",
        };
        let blue4 = {
            color: "#2E64FE",
            value: "2",
        };
        let blue5 = {
            color: "#2E64FE",
            value: "2",
        };
        let blue6 = {
            color: "#2E64FE",
            value: "3",
        };
        let blue7 = {
            color: "#2E64FE",
            value: "3",
        };
        let blue8 = {
            color: "#2E64FE",
            value: "4",
        };
        let blue9 = {
            color: "#2E64FE",
            value: "4",
        };
        let blue10 = {
            color: "#2E64FE",
            value: "5",
        };
        let blue11 = {
            color: "#2E64FE",
            value: "5",
        };
        let blue12 = {
            color: "#2E64FE",
            value: "6",
        };
        let blue13 = {
            color: "#2E64FE",
            value: "6",
        };
        let blue14 = {
            color: "#2E64FE",
            value: "7",
        };
        let blue15 = {
            color: "#2E64FE",
            value: "7",
        };
        let blue16 = {
            color: "#2E64FE",
            value: "8",
        };
        let blue17 = {
            color: "#2E64FE",
            value: "8",
        };
        let blue18 = {
            color: "#2E64FE",
            value: "9",
        };
        let blue19 = {
            color: "#2E64FE",
            value: "9",
        };
        let blue20 = {
            color: "#2E64FE",
            value: "+2",
        };
        let blue21 = {
            color: "#2E64FE",
            value: "+2",
        };
        let blue22 = {
            color: "#2E64FE",
            value: "X",
        };
        let blue23 = {
            color: "#2E64FE",
            value: "X",
        };
        let blue24 = {
            color: "#2E64FE",
            value: "<->",
        };
        let blue25 = {
            color: "#2E64FE",
            value: "<->",
        };
        // Alle schwarzen Karten      
        let black1 = {
            color: "#000000",
            value: "+4",
        };
        let black2 = {
            color: "#000000",
            value: "+4",
        };
        let black3 = {
            color: "#000000",
            value: "+4",
        };
        let black4 = {
            color: "#000000",
            value: "+4",
        };
        let black5 = {
            color: "#000000",
            value: "wish",
        };
        let black6 = {
            color: "#000000",
            value: "wish",
        };
        let black7 = {
            color: "#000000",
            value: "wish",
        };
        let black8 = {
            color: "#000000",
            value: "wish",
        };
        // Array --> Fügt alle Bezeichnungen (Karten) zusammen
        let array = [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7, yellow8, yellow9, yellow10, yellow11, yellow12, yellow13, yellow14, yellow15, yellow16, yellow17, yellow18, yellow19, yellow20, yellow21, yellow22, yellow23, yellow24, yellow25, green1, green2, green3, green4, green5, green6, green7, green8, green9, green10, green11, green12, green13, green14, green15, green16, green17, green18, green19, green20, green21, green22, green23, green24, green25, red1, red2, red3, red4, red5, red7, red8, red9, red10, red11, red12, red13, red14, red15, red16, red17, red18, red19, red20, red21, red22, red23, red24, red25, blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9, blue10, blue11, blue12, blue13, blue14, blue15, blue16, blue17, blue18, blue19, blue20, blue21, blue22, blue23, blue24, blue25, black1, black2, black3, black4, black5, black6, black7, black8];
        function random(num) {
            return Math.floor(Math.random() * Math.floor(num));
        }
        // Spieler wird gefragt mit wie vielen Karten er spielen möchte
        let howmanycards;
        let select = prompt("Mit wie vielen Karten möchtest du spielen?");
        howmanycards = Number(select);
        //function placeDiv --> erstellt Dokument in HTML
        function placeDiv(_color, cards, input) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + input);
            document.getElementById("a" + input).innerHTML += cards;
            let s = div.style;
            s.border = "2px solid black";
            s.borderRadius = 25 + "px";
            s.textAlign = "center";
            s.fontSize = "20px";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 145 + "px";
            s.height = 245 + "px";
            s.left = (input + 0.5) * 200 + "px";
            s.bottom = 75 + "px";
            //Schriftfarbe wird zu weiß #FFFFFF geändert, da Text(Zahl) sonst nicht angezeigt wird   
            if (_color == "#000000") {
                s.color = "#FFFFFF";
            }
        }
        for (let i = 0; i < howmanycards; i++) {
            let d = random(array.length);
            placeDiv(array[d].color, array[d].value, i);
            array.splice(d, 1);
            continue;
        }
        console.log(array);
    }
    document.addEventListener("DOMContentLoaded", (Unospiel));
})(UNO || (UNO = {}));
//# sourceMappingURL=Aufgabe 2 neu.js.map