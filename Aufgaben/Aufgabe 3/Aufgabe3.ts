namespace Aufgabe3 {
    
/*
Aufgabe: Aufgabe 3
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/    
    
    

namespace UNO {

    function Unospiel() {

        interface UNO {

            color: string;
            value: string;
        }


        // Alle gelben Karten     
        let yellow1: UNO = {
            color: "#FFFF00",
            value: "0",
        }

        let yellow2: UNO = {
            color: "#FFFF00",
            value: "1",
        }

        let yellow3: UNO = {
            color: "#FFFF00",
            value: "1",
        }

        let yellow4: UNO = {
            color: "#FFFF00",
            value: "2",
        }

        let yellow5: UNO = {
            color: "#FFFF00",
            value: "2",
        }

        let yellow6: UNO = {
            color: "#FFFF00",
            value: "3",
        }

        let yellow7: UNO = {
            color: "#FFFF00",
            value: "3",
        }

        let yellow8: UNO = {
            color: "#FFFF00",
            value: "4",
        }

        let yellow9: UNO = {
            color: "#FFFF00",
            value: "4",
        }

        let yellow10: UNO = {
            color: "#FFFF00",
            value: "5",
        }


        let yellow11: UNO = {
            color: "#FFFF00",
            value: "5",
        }


        let yellow12: UNO = {
            color: "#FFFF00",
            value: "6",
        }

        let yellow13: UNO = {
            color: "#FFFF00",
            value: "6",
        }

        let yellow14: UNO = {
            color: "#FFFF00",
            value: "7",
        }

        let yellow15: UNO = {
            color: "#FFFF00",
            value: "7",
        }

        let yellow16: UNO = {
            color: "#FFFF00",
            value: "8",
        }

        let yellow17: UNO = {
            color: "#FFFF00",
            value: "8",
        }

        let yellow18: UNO = {
            color: "#FFFF00",
            value: "9",
        }

        let yellow19: UNO = {
            color: "#FFFF00",
            value: "9",
        }

        let yellow20: UNO = {
            color: "#FFFF00",
            value: "+2",
        }

        let yellow21: UNO = {
            color: "#FFFF00",
            value: "+2",
        }

        let yellow22: UNO = {
            color: "#FFFF00",
            value: "X",
        }

        let yellow23: UNO = {
            color: "#FFFF00",
            value: "X",
        }

        let yellow24: UNO = {
            color: "#FFFF00",
            value: "<->",
        }

        let yellow25: UNO = {
            color: "#FFFF00",
            value: "<->",
        }




        // Alle grünen K      
        let green1: UNO = {
            color: "#01DF01",
            value: "0",
        }

        let green2: UNO = {
            color: "#01DF01",
            value: "1",
        }

        let green3: UNO = {
            color: "#01DF01",
            value: "1",
        }

        let green4: UNO = {
            color: "#01DF01",
            value: "2",
        }

        let green5: UNO = {
            color: "#01DF01",
            value: "2",
        }

        let green6: UNO = {
            color: "#01DF01",
            value: "3",
        }

        let green7: UNO = {
            color: "#01DF01",
            value: "3",
        }

        let green8: UNO = {
            color: "#01DF01",
            value: "4",
        }

        let green9: UNO = {
            color: "#01DF01",
            value: "4",
        }

        let green10: UNO = {
            color: "#01DF01",
            value: "5",
        }

        let green11: UNO = {
            color: "#01DF01",
            value: "5",
        }

        let green12: UNO = {
            color: "#01DF01",
            value: "6",
        }

        let green13: UNO = {
            color: "#01DF01",
            value: "6",
        }

        let green14: UNO = {
            color: "#01DF01",
            value: "7",
        }

        let green15: UNO = {
            color: "#01DF01",
            value: "7",
        }

        let green16: UNO = {
            color: "#01DF01",
            value: "8",
        }

        let green17: UNO = {
            color: "#01DF01",
            value: "8",
        }

        let green18: UNO = {
            color: "#01DF01",
            value: "9",
        }

        let green19: UNO = {
            color: "#01DF01",
            value: "9",
        }

        let green20: UNO = {
            color: "#01DF01",
            value: "+2",
        }

        let green21: UNO = {
            color: "#01DF01",
            value: "+2",
        }

        let green22: UNO = {
            color: "#01DF01",
            value: "X",
        }

        let green23: UNO = {
            color: "#01DF01",
            value: "X",
        }

        let green24: UNO = {
            color: "#01DF01",
            value: "<->",
        }

        let green25: UNO = {
            color: "#01DF01",
            value: "<->",
        }


        // Alle roten K       
        let red1: UNO = {
            color: "#FF0000",
            value: "0",
        }

        let red2: UNO = {
            color: "#FF0000",
            value: "1",
        }

        let red3: UNO = {
            color: "#FF0000",
            value: "1",
        }

        let red4: UNO = {
            color: "#FF0000",
            value: "2",
        }

        let red5: UNO = {
            color: "#FF0000",
            value: "2",
        }

        let red6: UNO = {
            color: "#FF0000",
            value: "3",
        }

        let red7: UNO = {
            color: "#FF0000",
            value: "3",
        }

        let red8: UNO = {
            color: "#FF0000",
            value: "4",
        }

        let red9: UNO = {
            color: "#FF0000",
            value: "4",
        }

        let red10: UNO = {
            color: "#FF0000",
            value: "5",
        }

        let red11: UNO = {
            color: "#FF0000",
            value: "5",
        }

        let red12: UNO = {
            color: "#FF0000",
            value: "6",
        }

        let red13: UNO = {
            color: "#FF0000",
            value: "6",
        }

        let red14: UNO = {
            color: "#FF0000",
            value: "7",
        }

        let red15: UNO = {
            color: "#FF0000",
            value: "7",
        }

        let red16: UNO = {
            color: "#FF0000",
            value: "8",
        }

        let red17: UNO = {
            color: "#FF0000",
            value: "8",
        }

        let red18: UNO = {
            color: "#FF0000",
            value: "9",
        }

        let red19: UNO = {
            color: "#FF0000",
            value: "9",
        }

        let red20: UNO = {
            color: "#FF0000",
            value: "+2",
        }

        let red21: UNO = {
            color: "#FF0000",
            value: "+2",
        }

        let red22: UNO = {
            color: "#FF0000",
            value: "X",
        }

        let red23: UNO = {
            color: "#FF0000",
            value: "X",
        }

        let red24: UNO = {
            color: "#FF0000",
            value: "<->",
        }

        let red25: UNO = {
            color: "#FF0000",
            value: "<->",
        }


        // Alle blauen        
        let blue1: UNO = {
            color: "#2E64FE",
            value: "0",
        }

        let blue2: UNO = {
            color: "#2E64FE",
            value: "1",
        }

        let blue3: UNO = {
            color: "#2E64FE",
            value: "1",
        }

        let blue4: UNO = {
            color: "#2E64FE",
            value: "2",
        }

        let blue5: UNO = {
            color: "#2E64FE",
            value: "2",
        }

        let blue6: UNO = {
            color: "#2E64FE",
            value: "3",
        }

        let blue7: UNO = {
            color: "#2E64FE",
            value: "3",
        }

        let blue8: UNO = {
            color: "#2E64FE",
            value: "4",
        }

        let blue9: UNO = {
            color: "#2E64FE",
            value: "4",
        }

        let blue10: UNO = {
            color: "#2E64FE",
            value: "5",
        }

        let blue11: UNO = {
            color: "#2E64FE",
            value: "5",
        }

        let blue12: UNO = {
            color: "#2E64FE",
            value: "6",
        }

        let blue13: UNO = {
            color: "#2E64FE",
            value: "6",
        }

        let blue14: UNO = {
            color: "#2E64FE",
            value: "7",
        }

        let blue15: UNO = {
            color: "#2E64FE",
            value: "7",
        }

        let blue16: UNO = {
            color: "#2E64FE",
            value: "8",
        }

        let blue17: UNO = {
            color: "#2E64FE",
            value: "8",
        }

        let blue18: UNO = {
            color: "#2E64FE",
            value: "9",
        }

        let blue19: UNO = {
            color: "#2E64FE",
            value: "9",
        }

        let blue20: UNO = {
            color: "#2E64FE",
            value: "+2",
        }

        let blue21: UNO = {
            color: "#2E64FE",
            value: "+2",
        }

        let blue22: UNO = {
            color: "#2E64FE",
            value: "X",
        }

        let blue23: UNO = {
            color: "#2E64FE",
            value: "X",
        }

        let blue24: UNO = {
            color: "#2E64FE",
            value: "<->",
        }

        let blue25: UNO = {
            color: "#2E64FE",
            value: "<->",
        }



        // Alle schwarzen Karten       
        let black1: UNO = {
            color: "#000000",
            value: "+4",
        }

        let black2: UNO = {
            color: "#000000",
            value: "+4",
        }

        let black3: UNO = {
            color: "#000000",
            value: "+4",
        }

        let black4: UNO = {
            color: "#000000",
            value: "+4",
        }

        let black5: UNO = {
            color: "#000000",
            value: "wish",
        }

        let black6: UNO = {
            color: "#000000",
            value: "wish",
        }

        let black7: UNO = {
            color: "#000000",
            value: "wish",
        }

        let black8: UNO = {
            color: "#000000",
            value: "wish",
        }

let ArrayAll: UNO[] = [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7, yellow8, yellow9, yellow10, yellow11, yellow12, yellow13, yellow14, yellow15, yellow16, yellow17, yellow18, yellow19, yellow20, yellow21, yellow22, yellow23, yellow24, yellow25, green1, green2, green3, green4, green5, green6, green7, green8, green9, green10, green11, green12, green13, green14, green15, green16, green17, green18, green19, green20, green21, green22, green23, green24, green25, red1, red2, red3, red4, red5, red7, red8, red9, red10, red11, red12, red13, red14, red15, red16, red17, red18, red19, red20, red21, red22, red23, red24, red25, blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9, blue10, blue11, blue12, blue13, blue14, blue15, blue16, blue17, blue18, blue19, blue20, blue21, blue22, blue23, blue24, blue25, black1, black2, black3, black4, black5, black6, black7, black8];

let stack: UNO[] = [];
let handcards: UNO[] = [];    


function main() {
    
     let howmanycards: number;
     let select: string = prompt("Mit wie vielen Karten möchtest du spielen?");
     howmanycards = Number(select);
    
    if (howmanycards <= 0) {
        howmanycards = 7;
        }
    
    else if (howmanycards > 7) {
        howmanycards = 7;
        }
    
   
    
    document.getElementById("stack").addEventListener("click", getcard);
    document.addEventListener("keydown",drawwithspace);
    document.getElementById("sortcards").addEventListener("click", Sort);
    document.getElementById("inhalt").addEventListener("click", Delete);
    
    for (let num : number = 0; num < howmanycards; num++){
        let random : number = randomNum(ArrayAll.length);
        placeDiv(ArrayAll[random].color, ArrayAll[random].value, num);
        let cards : UNO = ArrayAll.splice(random, 1)[0];
        handcards.push(Card)
        continue;
        
        }
    
    }
    
    
    
 // Karten sortieren
           
    function Sortcards() {
        
        handcards.sort(function(card1,card2) {
            
            let cardone = card1.color.toUppercase();
            let cardtwo = card2.color.toUppercase();
            
            return (cardone < cardtwo) ? -1 :(cardone > cardtwo) ? 1 : 0;
            
            });
        
        Delete();
        
        for (let num: number = 0; num < handcards.length; num++) {
            placeDiv(handcards[num].color, handcards[num].value, num)
            
            }
        }
    
   
function RandomNumber (random: number) {
        return Math.floor(Math.random() * Math.floor(random))
        }
        
        
        
 // Funktion - Leertaste betätigen für Aufnahme von Karten   

function drawwithspace() {
        
        Delete();
        
        for (let num : number = 0; num < 1; num++) {
            
            let random : number = RandomNumber(ArrayAll.length);
            let cards : UNO = ArrayAll.splice(random, 1)[0];
            
            handcards.push(Card)
            }
        
        for (let num : number = 0; num < handcards.length; num ++) {
            placeDiv(handcards[num].color, handcards[num].value, num);
            }
        
        }
        
        
 // Karten nehmen   

function GetCard () {
         
         Delete();
         
         for (let num : number = 0; num < 1; num++) {
             
             let random : number = RandomNumber(ArrayAll.length);
             let cards : UNO = ArrayAll.splice(random, 1)[0];
     
             handcards.push(Card)
             }
         
         for (let num : number = 0; num < handcards.length; num++) {
             placeDiv(handcards[num].color, handcards[num].value, num);
            }
        
        }
        
        
        
     
         function PutCard(_color: string, cards: string, input: number): void {
         let div: HTMLDivElement = document.createElement("div");
         document.getElementById("cardtray").appendChild(div);
         
         div.setAttribute("id", "a" + input);
            document.getElementById("a" + input).innerHTML += cards;
            let s: CSSStyleDeclaration = div.style;
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
         
         }
         
         
      function Delete () {
          
          let node: HTMLElement = document.getElementById("input");
          
          if (node.parentNode) {
              node.parentNode.removeChild(node);
              
              }
          
          let main : HTMLElement = document.createElement("main");
          main.setAttribute("id", "input");
          document.getElementsByTagName("body")[0].appendChild(main);
          
          
          function placeDiv(_color: string, cards: string, input: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + input);
            document.getElementById("a" + input).innerHTML += cards;
            let s: CSSStyleDeclaration = div.style;
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
            if (_color == "#000000") { s.color = "#FFFFFF"; }
        }
         
        
       
  }  

  // Ich finde den Fehler nicht. Habe eigentlich alle Klammern geschlossen. Mein Code scheint trotzdem nicht zu funktionieren. Im Browser werden mir die Spielerkarten nicht ausgegeben und dementprechend kann auch die Funktion des Karten ablegens, sowie aufnehmens nicht erfolgen.  