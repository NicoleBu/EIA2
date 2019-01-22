var Aufgabe10;
(function (Aufgabe10) {
    class Child2 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.y > 500) {
                this.x = 500;
                this.y = Math.random() * 370 + 210;
            }
            this.draw();
        }
        draw() {
            Aufgabe10.crc2.strokeStyle = "#8B4513";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 28, this.y - 28);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x - 25, this.y + 15, this.x - 15, this.y - 10);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 3, this.y - 50);
            Aufgabe10.crc2.moveTo(this.x + 30, this.y - 10);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.fillStyle = "#F6D8CE";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Child2 = Child2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=child2.js.map