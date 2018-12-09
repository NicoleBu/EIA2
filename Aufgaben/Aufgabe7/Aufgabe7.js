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
    document.addEventListener("DOMContentLoaded", init);
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
    let address = "https://eia-2-ws.herokuapp.com/";
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
        HTML += "<select name='Tree Stand' id='treeStand'>";
        for (let arrayNumber = 0; arrayNumber < xmasTreeShopA7.treeStands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Treestand' value='" + arrayNumber + xmasTreeShopA7.treeStands[arrayNumber].name + " " + xmasTreeShopA7.treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + xmasTreeShopA7.treeStands[arrayNumber].name + " " + xmasTreeShopA7.treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //verkäferoptionen
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        HTML += "<select name='Delivery Options' id='deliveryOptions'>";
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
    //Aufgabe 7.2
    function init(_event) {
        document.getElementById("button").addEventListener("click", checkProgress);
        setupAsyncForm();
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let checkout = [];
        let items = document.getElementsByTagName("input");
        //trees 
        let pickedTree = document.getElementById("trees");
        let color1 = "Your order:    Christams tree: " + pickedTree.value.substr(1);
        sendRequestWithCustomData(color1);
        checkout.push(color1);
        //balls
        let pickedBalls = document.getElementById("bulbs");
        let color2 = " Christmas bulbs: " + pickedBalls.value.substr(1);
        sendRequestWithCustomData(color2);
        checkout.push(color2);
        let pickedBallsAmount = document.getElementById("allBulbs");
        let color3 = "Bulbs amount: " + pickedBallsAmount.value.substr(1);
        sendRequestWithCustomData(color3);
        checkout.push(color3);
        let pickedBalls1 = document.getElementById("bulbs1");
        let color4 = "Further option 1: " + pickedBalls1.value.substr(1);
        sendRequestWithCustomData(color4);
        checkout.push(color4);
        let pickedBallsAmount1 = document.getElementById("allBulbs1");
        let color5 = "Bulbs amount 1: " + pickedBallsAmount1.value.substr(1);
        sendRequestWithCustomData(color5);
        checkout.push(color5);
        let pickedBalls2 = document.getElementById("bulbs2");
        let color6 = "Further option 2: " + pickedBalls2.value.substr(1);
        sendRequestWithCustomData(color6);
        checkout.push(color6);
        let pickedBallsAmount2 = document.getElementById("allBulbs2");
        let color7 = "Bulbs amount 2: " + pickedBallsAmount2.value.substr(1);
        sendRequestWithCustomData(color7);
        checkout.push(color7);
        //candles
        let pickedCandles = document.getElementById("candles");
        let color8 = "Candles: " + pickedCandles.value.substr(1);
        sendRequestWithCustomData(color8);
        checkout.push(color8);
        let pickedCandlesAmount = document.getElementById("amountCandles");
        let color9 = "Candles amount: " + pickedCandlesAmount.value.substr(1);
        sendRequestWithCustomData(color9);
        checkout.push(color9);
        let pickedCandles1 = document.getElementById("candles1");
        let color10 = "Further option 1: " + pickedCandles1.value.substr(1);
        sendRequestWithCustomData(color10);
        checkout.push(color10);
        let pickedCandlesAmount1 = document.getElementById("amountCandles1");
        let color11 = "Candles amount 1: " + pickedCandlesAmount1.value.substr(1);
        sendRequestWithCustomData(color11);
        checkout.push(color11);
        let pickedCandles2 = document.getElementById("candles2");
        let color12 = "Further option 2: " + pickedCandles2.value.substr(1);
        sendRequestWithCustomData(color12);
        checkout.push(color12);
        let pickedCandlesAmount2 = document.getElementById("amountCandles2");
        let color13 = "Candles amount 2: " + pickedCandlesAmount2.value.substr(1);
        sendRequestWithCustomData(color13);
        checkout.push(color13);
        //ornaments
        let pickedOrnaments = document.getElementById("ornaments");
        let color14 = "Ornaments: " + pickedOrnaments.value.substr(1);
        sendRequestWithCustomData(color14);
        checkout.push(color14);
        let pickedOrnamentsAmount = document.getElementById("amountOrnaments");
        let color15 = "Ornaments amount: " + pickedOrnamentsAmount.value.substr(1);
        sendRequestWithCustomData(color15);
        checkout.push(color15);
        let pickedOrnaments1 = document.getElementById("ornaments1");
        let color16 = "Further option 1: " + pickedOrnaments1.value.substr(1);
        sendRequestWithCustomData(color16);
        checkout.push(color16);
        let pickedOrnamentsAmount1 = document.getElementById("amountOrnaments1");
        let color17 = "Ornaments amount 1: " + pickedOrnamentsAmount1.value.substr(1);
        sendRequestWithCustomData(color17);
        checkout.push(color17);
        let pickedOrnaments2 = document.getElementById("ornaments2");
        let color18 = "Further option 2: " + pickedOrnaments2.value.substr(1);
        sendRequestWithCustomData(color18);
        checkout.push(color18);
        let pickedOrnamentsAmount2 = document.getElementById("amountOrnaments2");
        let color19 = "Ornaments amount 2: " + pickedOrnamentsAmount2.value.substr(1);
        sendRequestWithCustomData(color19);
        checkout.push(color19);
        //lametta
        let pickedLametta = document.getElementById("Lametta");
        let color20 = "Lametta: " + pickedLametta.value.substr(1);
        sendRequestWithCustomData(color20);
        checkout.push(color20);
        let pickedLamettaAmount = document.getElementById("amountLametta");
        let color21 = "Lametta amount: " + pickedLamettaAmount.value.substr(1);
        sendRequestWithCustomData(color21);
        checkout.push(color21);
        let pickedLametta1 = document.getElementById("Lametta1");
        let color22 = "Further option 1: " + pickedLametta1.value.substr(1);
        sendRequestWithCustomData(color22);
        checkout.push(color22);
        let pickedLamettaAmount1 = document.getElementById("amountLametta1");
        let color23 = "Lametta amount 1: " + pickedLamettaAmount1.value.substr(1);
        sendRequestWithCustomData(color23);
        checkout.push(color23);
        let pickedLametta2 = document.getElementById("Lametta2");
        let color24 = "Further option 2: " + pickedLametta2.value.substr(1);
        sendRequestWithCustomData(color24);
        checkout.push(color24);
        let pickedLamettaAmount2 = document.getElementById("amountLametta2");
        let color25 = "Lametta amount 2: " + pickedLamettaAmount2.value.substr(1);
        sendRequestWithCustomData(color25);
        checkout.push(color25);
        //stand
        let pickedStand = document.getElementById("treeStand");
        let color26 = "Tree stand: " + pickedStand.value.substr(1);
        sendRequestWithCustomData(color26);
        checkout.push(color26);
        //adress
        let pickedAdress = document.getElementById("adress");
        let color28 = "Adress: " + pickedAdress.value.substr(1);
        sendRequestWithCustomData(color28);
        checkout.push(color28);
        //surname
        let pickedSurname = document.getElementById("surname");
        let color29 = "Surname: " + pickedSurname.value.substr(1);
        sendRequestWithCustomData(color29);
        checkout.push(color29);
        //name
        let pickedName = document.getElementById("firstname");
        let color30 = "Name: " + pickedName.value.substr(1);
        sendRequestWithCustomData(color30);
        checkout.push(color30);
        //mail
        let pickedMail = document.getElementById("mail");
        let color31 = "Mail: " + pickedMail.value.substr(1);
        sendRequestWithCustomData(color31);
        checkout.push(color31);
        //extra
        let pickedExtra = document.getElementById("extra");
        let color32 = "Extra: " + pickedExtra.value.substr(1);
        sendRequestWithCustomData(color32);
        checkout.push(color32);
        for (let i = 0; i < items.length; i++) {
            let article = items[i];
            if (Number(article.value) > 0) {
                let color = article.name + " " + article.value + " " + article.title + " " + (Number(article.getAttribute("price")) * Number(article.value)) + " Euro";
                sendRequestWithCustomData(color);
                checkout.push(color);
            }
        }
        alert(checkout);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(xmasTreeShopA7 || (xmasTreeShopA7 = {}));
//# sourceMappingURL=Aufgabe7.js.map