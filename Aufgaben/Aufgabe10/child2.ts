namespace Endabgabe {

    export class All {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
     }
    
    export class Move extends All {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
   }
}        
       

      export class Child2 extends Move{
          
          state: string;
         
    
       getSpeed(): number {
           if (this.state == "down") {
                return Math.floor(this.dx * this.dy * -1 * 20);
            }
            if (this.state == "up") {
                return Math.floor(this.dx * this.dy * -1 * 15);
            }
}
    
     
        draw():void{
            
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


       drawSled(): void{
            
             crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 28);


            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 20, this.y + 10, this.x - 18, this.y - 13);
            crc2.stroke();
        }

        
       drawChild(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 28);


            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 20, this.y + 10, this.x - 18, this.y - 13);
            crc2.stroke();
            
            

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 15, this.y - 15);
            crc2.lineTo(this.x + 3, this.y - 50); 
            crc2.moveTo(this.x + 10, this.y - 30);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#F6D8CE";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(this.x + 3, this.y - 50, 7, 0, 3 * Math.PI);
            crc2.fill();
            crc2.stroke();
            
         }
        
        drawChildUp(): void {

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
        
        
         move(): void {
            if (this.state == "down") {
                if (this.x < 0 || this.y > crc2.canvas.height) {
                    this.state = "up";
                }
            }
            if (this.state == "up" && this.x > crc2.canvas.width) {
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

}
