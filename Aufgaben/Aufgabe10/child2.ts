namespace Aufgabe10 {

    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x < 0 || this.y > 500) {
                this.x = 500;
                this.y = Math.random() * 370 + 210;
            }
            this.draw();
        }

        draw(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 28);


            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 25, this.y + 15, this.x - 15, this.y - 10);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);
            crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            crc2.moveTo(this.x + 30, this.y - 10);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#F6D8CE";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

            

        }

    }

}