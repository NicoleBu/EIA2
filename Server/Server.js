/*Aufgabe: Aufgabe 7.1
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 06.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
"use strict";
const Http = require("http");
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let chosenProducts = [];
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map