namespace Aufgabe11 {
 
    export class Tree extends Movement {
       
        
        draw(): void {
            
            crc2.fillStyle = "#8B4513";
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y - 12.5);
            crc2.lineTo(this.x + 5, this.y - 12.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#008B45";
            crc2.strokeStyle = "#006400";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 8);
            crc2.lineTo(this.x, this.y - 60);
            crc2.lineTo(this.x + 20, this.y - 8);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "white";
            crc2.strokeStyle = "white";
            crc2.lineWidth = 1;
            
            
        }
        
     }
    
 }