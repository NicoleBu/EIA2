namespace Aufgabe10 {
   window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let snow: Snow[] = [];
    let child1: Child1[] = [];
    let child2: Child2[] = [];

    let fps: number = 25;

    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        
        animationSnow();
        animationChild1();
        animationChild2();
        
         imgData = crc2.getImageData(0, 0, 700, 1100);

        update();


        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.floor(Math.random() * crc2.canvas.width);
            let y: number = Math.floor(Math.random() * (350 - 500) + crc2.canvas.height);
            trees(x, y);
            
       for (let i: number = 0; i < 150; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            snowflakes(a, b);
        }     
     }
   }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);



        for (let i: number = 0; i < snow.length; i++) {
            let snowflake: Snow = snow[i];
            snowflake.move();
            snowflake.draw();


        }

        for (let i: number = 0; i < child1.length; i++) {
            let childone: Child1 = child1[i];
            childone.move();
            childone.draw();

        }

        for (let i: number = 0; i < child2.length; i++) {
            let childtwo: Child2 = child2[i];
            childtwo.move();
            childtwo.draw();
        }

    }

function sky(): void {
        crc2.fillStyle = "#98f5ff";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);

        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 300);
        crc2.lineTo(320, 110);
        crc2.closePath();

        crc2.fill();
    }
    
    function hill(): void {

        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.closePath();
        crc2.fill();
    }


    

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

    
   

    function sun(): void {
        let x: number = 160;
        let y: number = 50;
        let radius: number = 35;
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        crc2.moveTo(0, 0);
        crc2.beginPath();
        crc2.arc(x, y, radius, startAngle, endAngle, true);

        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }
    
    function trees(_x: number, _y: number): void {
        
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x, _y - 60);
        crc2.lineTo(_x - 20, _y);
        crc2.lineTo(_x + 20, _y);
        crc2.closePath();

        crc2.fillStyle = "#008B45";
        crc2.strokeStyle = "#006400";
        crc2.fill();
        crc2.stroke();
    }
    
    function snowflakes(_a: number, _b: number): void {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 3 * Math.PI);
        
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fill();
    }

    
     function animationSnow(): void {

        for (let i: number = 0; i < 500; i++) {
            let snowflake: Snow = new Snow();
            snowflake.x = Math.random() * 700;
            snowflake.y = Math.random() * 1100;
            
            snowflake.draw();

            snow.push(snowflake);

        }

    }

       function animationChild1(): void {

        for (let i: number = 0; i < 5; i++) {
            let childone: Child1 = new Child1();
            childone.x = Math.random() * 85 + 200;
            childone.y = Math.random() * 250 + 350;
            childone.draw();

            child1.push(childone);
        }
    }

       function animationChild2(): void {

        for (let i: number = 0; i < 5; i++) {
            let childtwo: Child2 = new Child2();
            childtwo.x = Math.random() * 85 + 200;
            childtwo.y = Math.random() * 85 + 500;
            childtwo.draw();

            child2.push(childtwo);
        }
    }

}