/*Aufgabe: Aufgabe 7
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 06.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var xmasTreeShopA7;
(function (xmasTreeShopA7) {
    // EventListener
    document.addEventListener("DOMContentLoaded", createProducts);
    document.addEventListener("DOMContentLoaded", anotherOption);
    function anotherOption(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let treePrice = 0;
    let ballPrice = 0;
    let ballPrice1 = 0;
    let ballPrice2 = 0;
    let candlePrice = 0;
    let candlePrice1 = 0;
    let candlePrice2 = 0;
    let ornamentPrice = 0;
    let ornamentPrice1 = 0;
    let ornamentPrice2 = 0;
    let lamettaPrice = 0;
    let lamettaPrice1 = 0;
    let lamettaPrice2 = 0;
    let standPrice = 0;
    let deliveryPrice = 0;
    let ballAmount = 0;
    let ballAmount1 = 0;
    let ballAmount2 = 0;
    let candleAmount = 0;
    let candleAmount1 = 0;
    let candleAmount2 = 0;
    let ornamentAmount = 0;
    let ornamentAmount1 = 0;
    let ornamentAmount2 = 0;
    let lamettaAmount = 0;
    let lamettaAmount1 = 0;
    let lamettaAmount2 = 0;
    let firstname = "";
    let surname = "";
    let adress = "";
    let mail = "";
    let extra = "";
    //Main
    function createProducts() {
        document.getElementById("button").addEventListener("click", checkProgress);
        let node = document.getElementById("fieldset");
        let HTML;
        //Create Trees
        HTML += "<fieldset>";
        HTML += "<legend>Design your tree</legend>";
        HTML += "<select name='Tree' id='trees'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasTree.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasTree[arrayNumber].name + " " + xmasTreeShopA7.xmasTree[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasTree[arrayNumber].name + " " + xmasTreeShopA7.xmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        //Create christmas bulbs
        HTML += "<fieldset>";
        HTML += "<legend>Christmas bulbs</legend>";
        HTML += "<select name='Bulbs 1' id='bulbs'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasBulbs.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Bulbs 1' id='allBulbs'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        //further option1
        HTML += "<p>Further option 1:</p>";
        HTML += "<select name='Bulbs 2' id='bulbs1'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasBulbs.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Bulbs 2' id='allBulbs1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        //further option2
        HTML += "<p>Further option 2:</p>";
        HTML += "<select name='Bulbs 3' id='bulbs2'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasBulbs.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasBulbs[arrayNumber].name + " " + xmasTreeShopA7.xmasBulbs[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Bulbs 3' id='allBulbs2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create candles
        HTML += "<fieldset>";
        HTML += "<legend>Candles</legend>";
        HTML += "<select name='Candles 1' id='candles'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasCandles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 1' id='amountCandles'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option1
        HTML += "<p>Further option 1:</p>";
        HTML += "<select name='Candles 2' id='candles1'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasCandles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 2' id='amountCandles1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option2
        HTML += "<p>Further option 2:</p>";
        HTML += "<select name='Candles 3' id='candles2'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasCandles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasCandles[arrayNumber].name + " " + xmasTreeShopA7.xmasCandles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Candles 3' id='amountCandles2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create ornaments
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<select name='Ornaments 1' id='ornaments'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasOrnaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 1' id='amountOrnaments'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option 1
        HTML += "<p>Further option 1:</p>";
        HTML += "<select name='Ornaments 2' id='ornaments1'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasOrnaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 2' id='amountOrnaments1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option 2
        HTML += "<p>Further option 2:</p>";
        HTML += "<select name='Ornaments 3' id='ornaments2'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.xmasOrnaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €'>" + xmasTreeShopA7.xmasOrnaments[arrayNumber].name + " " + xmasTreeShopA7.xmasOrnaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Ornaments 3' id='amountOrnaments2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create lametta
        HTML += "<fieldset>";
        HTML += "<legend>Lametta 1</legend>";
        HTML += "<select name='Lametta' id='Lametta'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €'>" + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 1' id='amountLametta'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option 1
        HTML += "<p>Further option 1:</p>";
        HTML += "<select name='Lametta 2' id='Lametta1'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €'>" + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 2' id='amountLametta1'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //further option 2
        HTML += "<p>Further option 2:</p>";
        HTML += "<select name='Lametta 3' id='Lametta2'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €'>" + xmasTreeShopA7.lametta[arrayNumber].name + " " + xmasTreeShopA7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Lametta 3' id='amountLametta2'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create tree stands
        HTML += "<fieldset>";
        HTML += "<legend>Tree stand</legend>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.treeStands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Treestand' value='" + arrayNumber + xmasTreeShopA7.treeStands[arrayNumber].name + " " + xmasTreeShopA7.treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + xmasTreeShopA7.treeStands[arrayNumber].name + " " + xmasTreeShopA7.treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //verkäferoptionen
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Delivery options' value='" + arrayNumber + xmasTreeShopA7.delivery[arrayNumber].name + " " + xmasTreeShopA7.delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + xmasTreeShopA7.delivery[arrayNumber].name + " " + xmasTreeShopA7.delivery[arrayNumber].price + " €</label>";
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
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "trees") {
            let node = document.getElementById("treeshtml");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            treePrice = xmasTreeShopA7.xmasTree[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Weihnachtskugeln
        if (target.id == "bulbs") {
            let node = document.getElementById("bulbhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice = xmasTreeShopA7.xmasBulbs[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "allBulbs") {
            let node = document.getElementById("allbulbs");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "bulbs1") {
            let node = document.getElementById("bulbhtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice1 = xmasTreeShopA7.xmasBulbs[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "allBulbs1") {
            let node = document.getElementById("allbulbs1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "bulbs2") {
            let node = document.getElementById("bulbhtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice2 = xmasTreeShopA7.xmasBulbs[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "allBulbs2") {
            let node = document.getElementById("allbulbs2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Kerzen
        if (target.id == "candles") {
            let node = document.getElementById("candlehtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice = xmasTreeShopA7.xmasCandles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles") {
            let node = document.getElementById("candleamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "candles1") {
            let node = document.getElementById("candlehtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice1 = xmasTreeShopA7.xmasCandles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles1") {
            let node = document.getElementById("candleamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "candles2") {
            let node = document.getElementById("candlehtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice2 = xmasTreeShopA7.xmasCandles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles2") {
            let node = document.getElementById("candleamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornamente
        if (target.id == "ornaments") {
            let node = document.getElementById("ornamenthtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice = xmasTreeShopA7.xmasOrnaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments") {
            let node = document.getElementById("ornamentamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "ornaments1") {
            let node = document.getElementById("ornamenthtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice1 = xmasTreeShopA7.xmasOrnaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments1") {
            let node = document.getElementById("ornamentamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "ornaments2") {
            let node = document.getElementById("ornamenthtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice2 = xmasTreeShopA7.xmasOrnaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments2") {
            let node = document.getElementById("ornamentamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta
        if (target.id == "Lametta") {
            let node = document.getElementById("lamettahtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice = xmasTreeShopA7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta") {
            let node = document.getElementById("lamettaamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "Lametta1") {
            let node = document.getElementById("lamettahtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice1 = xmasTreeShopA7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta1") {
            let node = document.getElementById("lamettaamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "Lametta2") {
            let node = document.getElementById("lamettahtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice2 = xmasTreeShopA7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta2") {
            let node = document.getElementById("lamettaamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Baumfüße
        if (target.name == "Treestand") {
            let node = document.getElementById("standhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            standPrice = xmasTreeShopA7.treeStands[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Versandoptionen
        if (target.name == "Delivery options") {
            let node = document.getElementById("deliveryhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            deliveryPrice = xmasTreeShopA7.delivery[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Käufer Info
        if (target.id == "adress") {
            let node = document.getElementById("adresshtml");
            adress = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "surname") {
            let node = document.getElementById("surnamehtml");
            surname = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "firstname") {
            let node = document.getElementById("firstnamehtml");
            firstname = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "mail") {
            let node = document.getElementById("mailhtml");
            mail = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "extra") {
            let node = document.getElementById("extrahtml");
            extra = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Gesamtpreis wird berechnet
        let node = document.getElementById("endpricehtml");
        let HTML;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ballPrice * ballAmount) + (ballPrice1 * ballAmount1) + (ballPrice2 * ballAmount2) + (candlePrice * candleAmount) + (candlePrice1 * candleAmount1) + (candlePrice2 * candleAmount2) + (ornamentPrice * ornamentAmount) + (ornamentPrice1 * ornamentAmount1) + (ornamentPrice2 * ornamentAmount2) + (lamettaPrice * lamettaAmount) + (lamettaPrice1 * lamettaAmount1) + (lamettaPrice2 * lamettaAmount2) + standPrice + deliveryPrice);
        HTML += " €";
        HTML += "</a>";
        node.innerHTML = HTML;
    }
    function checkProgress(_event) {
        if (mail == "" || extra == "" || firstname == "" || surname == "" || adress == "" || treePrice == 0 || standPrice == 0 || ballPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ballAmount == 0 || lamettaAmount == 0 || candleAmount == 0) {
            document.getElementById("mustSelect").innerHTML = "Something's missing";
        }
        else {
            document.getElementById("mustSelect").innerHTML = "";
        }
    }
})(xmasTreeShopA7 || (xmasTreeShopA7 = {}));
//# sourceMappingURL=Aufgabe7.js.map