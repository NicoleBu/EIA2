"use strict";
const Http = require("http"); // importiert ein Objekt (Http), das Daten empfängt, von einem Modul ("http"), das importiert wird.
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // "Starting server" wird durch console.log in Browser Konsole ausgegeben.
    let port = process.env.PORT; // port ist vom Typ number
    if (port == undefined)
        port = 8100; // ... wird ihm der Wert 8100 zugesprochen.
    let server = Http.createServer(); // verwandelt Computer in einer Http Server und erstellt und erstellt ein Http Server objekt.
    server.addListener("request", handleRequest); // Listener wird auf Server erstellt ("request") und verweist auf die Funktion handleRequest
    server.addListener("listening", handleListen); // Listener wird auf Server erstellt ("listening") und verweist auf die Funktion handleListen
    server.listen(port); // Es wird ein Listener auf Port erstellt.
    function handleListen() {
        console.log("Listening"); //"Listening" wird durch console.log in der Browser Konsele ausgegeben.
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //"I hear voices" //wird durch console.log auf der Browser Konsole ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Reaktion in Form von Information wird als Text, ("content-type", "text/html; charset=utf-8"), in festgelegtem Header ausgegeben.
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Reaktion in Form von Information wird als Text, ("Access-Control-Allow-Origin", "*"),  in festgelegtem Header ausgegeben.
        _response.write(_request.url); //_response greift auf die URL aus _request zu
        console.log(_request.url);
        _response.end(); // _response wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map