var Aufgabe11;
(function (Aufgabe11) {
    //Kind1
    class allChildren extends Aufgabe11.Movement {
        draw() {
            if (this.state == "down") {
                this.drawDown();
            }
            if (this.state == "up") {
                this.drawUp();
            }
        }
        move() {
            if (this.state == "down") {
                if (this.y > Aufgabe11.crc2.canvas.height) {
                    this.state = "up";
                }
                else if (this.x < 0) {
                    this.state = "up";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "up") {
                if (this.x > Aufgabe11.crc2.canvas.width) {
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
        }
        drawUp() {
            Aufgabe11.crc2.strokeStyle = "brown";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 25);
            Aufgabe11.crc2.moveTo(this.x + 30, this.y - 25);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.strokeStyle = "black";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 50, this.y - 40);
            Aufgabe11.crc2.lineTo(this.x + 52, this.y - 60);
            Aufgabe11.crc2.moveTo(this.x + 52, this.y - 60);
            Aufgabe11.crc2.lineTo(this.x + 52, this.y - 80);
            Aufgabe11.crc2.lineTo(this.x + 47, this.y - 60);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 40);
            Aufgabe11.crc2.moveTo(this.x + 52, this.y - 80);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.lineWidth = 4;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 52, this.y - 80);
            Aufgabe11.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        //Kind2
        drawDown() {
            Aufgabe11.crc2.strokeStyle = "brown";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 30);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x + 15, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            Aufgabe11.crc2.moveTo(this.x + 10, this.y - 40);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 5, this.y - 50);
            Aufgabe11.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.allChildren = allChildren;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=child1.js.map