var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let fps = 25;
    let allObjects = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        imgData = Aufgabe11.crc2.getImageData(0, 0, 500, 800);
        for (let i = 0; i < 90; i++) {
            let snow = new Aufgabe11.Snow();
            snow.x = Math.random() * Aufgabe11.crc2.canvas.width;
            snow.y = Math.random() * Aufgabe11.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "ffffff";
            allObjects.push(snow);
        }
        for (let i = 0; i < 5; i++) {
            let child = new Aufgabe11.allChildren();
            child.x = 0;
            child.y = Math.random() * 200 + 750;
            child.dx = Math.random() * 3;
            child.dy = -child.dx;
            child.state = "down";
            allObjects.push(child);
        }
        for (let i = 0; i < 10; i++) {
            let trees = new Aufgabe11.Tree();
            trees.x = Math.random() * Aufgabe11.crc2.canvas.width;
            trees.y = Math.random() * Aufgabe11.crc2.canvas.height;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 500);
            Aufgabe11.crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);
            if (Aufgabe11.crc2.isPointInPath(trees.x, trees.y)) {
                allObjects.push(trees);
            }
            else {
                i--;
            }
        }
        update();
    }
    //Himmel
    function sky() {
        Aufgabe11.crc2.fillStyle = "#98f5ff";
        Aufgabe11.crc2.fillRect(0, 0, Aufgabe11.crc2.canvas.width, 110);
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 110);
        Aufgabe11.crc2.lineTo(0, 400);
        Aufgabe11.crc2.lineTo(500, 110);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
    }
    //Rodelhang
    function hill() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 800);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
    }
    //Sonne 
    function sun() {
        let x = 160;
        let y = 50;
        let radius = 35;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Aufgabe11.crc2.moveTo(0, 0);
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(x, y, radius, startAngle, endAngle, true);
        Aufgabe11.crc2.fillStyle = "yellow";
        Aufgabe11.crc2.fill();
    }
    //Wolken
    function cloud1() {
        Aufgabe11.crc2.lineWidth = 2;
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(80, 93);
        Aufgabe11.crc2.arc(80, 93, 17, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(75, 93, 40, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(40, 93, 40, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(87, 90, 40, 0, 7 * Math.PI);
        Aufgabe11.crc2.fillStyle = "#F1FAFA";
        Aufgabe11.crc2.fill();
    }
    function cloud2() {
        Aufgabe11.crc2.lineWidth = 2;
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(255, 82);
        Aufgabe11.crc2.arc(255, 82, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(248, 79, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(247, 65, 15, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(225, 70, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.fillStyle = "#F1FAFA";
        Aufgabe11.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
        console.log("Update");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main.js.map