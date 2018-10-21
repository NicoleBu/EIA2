namespace UNO {
    
    interface UNO{
              
              Cards: string;
              y: number;
              r: number;
              g: number;
              blue: number;
              black: number;
        };
              
    // Karte 0
    
    let card0: UNO={
        
              Card: "0",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 1
    
    let card1: UNO={
        
              Card: "1",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 2
    
    let card2: UNO={
        
              Card: "2",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 3
    
    let card3: UNO={
        
              Card: "3",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 4
    
    let card4: UNO={
        
              Card: "4",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 5
    
    let card5: UNO={
        
              Card: "5",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 6
    
    let card6: UNO={
        
              Card: "6",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 7
    
    let card7: UNO={
        
              Card: "7",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 8
    
    let card8: UNO={
        
              Card: "8",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Karte 9
    
    let card9: UNO={
        
              Card: "9",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // nehme 2 Karten
    
    let cardtaketwo: UNO={
        
              Card: "taketwo",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // nehme 4 Karten
    
    let cardtakefour: UNO={
        
              Card: "takefour",
              y: 0,
              r: 0,
              g: 0,
              blue: 0,
              black: 4,
              };
    
     // setze eine Runde aus
    
    let cardmiss: UNO={
        
              Card: "miss",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // Richtungswechsel
    
    let cardreverse: UNO={
        
              Card: "reverse",
              y: 2,
              r: 2,
              g: 2,
              blue: 2,
              black: 0,
              };
    
     // wünsche Dir eine Farbe
    
    let cardwish: UNO={
        
              Card: "wish",
              y: 0,
              r: 0,
              g: 0,
              blue: 0,
              black: 4,
              };
    
    
    // Array --> Fügt alle Bezeichnungen (Karten) zusammen
    let array: allcards[] = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, cardtaketwo, cardtakefour, cardmiss, cardreverse, cardwish];
    
    //Deklaration der Funktion(random) --> zufällige Kartenwahl
    
            function random(num: number) { return Math.floor(Math.random() * Math.floor(num)) };


    //function placeDiv --> erstellt Dokument in HTML 
    
            function placeDiv(_color: string, cards: string, input: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + input);
            document.getElementById("a" + input).innerHTML += cards;
            //CSS Style Deklaration
            let s: CSSStyleDeclaration = div.style;
            s.border = "solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 135 + "px";
            s.height = 185 + "px";
            s.left = (input + 1) * 150 + "px"; 
            s.bottom = 50 + "px";
            s.textAlign = "center";
            s.borderRadius = 15 + "px";
            }
        
        
    // Spieler wird gefragt mit wie vielen Karten er spielen möchte, "Mit wie vielen Karten möchtest du spielen" erscheint in Box
        let howmanycards: number;
        let select: string = prompt("Mit wie vielen Karten möchtest du spielen?");
        howmanycards = Number(select); 
                
                
        let c: string = "";

        for (let i : number = 0; i < howmanycards; i++) { 


            let howmanycards: number = random(10); 

            let colors: number = random(5);

            switch (colors) {



            case 0:
                   c = "#FFFF00";
                if (AllCards[howmanycards].y > 0) {
                    placeDiv(c, array[howmanycards].Card, i);
                    array [howmanycards].y--;
                    continue;
                    }


            case 1:
                   c = "#FF0000";
                if (AllCards[howmanycards].r > 0) {
                    placeDiv(c, array [howmanycards].Card, i);
                    array [howmanycards].r--;
                    continue;
                    }


            case 2:
                   c = "#01DF01";
                if (AllCards[howmanycards].g > 0) {
                    placeDiv(c, array [howmanycards].Card, i);
                    array [howmanycards].g--;
                    continue;
                    }


            case 3:
                   c = "#2E64FE";
                if (AllCards[howmanycards].blue > 0) {
                    placeDiv(c, array [howmanycards].Card, i);
                    array [howmanycards].blue--;
                    continue;
                    }


            case 4:
                   c = "#000000";
                if (AllCards[howmanycards].black > 0) {
                    placeDiv(c, array [howmanycards].Card, i);
                    array [howmanycards].black--;
                    continue;
                    }
                    
    //Schriftfarbe wird zu weiß #FFFFFF geändert, da Text(Zahl) sonst nicht angezeigt wird

                if (_color == "#000000") { s.color = "#FFFFFF"; }

            else {
                  i--;
                      continue
                 }
  }
}
        
         function cardtray() {
             
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenablage");
            document.getElementById("Kartenablage").innerHTML += "Kartenablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#E6E6E6";
            s.width = 135 + "px";
            s.height = 185 + "px";
            s.left = (input + 1) * 150 + "px"; 
            s.bottom = 50 + "px";
            s.textAlign = "center";
            s.borderRadius = 15 + "px";

            }
        
          
        function stack() {
            
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Unostapel");
            document.getElementById("Unostapel").innerHTML += "Unostapel";
            let s = div.style;
            s.border = " solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#EFFBF2";
            s.width = 135 + "px";
            s.height = 185 + "px";
            s.left = (input + 1) * 150 + "px"; 
            s.bottom = 50 + "px";
            s.textAlign = "center";
            s.borderRadius = 15 + "px";
        }

        cardtray();
        stack();

    }
    document.addEventListener("DOMContentLoaded", (game))


}

     
        
              
              
   