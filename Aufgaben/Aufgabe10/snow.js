var Aufgabe10;
(function (Aufgabe10) {
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
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.strokeStyle = "#ffffff";
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Snow = Snow;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=snow.js.map