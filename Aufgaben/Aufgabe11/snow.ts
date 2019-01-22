namespace Aufgabe11 {
 
    export class Snow extends Movement {
       
        
        move(): void {

            this.dy = 2;
            this.dx = Math.random() * 4 - 2;

            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
}
        
        draw(): void {
            
            
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "white";
            crc2.lineWidth = .2;

            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            }
        }
    }