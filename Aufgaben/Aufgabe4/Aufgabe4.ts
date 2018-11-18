/*Aufgabe: Aufgabe 4 - Weihnachtsbaumkonfigurator
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace xmasTreeShop {

    
    // EventListener

    document.addEventListener("DOMContentLoaded", createProducts);
    document.addEventListener("DOMContentLoaded", anotherOption);

    function anotherOption(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }



    let treePrice: number = 0;
    let ballPrice: number = 0;
    let candlePrice: number = 0;
    let ornamentPrice: number = 0
    let lamettaPrice: number = 0;
    let standPrice: number = 0;
    let deliveryPrice: number = 0;

    let ballAmount: number = 0;
    let candleAmount: number = 0;
    let ornamentAmount: number = 0;
    let lamettaAmount: number = 0;

    let firstname: string = "";
    let surname: string = "";
    let adress: string = "";
    let mail: string = "";
    let extra: string = "";


    //Main
    function createProducts(): void {

        document.getElementById("button").addEventListener("click", checkProgress);
        let node: HTMLElement = document.getElementById("fieldset");

        let HTML: string;



       
        

        //Create Trees
        
        HTML += "<fieldset>";
        HTML += "<legend>Design your tree</legend>";
        HTML += "<select name='Select' id='trees'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasTree.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasTree[arrayNumber].name + " " + xmasTree[arrayNumber].price + " €'>" + xmasTree[arrayNumber].name + " " + xmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";




        //Create christmas bulbs
        
        HTML += "<fieldset>";
        HTML += "<legend>Christmas bulbs</legend>";
        HTML += "<select name='Select' id='bulbs'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasBulbs.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €'>" + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";

        HTML += "<select name='Select' id='allBulbs'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";




        //Create candles
        
        HTML += "<fieldset>";
        HTML += "<legend>Candles</legend>";
        HTML += "<select name='Select' id='candles'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasCandles.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €'>" + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountCandles'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        
        
        //Create ornaments
        
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<select name='Select' id='ornaments'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasOrnaments.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €'>" + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountOrnaments'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";


        //Create lametta
        
        HTML += "<fieldset>";
        HTML += "<legend>Lametta</legend>";
        HTML += "<select name='Select' id='Lametta'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountLametta'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";


        //Create tree stands
        
        HTML += "<fieldset>";
        HTML += "<legend>Tree stand</legend>";
        for (let arrayNumber: number = 0; arrayNumber < treeStands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup' value='" + arrayNumber + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";




        //verkäferoptionen
        
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (let arrayNumber: number = 0; arrayNumber < delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup1' value='" + arrayNumber + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";



        //Verkäufer info
        
        HTML += "<fieldset>";
        HTML += "<legend>Buyer Information</legend>";

        HTML += "<input id='surname' type='text' name='Surname' placeholder='Surname'/>";
        HTML += "<br><br>";

        HTML += "<input id='firstname' type='text' name='name' placeholder='Name'/>";
        HTML += "<br><br>";

        HTML += "<input id='mail' type='email' name='mail' placeholder='E-mail'/>";
        HTML += "<br><br>";

        HTML += "<textarea id='adress' name='Area' cols='30' rows='4' placeholder='Your adress please' >";
        HTML += "</textarea>";
        HTML += "<br><br>";

        HTML += "<textarea id='extra' name='Area' cols='30' rows='4' placeholder='Extra information' >";
        HTML += "</textarea>";



        HTML += "</fieldset>";

        node.innerHTML += HTML;




    }







    //Handle Change  
    function handleChange(_event: Event): void {


        let target: HTMLInputElement = <HTMLInputElement>_event.target;
       
        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("treeshtml");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            treePrice = xmasTree[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Weihnachtskugeln
        if (target.id == "bulbs") {
            let node: HTMLElement = document.getElementById("bulbhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice = xmasBulbs[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "allBulbs") {
            let node: HTMLElement = document.getElementById("allbulbs");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }


        //Kerzen
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candlehtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice = xmasCandles[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles") {
            let node: HTMLElement = document.getElementById("candleamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        
        //Ornamente
        if (target.id == "ornaments") {
            let node: HTMLElement = document.getElementById("ornamenthtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice = xmasOrnaments[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        //Lametta
        if (target.id == "Lametta") {
            let node: HTMLElement = document.getElementById("lamettahtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice = lametta[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;

            let HTML: string;


            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }


        //Baumfüße
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("standhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            standPrice = treeStands[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }


        //Versandoptionen
        if (target.name == "Radiogroup1") {
            let node: HTMLElement = document.getElementById("deliveryhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            deliveryPrice = delivery[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }




        //Käufer Info
        if (target.id == "adress") {
            let node: HTMLElement = document.getElementById("adresshtml");
            adress = target.value;
            let
                HTML: string;


            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "surname") {
            let node: HTMLElement = document.getElementById("surnamehtml");
            surname = target.value;
            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "firstname") {
            let node: HTMLElement = document.getElementById("firstnamehtml");
            firstname = target.value;
            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "mail") {
            let node: HTMLElement = document.getElementById("mailhtml");
            mail = target.value;
            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "extra") {
            let node: HTMLElement = document.getElementById("extrahtml");
            extra = target.value;
            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }





        //Gesamtpreis wird berechnet
        let node: HTMLElement = document.getElementById("endpricehtml");
        let HTML: string;

        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ballPrice * ballAmount) + (candlePrice * candleAmount) + (ornamentPrice * ornamentAmount) + (lamettaPrice * lamettaAmount) + standPrice + deliveryPrice);
        HTML += " €";
        HTML += "</a>";
        node.innerHTML = HTML;
    }



   
    function checkProgress(_event: Event): void {
        if (mail == "" || extra == "" || firstname == "" || surname == "" || adress == "" || treePrice == 0 || standPrice == 0 || ballPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ballAmount == 0 || lamettaAmount == 0 || candleAmount == 0) {
            document.getElementById("mustSelect").innerHTML = "Something's missing";
        }

        else {
            document.getElementById("mustSelect").innerHTML = "";
        }
    }

}