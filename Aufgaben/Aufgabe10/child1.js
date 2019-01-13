var Aufgabe10;
(function (Aufgabe10) {
    class Child1 {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x - 45, this.y - 45, 10, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 35, this.y);
            Aufgabe10.crc2.lineTo(this.x - 55, this.y - 35);
            Aufgabe10.crc2.lineTo(this.x - 35, this.y - 35);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y);
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y - 15);
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 10, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y - 15);
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 45, this.y);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y - 15);
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x - 35, this.y - 30);
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
        }
        move() {
            this.dy = Math.random() * (-2);
            this.dx = Math.random() * (+5);
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < -150) {
                this.x = Math.random() * 100 + 350; //random * streubreite + startposition
                this.y = 650;
            }
        }
    }
    Aufgabe10.Child1 = Child1;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=child1.js.map