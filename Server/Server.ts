import * as Http from "http";  // importiert ein Objekt (Http), das Daten empfängt, von einem Modul ("http"), das importiert wird.

namespace L06_SendData {  // über den namespace werden Objekte in einer Hierarchie bzw. Baumstruktur angeordnet und können über verschiedene Pfadnamen angesprochen werden.
    console.log("Starting server");  // "Starting server" wird durch console.log in Browser Konsole ausgegeben.
    let port: number = process.env.PORT; // port ist vom Typ number
    if (port == undefined)   // wenn der port "undefined" ist, ...
        port = 8100; // ... wird ihm der Wert 8100 zugesprochen.

    let server: Http.Server = Http.createServer(); // verwandelt Computer in einer Http Server und erstellt und erstellt ein Http Server objekt.
    server.addListener("request", handleRequest);  // Listener wird auf Server erstellt ("request") und verweist auf die Funktion handleRequest
    server.addListener("listening", handleListen); // Listener wird auf Server erstellt ("listening") und verweist auf die Funktion handleListen
    server.listen(port); // Es wird ein Listener auf Port erstellt.

    function handleListen(): void { //erstellt Funktion handle Listen vom Typ void
        console.log("Listening"); //"Listening" wird durch console.log in der Browser Konsele ausgegeben.
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Daten von _request werden von dem Http Element Incoming Message genommen. Daten von _response werden von dem Http Element ServerResponse genommen.
        console.log("I hear voices!");"I hear voices" //wird durch console.log auf der Browser Konsole ausgegeben

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Reaktion in Form von Information wird als Text, ("content-type", "text/html; charset=utf-8"), in festgelegtem Header ausgegeben.
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Reaktion in Form von Information wird als Text, ("Access-Control-Allow-Origin", "*"),  in festgelegtem Header ausgegeben.

        _response.write(_request.url); //_request greift auf die URL aus _request zu
        
        _response.end(); // _response wird beendet
        
    }
}