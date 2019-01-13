namespace Aufgabe10 {


    export class Child1 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x - 45, this.y - 45, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 35, this.y);
            crc2.lineTo(this.x - 55, this.y - 35);
            crc2.lineTo(this.x - 35, this.y - 35);

            crc2.fillStyle = this.color;
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

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x - 35, this.y - 30);

            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }


        move(): void {

            this.dy = Math.random() * (-2);
            this.dx = Math.random() * (+5);

            this.x += this.dx;
            this.y += this.dy;

            if (this.x < -150) {
                this.x = Math.random() * 100 + 350; //random * streubreite + startposition
                this.y = 650;
            }

        }

    }

}
    
    