var Aufgabe11;
(function (Aufgabe11) {
    class Snow extends Aufgabe11.Movement {
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
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = .2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Snow = Snow;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=snow.js.map