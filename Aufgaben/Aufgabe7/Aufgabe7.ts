/*Aufgabe: Aufgabe 7
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 06.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace xmasTreeShopA7 {

    
    // EventListener

    document.addEventListener("DOMContentLoaded", createProducts);
    document.addEventListener("DOMContentLoaded", anotherOption);

    function anotherOption(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }



    let treePrice: number = 0;
    
    let ballPrice: number = 0;
    let ballPrice1: number = 0;
    let ballPrice2: number = 0;
    
    let candlePrice: number = 0;
    let candlePrice1: number = 0;
    let candlePrice2: number = 0;
    
    let ornamentPrice: number = 0
    let ornamentPrice1: number = 0
    let ornamentPrice2: number = 0
    
    let lamettaPrice: number = 0;
    let lamettaPrice1: number = 0;
    let lamettaPrice2: number = 0;
    
    
    let standPrice: number = 0;
    let deliveryPrice: number = 0;
    

    let ballAmount: number = 0;
    let ballAmount1: number = 0;
    let ballAmount2: number = 0;
    
    let candleAmount: number = 0;
    let candleAmount1: number = 0;
    let candleAmount2: number = 0;
    
    let ornamentAmount: number = 0;
    let ornamentAmount1: number = 0;
    let ornamentAmount2: number = 0;
    
    let lamettaAmount: number = 0;
    let lamettaAmount1: number = 0;
    let lamettaAmount2: number = 0;

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
        HTML += "<select name='Tree' id='trees'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasTree.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasTree[arrayNumber].name + " " + xmasTree[arrayNumber].price + " €'>" + xmasTree[arrayNumber].name + " " + xmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";




        //Create christmas bulbs
        
        HTML += "<fieldset>";
        HTML += "<legend>Christmas bulbs</legend>";
        HTML += "<select name='Bulbs 1' id='bulbs'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasBulbs.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €'>" + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";

        HTML += "<select name='Bulbs 1' id='allBulbs'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        
        //further option1
        
        HTML += "<p>Further option 1:</p>";

        HTML += "<select name='Bulbs 2' id='bulbs1'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasBulbs.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €'>" + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Bulbs 2' id='allBulbs1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        
        
        //further option2
        
        HTML += "<p>Further option 2:</p>";

        HTML += "<select name='Bulbs 3' id='bulbs2'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasBulbs.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €'>" + xmasBulbs[arrayNumber].name + " " + xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Bulbs 3' id='allBulbs2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        HTML += "</fieldset>";
        HTML += "<br>";




        //Create candles
        
        HTML += "<fieldset>";
        HTML += "<legend>Candles</legend>";
        
        HTML += "<select name='Candles 1' id='candles'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasCandles.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €'>" + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 1' id='amountCandles'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option1
        
        HTML += "<p>Further option 1:</p>";
        
        HTML += "<select name='Candles 2' id='candles1'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasCandles.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €'>" + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 2' id='amountCandles1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option2
        
        HTML += "<p>Further option 2:</p>";
        
        HTML += "<select name='Candles 3' id='candles2'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasCandles.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €'>" + xmasCandles[arrayNumber].name + " " + xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 3' id='amountCandles2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        HTML += "</fieldset>";
        HTML += "<br>";
        
        
        
        
        //Create ornaments
        
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<select name='Ornaments 1' id='ornaments'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasOrnaments.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €'>" + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 1' id='amountOrnaments'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option 1
        
        HTML += "<p>Further option 1:</p>";
        
        HTML += "<select name='Ornaments 2' id='ornaments1'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasOrnaments.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €'>" + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 2' id='amountOrnaments1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option 2
        
        HTML += "<p>Further option 2:</p>";
        
        HTML += "<select name='Ornaments 3' id='ornaments2'>";
        for (let arrayNumber: number = 0; arrayNumber < xmasOrnaments.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €'>" + xmasOrnaments[arrayNumber].name + " " + xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 3' id='amountOrnaments2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        HTML += "</fieldset>";
        HTML += "<br>";


        //Create lametta
        
        HTML += "<fieldset>";
        HTML += "<legend>Lametta 1</legend>";
        HTML += "<select name='Lametta' id='Lametta'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 1' id='amountLametta'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option 1
        
        HTML += "<p>Further option 1:</p>";
        
        HTML += "<select name='Lametta 2' id='Lametta1'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 2' id='amountLametta1'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {

        HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        
        
        //further option 2
        
        HTML += "<p>Further option 2:</p>";
        
        HTML += "<select name='Lametta 3' id='Lametta2'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {

        HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 3' id='amountLametta2'>";
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
            HTML += "<input type='radio' name='Treestand' value='" + arrayNumber + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";




        //verkäferoptionen
        
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (let arrayNumber: number = 0; arrayNumber < delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Delivery options' value='" + arrayNumber + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";



        //Verkäufer info
        
        HTML += "<fieldset>";
        HTML += "<legend>Buyer Information</legend>";

        HTML += "<input id='surname' type='text' name='Surname' placeholder='Surname'/>";
        HTML += "<br><br>";

        HTML += "<input id='firstname' type='text' name='Name' placeholder='Name'/>";
        HTML += "<br><br>";

        HTML += "<input id='mail' type='email' name='E-Mail' placeholder='E-mail'/>";
        HTML += "<br><br>";

        HTML += "<textarea id='adress' name='Adress' cols='30' rows='4' placeholder='Your adress please' >";
        HTML += "</textarea>";
        HTML += "<br><br>";

        HTML += "<textarea id='extra' name='Extra Information' cols='30' rows='4' placeholder='Extra information' >";
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
        
        
        if (target.id == "bulbs1") {
            let node: HTMLElement = document.getElementById("bulbhtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice1 = xmasBulbs[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "allBulbs1") {
            let node: HTMLElement = document.getElementById("allbulbs1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount1 = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }
        
        
        if (target.id == "bulbs2") {
            let node: HTMLElement = document.getElementById("bulbhtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice2 = xmasBulbs[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "allBulbs2") {
            let node: HTMLElement = document.getElementById("allbulbs2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount2 = _number;

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
        
        
        if (target.id == "candles1") {
            let node: HTMLElement = document.getElementById("candlehtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice1 = xmasCandles[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles1") {
            let node: HTMLElement = document.getElementById("candleamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount1 = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }
        
        
        if (target.id == "candles2") {
            let node: HTMLElement = document.getElementById("candlehtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice2 = xmasCandles[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles2") {
            let node: HTMLElement = document.getElementById("candleamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount2 = _number;

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
        
        
        if (target.id == "ornaments1") {
            let node: HTMLElement = document.getElementById("ornamenthtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice1 = xmasOrnaments[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments1") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount1 = _number;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }
        
        
        if (target.id == "ornaments2") {
            let node: HTMLElement = document.getElementById("ornamenthtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice2 = xmasOrnaments[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments2") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount2 = _number;

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
        
        
        if (target.id == "Lametta1") {
            let node: HTMLElement = document.getElementById("lamettahtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice1 = lametta[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta1") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount1 = _number;

            let HTML: string;


            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }
        
        
        if (target.id == "Lametta2") {
            let node: HTMLElement = document.getElementById("lamettahtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice2 = lametta[_price].price;

            let HTML: string;

            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";

            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta2") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount2 = _number;

            let HTML: string;


            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";

            node.innerHTML = HTML;
        }


        //Baumfüße
        if (target.name == "Treestand") {
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
        if (target.name == "Delivery options") {
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
        HTML += (treePrice + (ballPrice * ballAmount)+ (ballPrice1 * ballAmount1) + (ballPrice2 * ballAmount2) + (candlePrice * candleAmount)+ (candlePrice1 * candleAmount1) + (candlePrice2 * candleAmount2) + (ornamentPrice * ornamentAmount) + (ornamentPrice1 * ornamentAmount1) + (ornamentPrice2 * ornamentAmount2)+ (lamettaPrice * lamettaAmount) + (lamettaPrice1 * lamettaAmount1) + (lamettaPrice2 * lamettaAmount2) + standPrice + deliveryPrice);
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