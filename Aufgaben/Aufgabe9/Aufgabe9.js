var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        sky();
        hill();
        cloud1();
        cloud2();
        sun();
        child1();
        child2();
        sleigh1();
        kidOnSleigh();
        for (let i = 0; i < 10; i++) {
            let x = Math.floor(Math.random() * crc2.canvas.width);
            let y = Math.floor(Math.random() * (350 - 500) + crc2.canvas.height);
            trees(x, y);
        }
        for (let i = 0; i < 150; i++) {
            let a = Math.floor(Math.random() * crc2.canvas.width);
            let b = Math.floor(Math.random() * crc2.canvas.height);
            snowflakes(a, b);
        }
    }
    function sky() {
        crc2.fillStyle = "#98f5ff";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);
        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 300);
        crc2.lineTo(320, 110);
        crc2.closePath();
        crc2.fill();
    }
    function hill() {
        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.closePath();
        crc2.fill();
    }
    function cloud1() {
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
    function cloud2() {
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
    function sun() {
        let x = 160;
        let y = 50;
        let radius = 35;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        crc2.moveTo(0, 0);
        crc2.beginPath();
        crc2.arc(x, y, radius, startAngle, endAngle, true);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }
    function child1() {
        crc2.moveTo(270, 180);
        crc2.beginPath();
        crc2.arc(270, 180, 5, 0, 2 * Math.PI); //kopf
        crc2.moveTo(270, 180); //körper
        crc2.lineTo(270, 210);
        crc2.moveTo(270, 190); //Arm rechts
        crc2.lineTo(280, 195);
        crc2.moveTo(270, 190); //Arm links
        crc2.lineTo(260, 195);
        crc2.moveTo(270, 210); //Bein rechts
        crc2.lineTo(280, 225);
        crc2.moveTo(270, 210); //Bein links
        crc2.lineTo(260, 225);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function child2() {
        crc2.moveTo(225, 195);
        crc2.beginPath();
        crc2.arc(100, 300, 5, 0, 2 * Math.PI); //kopf
        crc2.moveTo(100, 300); //körper
        crc2.lineTo(100, 330);
        crc2.moveTo(100, 310); //Arm rechts
        crc2.lineTo(110, 315);
        crc2.moveTo(100, 310); //Arm links
        crc2.lineTo(90, 315);
        crc2.moveTo(100, 330); //Bein rechts
        crc2.lineTo(110, 345);
        crc2.moveTo(100, 330); //Bein links
        crc2.lineTo(90, 345);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function sleigh1() {
        crc2.strokeStyle = "#8B4513";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(200, 200);
        crc2.lineTo(230, 182);
        crc2.moveTo(210, 192);
        crc2.lineTo(200, 180);
        crc2.moveTo(220, 187);
        crc2.lineTo(210, 173);
        crc2.moveTo(190, 185);
        crc2.lineTo(220, 165);
        crc2.moveTo(230, 178);
        crc2.stroke();
    }
    function kidOnSleigh() {
    }
    function trees(_x, _y) {
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
    function snowflakes(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 3 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fill();
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map