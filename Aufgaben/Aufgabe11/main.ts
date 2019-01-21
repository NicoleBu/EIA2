namespace Aufgabe11 {
   window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    
    let fps: number = 25;
    let allObjects: Movement [] = [];

    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        
        
        
        
        imgData = crc2.getImageData(0, 0, 500, 800);

        for (let i: number = 0; i < 80; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "ffffff";
            
            allObjects.push(snow);
        }



         for (let i: number = 0; i < 5; i++) {
            let child: allChildren = new allChildren();
            child.x = 0;
            child.y = Math.random() * 200 + 750;
            child.dx = Math.random() * 3;
            child.dy = - child.dx;
            child.state = "down";
            allObjects.push(child);
        }


        for (let i: number = 0; i < 10; i++) {
            let trees: Tree = new Tree();

            trees.x = Math.random() * crc2.canvas.width;
            trees.y = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 500);
            crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);

            if (crc2.isPointInPath(trees.x, trees.y)) {
                
                allObjects.push(trees);
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
    




    function update(): void {

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);
        

        for (let i: number = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }

        console.log("Update");
        }
        

    

}
       






