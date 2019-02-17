namespace Endabgabe {


    export class Child1 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 500) {
                this.x = 0;
                this.y = Math.random() *  200 + 700;
            }
            this.draw();
        }

        draw(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 25);
            crc2.moveTo(this.x + 30, this.y - 25);
            crc2.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 30, this.y - 40);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 55, this.y - 40);
            crc2.lineTo(this.x + 50, this.y - 60);
            crc2.moveTo(this.x + 50, this.y - 60);
            crc2.lineTo(this.x + 50, this.y - 80);
            crc2.lineTo(this.x + 50, this.y - 60);
            crc2.lineTo(this.x + 30, this.y - 40);
            crc2.moveTo(this.x + 50, this.y - 80);
        
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#F6D8CE";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y - 80);
            crc2.arc(this.x + 50, this.y - 88, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }

    }

}
    
    