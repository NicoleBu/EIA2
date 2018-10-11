namespace Aufgabe0

{       var name : string = prompt ("Wie soll ich dich nennen? :");
        function box(){
        var node : HTMLElement = document.getElementById("Box");
        
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += ", schön dich kennenzulernen!";
        
        console.log("Hallo",name,", schön dich kennenzulernen!")
        
        }
        
document.addEventListener('DOMContentLoaded',box);
}


      