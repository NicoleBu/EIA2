namespace Endabgabe {
 
    export class Tree {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        draw(): void {
            
            crc2.fillStyle = "#8B4513";
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 3, this.y + 9);
            crc2.lineTo(this.x - 3, this.y + 9);
            crc2.lineTo(this.x - 3, this.y - 15);
            crc2.lineTo(this.x + 3, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#008B45";
            crc2.strokeStyle = "#006400";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x - 25, this.y - 10);
            crc2.lineTo(this.x, this.y - 80);
            crc2.lineTo(this.x + 25, this.y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "white";
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            
            
        }
        
     }
    
 }