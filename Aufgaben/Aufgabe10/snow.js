var Endabgabe;
(function (Endabgabe) {
    class Snow {
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            Endabgabe.crc2.fillStyle = this.color;
            Endabgabe.crc2.strokeStyle = "#ffffff";
            Endabgabe.crc2.lineWidth = .2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Snow = Snow;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snow.js.map