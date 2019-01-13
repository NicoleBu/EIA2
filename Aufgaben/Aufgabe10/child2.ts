namespace Aufgabe10 {

    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
      draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 15, this.y - 30);
            crc2.lineTo(this.x + 30, this.y - 10);
            crc2.lineTo(this.x + 25, this.y - 40);


            
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 55, this.y);

            crc2.lineWidth = 3;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 55, this.y - 15);

            crc2.lineWidth = 3;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);

            crc2.lineWidth = 3;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y);
            crc2.lineTo(this.x + 45, this.y - 15);

            crc2.lineWidth = 3;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

        }

        move(): void {

            this.dy = 2;
            this.dx = -5;

            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 350) {
                this.x = -60;
                this.y = Math.random() * 300 + 50;
            }

        }

    }

}