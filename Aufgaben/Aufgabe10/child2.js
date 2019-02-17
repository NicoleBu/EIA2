var Endabgabe;
(function (Endabgabe) {
    class All {
        move() { }
        draw() { }
    }
    Endabgabe.All = All;
    class Move extends All {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Endabgabe.Move = Move;
    class Child2 extends Move {
        getSpeed() {
            if (this.state == "down") {
                return Math.floor(this.dx * this.dy * -1 * 20);
            }
            if (this.state == "up") {
                return Math.floor(this.dx * this.dy * -1 * 15);
            }
        }
        draw() {
            if (this.state == "ridedown") {
                this.drawChild();
            }
            if (this.state == "dead") {
                this.drawSled();
            }
            if (this.state == "up") {
                this.drawChildUp();
            }
        }
        drawSled() {
            Endabgabe.crc2.strokeStyle = "#8B4513";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 28, this.y - 28);
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.quadraticCurveTo(this.x - 20, this.y + 10, this.x - 18, this.y - 13);
            Endabgabe.crc2.stroke();
        }
        drawChild() {
            Endabgabe.crc2.strokeStyle = "#8B4513";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 28, this.y - 28);
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.quadraticCurveTo(this.x - 20, this.y + 10, this.x - 18, this.y - 13);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 15, this.y - 15);
            Endabgabe.crc2.lineTo(this.x + 3, this.y - 50);
            Endabgabe.crc2.moveTo(this.x + 10, this.y - 30);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.fillStyle = "#F6D8CE";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x + 3, this.y - 50, 7, 0, 3 * Math.PI);
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        drawChildUp() {
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
        move() {
            if (this.state == "down") {
                if (this.x < 0 || this.y > Endabgabe.crc2.canvas.height) {
                    this.state = "up";
                }
            }
            if (this.state == "up" && this.x > Endabgabe.crc2.canvas.width) {
                this.state = "down";
            }
            if (this.state == "up") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "down" || this.state == "shot") {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    Endabgabe.Child2 = Child2;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=child2.js.map