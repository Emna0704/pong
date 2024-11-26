export class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 2;
        this.dy = 2;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move(canvas) {
        this.x += this.dx;
        this.y += this.dy;


        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.dy *= -1;
        }
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
            this.dx *= -1;
        }
    }

}


