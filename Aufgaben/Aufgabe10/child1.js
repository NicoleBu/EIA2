var Endabgabe;
(function (Endabgabe) {
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
            Endabgabe.crc2.strokeStyle = "#8B4513";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 30, this.y - 25);
            Endabgabe.crc2.moveTo(this.x + 30, this.y - 25);
            Endabgabe.crc2.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 30, this.y - 40);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 55, this.y - 40);
            Endabgabe.crc2.lineTo(this.x + 50, this.y - 60);
            Endabgabe.crc2.moveTo(this.x + 50, this.y - 60);
            Endabgabe.crc2.lineTo(this.x + 50, this.y - 80);
            Endabgabe.crc2.lineTo(this.x + 50, this.y - 60);
            Endabgabe.crc2.lineTo(this.x + 30, this.y - 40);
            Endabgabe.crc2.moveTo(this.x + 50, this.y - 80);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.fillStyle = "#F6D8CE";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 50, this.y - 80);
            Endabgabe.crc2.arc(this.x + 50, this.y - 88, 6, 0, 2 * Math.PI);
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Child1 = Child1;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=child1.js.map