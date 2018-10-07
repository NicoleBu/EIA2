namespace Aufgabe0

{
    
    var name : string ="";
    function box(){
        var name = prompt ("Wie soll ich dich nennen? :");
        var node : any= document.getElementById("Box");
        
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += ", schön dich kennenzulernen!";
        
        console.log("Hallo",name,", schön dich kennenzulernen!")
        
       }
        
document.addEventListener('DOMContentLoaded',box);
}


      