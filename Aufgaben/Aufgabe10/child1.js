var Aufgabe10;
(function (Aufgabe10) {
    class Child1 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 500) {
                this.x = 0;
                this.y = Math.random() * 200 + 700;
            }
            this.draw();
        }
        draw() {
            Aufgabe10.crc2.strokeStyle = "#8B4513";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 25);
            Aufgabe10.crc2.moveTo(this.x + 30, this.y - 25);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 30, this.y - 40);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 55, this.y - 40);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 60);
            Aufgabe10.crc2.moveTo(this.x + 50, this.y - 60);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 80);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 60);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 40);
            Aufgabe10.crc2.moveTo(this.x + 50, this.y - 80);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.fillStyle = "#F6D8CE";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 50, this.y - 80);
            Aufgabe10.crc2.arc(this.x + 50, this.y - 88, 6, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Child1 = Child1;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=child1.js.map