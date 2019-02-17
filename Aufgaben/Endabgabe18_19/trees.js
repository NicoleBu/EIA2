var Endabgabe;
(function (Endabgabe) {
    class Tree {
        draw() {
            Endabgabe.crc2.fillStyle = "#8B4513";
            Endabgabe.crc2.strokeStyle = "#8B4513";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 3, this.y + 9);
            Endabgabe.crc2.lineTo(this.x - 3, this.y + 9);
            Endabgabe.crc2.lineTo(this.x - 3, this.y - 15);
            Endabgabe.crc2.lineTo(this.x + 3, this.y - 15);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "#008B45";
            Endabgabe.crc2.strokeStyle = "#006400";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x - 25, this.y - 10);
            Endabgabe.crc2.lineTo(this.x, this.y - 80);
            Endabgabe.crc2.lineTo(this.x + 25, this.y - 10);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.lineWidth = 2;
        }
    }
    Endabgabe.Tree = Tree;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=trees.js.map