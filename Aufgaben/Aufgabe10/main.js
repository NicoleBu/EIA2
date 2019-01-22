var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflake = [];
    let child1 = [];
    let child2 = [];
    let tree = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 500, 800);
        for (let i = 0; i < 50; i++) {
            let snow = new Aufgabe10.Snow();
            snow.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snow.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "ffffff";
            snowflake.push(snow);
        }
        for (let i = 0; i < 5; i++) {
            let child = new Aufgabe10.Child1();
            child.x = 0;
            child.y = Math.random() * 200 + 750;
            child.dx = Math.random() * 3;
            child.dy = -child.dx;
            child1.push(child);
        }
        for (let i = 0; i < 5; i++) {
            let child = new Aufgabe10.Child2();
            child.x = 360;
            child.y = Math.random() * 0 + 750;
            child.dx = Math.random() * 3 - 5;
            child.dy = -child.dx;
            child2.push(child);
        }
        for (let i = 0; i < 10; i++) {
            let trees = new Aufgabe10.Tree();
            trees.x = Math.random() * Aufgabe10.crc2.canvas.width;
            trees.y = Math.random() * Aufgabe10.crc2.canvas.height;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(0, 500);
            Aufgabe10.crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);
            if (Aufgabe10.crc2.isPointInPath(trees.x, trees.y)) {
                tree.push(trees);
            }
            else {
                i--;
            }
        }
        update();
    }
    //Himmel
    function sky() {
        Aufgabe10.crc2.fillStyle = "#98f5ff";
        Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, 110);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 110);
        Aufgabe10.crc2.lineTo(0, 400);
        Aufgabe10.crc2.lineTo(500, 110);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    //Rodelhang
    function hill() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 800);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    //Sonne 
    function sun() {
        let x = 160;
        let y = 50;
        let radius = 35;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Aufgabe10.crc2.moveTo(0, 0);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(x, y, radius, startAngle, endAngle, true);
        Aufgabe10.crc2.fillStyle = "yellow";
        Aufgabe10.crc2.fill();
    }
    //Wolken
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowflake.length; i++) {
            let snow = snowflake[i];
            snow.move();
            snow.draw();
        }
        for (let i = 0; i < 5; i++) {
            let children1 = child1[i];
            children1.move();
            children1.draw();
        }
        for (let i = 0; i < 4; i++) {
            let children2 = child2[i];
            children2.move();
            children2.draw();
        }
        for (let i = 0; i < 8; i++) {
            let trees = tree[i];
            trees.draw();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map