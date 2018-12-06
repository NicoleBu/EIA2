/*Aufgabe: Aufgabe 7.1
Name: Nicole Burmistrack
Matrikel: 259228
Datum: 06.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

import * as Http from "http";

import * as Url from "url";
namespace L06_SendData {

    console.log("Starting server");

    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let chosenProducts: string[] = [];
    let server: Http.Server = Http.createServer();

    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");

    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log(_request.url);


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let url: Url.Url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");

       
        
        _response.end();
    }
}