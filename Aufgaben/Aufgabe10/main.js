var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let snow = [];
    let child1 = [];
    let child2 = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        animationSnow();
        animationChild1();
        animationChild2();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 700, 1100);
        update();
        for (let i = 0; i < 10; i++) {
            let x = Math.floor(Math.random() * Aufgabe10.crc2.canvas.width);
            let y = Math.floor(Math.random() * (350 - 500) + Aufgabe10.crc2.canvas.height);
            trees(x, y);
            for (let i = 0; i < 150; i++) {
                let a = Math.floor(Math.random() * Aufgabe10.crc2.canvas.width);
                let b = Math.floor(Math.random() * Aufgabe10.crc2.canvas.height);
                snowflakes(a, b);
            }
        }
    }
    function update() {
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < snow.length; i++) {
            let snowflake = snow[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < child1.length; i++) {
            let childone = child1[i];
            childone.move();
            childone.draw();
        }
        for (let i = 0; i < child2.length; i++) {
            let childtwo = child2[i];
            childtwo.move();
            childtwo.draw();
        }
    }
    function sky() {
        Aufgabe10.crc2.fillStyle = "#98f5ff";
        Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, 110);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 110);
        Aufgabe10.crc2.lineTo(0, 300);
        Aufgabe10.crc2.lineTo(320, 110);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    function hill() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 500);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    function cloud1() {
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(80, 93);
        Aufgabe10.crc2.arc(80, 93, 17, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(75, 93, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(40, 93, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(87, 90, 40, 0, 7 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#F1FAFA";
        Aufgabe10.crc2.fill();
    }
    function cloud2() {
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(255, 82);
        Aufgabe10.crc2.arc(255, 82, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(248, 79, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(247, 65, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(225, 70, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#F1FAFA";
        Aufgabe10.crc2.fill();
    }
    function sun() {
        let x = 160;
        let y = 50;
        let radius = 35;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Aufgabe10.crc2.moveTo(0, 0);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(x, y, radius, startAngle, endAngle, true);
        Aufgabe10.crc2.fillStyle = "#FFFF00";
        Aufgabe10.crc2.fill();
    }
    function trees(_x, _y) {
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y - 60);
        Aufgabe10.crc2.lineTo(_x - 20, _y);
        Aufgabe10.crc2.lineTo(_x + 20, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#008B45";
        Aufgabe10.crc2.strokeStyle = "#006400";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function snowflakes(_a, _b) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(_a, _b, 2, 0, 3 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#FFFFFF";
        Aufgabe10.crc2.strokeStyle = "#FFFFFF";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function animationSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new Aufgabe10.Snow();
            snowflake.x = Math.random() * 700;
            snowflake.y = Math.random() * 1100;
            snowflake.draw();
            snow.push(snowflake);
        }
    }
    function animationChild1() {
        for (let i = 0; i < 5; i++) {
            let childone = new Aufgabe10.Child1();
            childone.x = Math.random() * 85 + 200;
            childone.y = Math.random() * 250 + 350;
            childone.draw();
            child1.push(childone);
        }
    }
    function animationChild2() {
        for (let i = 0; i < 5; i++) {
            let childtwo = new Aufgabe10.Child2();
            childtwo.x = Math.random() * 85 + 200;
            childtwo.y = Math.random() * 85 + 500;
            childtwo.draw();
            child2.push(childtwo);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map