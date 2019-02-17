namespace Endabgabe {
    
   window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    
    let fps: number = 25;
    let snowflake: Snow[] = [];
    let child2: Child2[] = [];
    let tree: Tree [] = [];
    let snowballs: snowball[] = [];
    let score: number = 0;
    
    let imgData: ImageData;
    
    
    // Startbildschirm
    function init(): void {
        
        child2 = [];
        snowballs = [];
        
        
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("EndScreen").style.display = "none";
        document.getElementById("div").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("output").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("start").addEventListener("click", main);
        document.getElementById("refresh").addEventListener("click", highscores);
        }
    
    
    // Canvas, Spielseite
    function main(_event: Event): void {
        
        score = 0;
        child2 = [];
        snowballs = [];
      
        document.getElementById("div").style.display = "none";
        document.getElementsByTagName("div")[0].style.display="none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("EndScreen").style.display = "none";
        document.getElementById("rodeln").style.display = "none";
        document.getElementById("refresh").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("scores").style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        
        
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        
        canvas.addEventListener("click", throwSnowball);
        crc2 = canvas.getContext("2d");
       
        
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        
        imgData = crc2.getImageData(0, 0, 500, 800);
        
        for (let i: number = 0; i < 10; i++) {
           
            createChild();
        }
        

        for (let i: number = 0; i < 50; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "ffffff";

            snowflake.push(snow);
        }
        


        for (let i: number = 0; i < 8; i++) {
            let trees: Tree = new Tree();

            trees.x = Math.random() * crc2.canvas.width;
            trees.y = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 500);
            crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);

            if (crc2.isPointInPath(trees.x, trees.y)) {
                tree.push(trees);
            }
            else {
                i--;
            }
        }


        update();
    }
        
        
     
    
    
     //Himmel
        function sky(): void {
        crc2.fillStyle = "#98f5ff";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);
        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 400);
        crc2.lineTo(500, 110);
        crc2.closePath();

        crc2.fill();
        }

    //Rodelhang
    function hill(): void {
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.moveTo(0,800);
        crc2.closePath();
        crc2.fill();
       
    }

    //Sonne 
    function sun(): void {
        let x: number = 160;
        let y: number = 50;
        let radius: number = 35;
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        crc2.moveTo(0, 0);
        crc2.beginPath();
        crc2.arc(x, y, radius, startAngle, endAngle, true);

        crc2.fillStyle = "yellow";
        crc2.fill();
    }

    //Wolken
    function cloud1(): void {
        crc2.lineWidth = 2;
        
        crc2.beginPath();
        crc2.moveTo(80, 93);
        crc2.arc(80, 93, 17, 0, 2 * Math.PI);
        crc2.arc(75, 93, 40, 0, 2 * Math.PI);
        crc2.arc(40, 93, 40, 0, 2 * Math.PI);
        crc2.arc(87, 90, 40, 0, 7 * Math.PI);
        crc2.fillStyle = "#F1FAFA";
        crc2.fill();
    }

    function cloud2(): void {
        crc2.lineWidth = 2;
        
        crc2.beginPath();
        crc2.moveTo(255, 82);
        crc2.arc(255, 82, 20, 0, 2 * Math.PI);
        crc2.arc(248, 79, 20, 0, 2 * Math.PI);
        crc2.arc(247, 65, 15, 0, 2 * Math.PI);
        crc2.arc(225, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#F1FAFA";
        crc2.fill();
    }
    
        
    //Schneeball
        function throwSnowball(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let ball: snowball = new snowball();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    } 
        
    //Kind, Kinder
        function createChild(): void {
        
            let child: Child2 = new Child2();
            child.x = 600;
            child.y = Math.random() *  + 600;
            child.dx = Math.random() * 2 - 4;
            child.dy = - child.dx;
        child.state = "ridedown";

        child2.push(child);
}   
        
        
    
    
    
    
    
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
    }    
    
    
    let address: string = "https://eia-2-ws.herokuapp.com/";
      

     
     function sendRequestWithCustomData(): void {
        console.log("requestcustom");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let sendString: string = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;

        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }
    
    
       function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    
    
    
    
    
    function end(): void {
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("Baelle").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        
        document.getElementById("EndScreen").style.display = "initial";
        document.getElementById("refresh").addEventListener("click", highscores);
        document.getElementById("endScore").innerHTML = "Score:" + score.toString();
        document.getElementById("endScore").setAttribute("value", score.toString());
        
        
        
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);

        document.getElementById("insert").addEventListener("click", sendRequestWithCustomData);
      }
    
     
    
    
    function highscores(): void {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("EndScreen").style.display = "none";
        document.getElementById("scores").style.display = "initial";
        document.getElementById("refresh").addEventListener("click", highscores);
    }
    
    
    

    
function update(): void {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
      
        let ballCount: number = snowballs.length;
        document.getElementById("Baelle").innerHTML = "Snowball amount:" + ballCount.toString() + "";
       
        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);
            
        document.getElementById("score").innerText = score.toString();    
            
        
            
        for (let i: number = 0; i < snowflake.length; i++) {
            let snow: Snow = snowflake[i];
            snow.move();
            snow.draw();
        }

        for (let i: number = 0; i < child2.length; i++) {
           
            let children2: Child2 = child2[i];
            children2.move();
            children2.draw();
        }
      
        for (let i: number = 0; i < child2.length; i++) {
            child2[i].move();
            child2[i].draw();
            if (child2[i].x < -10 || child2[i].y > (crc2.canvas.height + 10)) {
                child2.splice(i, 1);
                createChild();
                console.log("length:" + child2.length);
            }
        }

        for (let i: number = 0; i < 8; i++) {
            let trees: Tree = tree[i];
            trees.draw();
        }
      
        
        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
                //snowballs[i].checkIfHit(childrenArray[i].x, childrenArray[i].y);
            }
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    console.log("timer:" + snowballs[i].timer);
                    for (let i2: number = 0; i2 < child2.length; i2++) {
                        
                        if (snowballs[i].checkIfHit(child2[i2].x, child2[i2].y) == true && child2[i2].state == "down") {
                            score += child2[i2].getSpeed() * 10;
                            child2[i2].state = "shot";
                        }
                        if (snowballs[i].checkIfHitChild1(child2[i2].x, child2[i2].y) == true && child2[i2].state == "up") {
                            score += child2[i2].getSpeed() * 10;
                            child2[i2].state = "shot";
                        }
                        
                    }
                }


    if (snowballs.length < 25) {
                    document.getElementById("Baelle").innerHTML = "Snowball amount:  " + ballCount.toString() + "";

                }
                if (snowballs.length > 25) {
                    end();

                }
             }
      
      document.getElementById("score").innerText = score.toString(); 
    
        }
      }
 
    
    
   }
 }
       