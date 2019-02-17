var Endabgabe;
(function (Endabgabe) {
    class snowball extends Endabgabe.Move {
        move() {
        }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                Endabgabe.crc2.fillStyle = "#E6E6E6";
                Endabgabe.crc2.strokeStyle = "#E6E6E6";
                Endabgabe.crc2.lineWidth = 1;
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(this.x, this.y);
                Endabgabe.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                this.timer--;
                console.log(this.timer);
            }
        }
        checkIfHit(_x, _y) {
            Endabgabe.crc2.lineWidth = 50;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(_x, _y);
            Endabgabe.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            Endabgabe.crc2.closePath();
            if (Endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        checkIfHitChild1(_x, _y) {
            Endabgabe.crc2.lineWidth = 50;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(_x, _y);
            Endabgabe.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            Endabgabe.crc2.closePath();
            if (Endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Endabgabe.snowball = snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snowballs.js.map