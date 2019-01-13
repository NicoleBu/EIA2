var Aufgabe10;
(function (Aufgabe10) {
    class Snow {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "#F5FEFF";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.strokeStyle = "#D2EEF2";
            Aufgabe10.crc2.stroke();
        }
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 1100) {
                this.y = 0;
            }
            this.draw();
        }
    }
    Aufgabe10.Snow = Snow;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=snow.js.map