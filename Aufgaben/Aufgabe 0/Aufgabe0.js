var Aufgabe0;

(function (Aufgabe0) {
    var name = "";
    function box() {
        
    	var name = prompt("Wie soll ich dich nennen? :");
        var node = document.getElementById("Box");
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += ", schön dich kennenzulernen!";
        console.log("Hallo", name, ", schön dich kennenzulernen!");
    }
    
    document.addEventListener('DOMContentLoaded', box);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map