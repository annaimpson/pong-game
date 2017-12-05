var pongOne = document.getElementById('pong1');
var pongTwo = document.getElementById('pong2');
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var paddleHeight = 150;
var paddleWidth = 8;
var ballRadius = 3;
var speedOfPaddle1 = 0;
var positionOfPaddle1 = 450;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 450;
var x = 100;
var y = 100;
var drawX = 1;
var drawY = -1;
// var score1;
// var score2;

function pongGame(){
    document.addEventListener('keydown', function (e) {
         if (e.keyCode == 87) { //W
            positionOfPaddle1 -= 25;
            pongOne.style.top = (positionOfPaddle1) + "px";
         }
         if (e.keyCode == 83) { //S
            positionOfPaddle1 += 25;
            pongOne.style.top = (positionOfPaddle1) + "px";
         }
         if (e.keyCode == 38) { //up arrow
            positionOfPaddle2 -= 25;
            pongTwo.style.top = (positionOfPaddle2) + "px";
         }
         if (e.keyCode == 40) { //down arrow
            positionOfPaddle2 += 25;
            pongTwo.style.top = (positionOfPaddle2) + "px";
         }
    }, false);

    window.setInterval(function show() {
        positionOfPaddle1 += speedOfPaddle1;
        positionOfPaddle2 += speedOfPaddle2;

        if (positionOfPaddle1 <= 30) {
            positionOfPaddle1 = 30;
        }
        if (positionOfPaddle2 <= 30) {
            positionOfPaddle2 = 30;
        }
        if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
            positionOfPaddle1 = window.innerHeight - paddleHeight;
        }
        if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
            positionOfPaddle2 = window.innerHeight - paddleHeight;
        }

    }, 1000/60);

    function drawBall() {
        context.beginPath();
        context.arc(x, y, ballRadius, 0, Math.PI*2);
        context.fillStyle = "#efdce9";
        context.fill();
        context.closePath();
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); //clears the ball trail
        drawBall();
        if(y + drawY > canvas.height - ballRadius || y + drawY < ballRadius) {
            drawY = -drawY;
        }
        if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
            drawX = -drawX;
            alert("GAME OVER");
            document.location.reload();
        }
        x += drawX;
        y += drawY;
    }
    setInterval(draw, 10);

} pongGame();
