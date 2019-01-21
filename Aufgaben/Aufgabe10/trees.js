var Aufgabe10;
(function (Aufgabe10) {
    class Tree {
        draw() {
            Aufgabe10.crc2.fillStyle = "#8B4513";
            Aufgabe10.crc2.strokeStyle = "#8B4513";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 5, this.y + 7.5);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 7.5);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y - 12.5);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 12.5);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#008B45";
            Aufgabe10.crc2.strokeStyle = "#006400";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 20, this.y - 8);
            Aufgabe10.crc2.lineTo(this.x, this.y - 60);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y - 8);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "white";
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 1;
        }
    }
    Aufgabe10.Tree = Tree;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=trees.js.map