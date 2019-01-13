var Aufgabe10;
(function (Aufgabe10) {
    class Child2 {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 15, this.y - 30);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y - 40);
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
        }
        move() {
            this.dy = 2;
            this.dx = -5;
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 350) {
                this.x = -60;
                this.y = Math.random() * 300 + 50;
            }
        }
    }
    Aufgabe10.Child2 = Child2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=child2.js.map