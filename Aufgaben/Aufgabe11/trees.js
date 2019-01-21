var Aufgabe11;
(function (Aufgabe11) {
    class Tree extends Aufgabe11.Movement {
        draw() {
            Aufgabe11.crc2.fillStyle = "#8B4513";
            Aufgabe11.crc2.strokeStyle = "#8B4513";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 5, this.y + 7.5);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 7.5);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y - 12.5);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y - 12.5);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#008B45";
            Aufgabe11.crc2.strokeStyle = "#006400";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 20, this.y - 8);
            Aufgabe11.crc2.lineTo(this.x, this.y - 60);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y - 8);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 1;
        }
    }
    Aufgabe11.Tree = Tree;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=trees.js.map