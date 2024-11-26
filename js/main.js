import { Ball } from './classes/ball.js';
import { Player } from './classes/player.js';


const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');


const ball = new Ball(320, 180, 10, 'red');
const player1 = new Player(10, 140, 5, 80, 'blue');
const player2 = new Player(625, 140, 5, 80, 'blue');

let scorePlayer1 = 0;
let scorePlayer2 = 0;


canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;
    player1.move(mouseY, canvas);
    player2.move(mouseY, canvas);
});


function gameLoop() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(context);
    ball.move(canvas);
    player1.draw(context);
    player2.draw(context);
    requestAnimationFrame(gameLoop);
}

gameLoop();

function updateScore(winner) {
    if (winner === 1) {
        scorePlayer1++;
    } else {
        scorePlayer2++;
    }
    console.log(`Score: Player 1 - ${scorePlayer1}, Player 2 - ${scorePlayer2}`);
}

