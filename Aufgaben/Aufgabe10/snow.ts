namespace Aufgabe10 {
 
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();


        }

        move(): void {

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

}