export class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
    }

    move(y, canvas) {
        const halfHeight = this.height / 2;
        this.y = Math.max(0, Math.min(y - halfHeight, canvas.height - this.height));
    }
}
