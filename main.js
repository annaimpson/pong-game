var pongOne = document.getElementById('pong1');
var pongTwo = document.getElementById('pong2');
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var pongHeight = 150;
var pongWidth = 8;
var ballRadius = 3;
var speedOfPong1 = 0;
var positionOfPong1 = 450;
var speedOfPong2 = 0;
var positionOfPong2 = 450;
var x = 100;
var y = 100;
var drawX = 1;
var drawY = -1;
// var score1;
// var score2;

function pongGame(){
    document.addEventListener('keydown', function (e) {
         if (e.keyCode == 87) { //W
            positionOfPong1 -= 25;
            pongOne.style.top = (positionOfPong1) + "px";
         }
         if (e.keyCode == 83) { //S
            positionOfPong1 += 25;
            pongOne.style.top = (positionOfPong1) + "px";
         }
         if (e.keyCode == 38) { //up arrow
            positionOfPong2 -= 25;
            pongTwo.style.top = (positionOfPong2) + "px";
         }
         if (e.keyCode == 40) { //down arrow
            positionOfPong2 += 25;
            pongTwo.style.top = (positionOfPong2) + "px";
         }
    }, false);

    window.setInterval(function show() {
        positionOfPong1 += speedOfPong1;
        positionOfPong2 += speedOfPong2;

        if (positionOfPong1 <= 30) {
            positionOfPong1 = 30;
        }
        if (positionOfPong2 <= 30) {
            positionOfPong2 = 30;
        }
        if (positionOfPong1 >= window.innerHeight - pongHeight) {
            positionOfPong1 = window.innerHeight - pongHeight;
        }
        if (positionOfPong2 > window.innerHeight - pongHeight) {
            positionOfPong2 = window.innerHeight - pongHeight;
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
        // if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
        //     drawX = -drawX;
        //     alert("GAME OVER");
        //     document.location.reload();
        // }
        x += drawX;
        y += drawY;
    }
    setInterval(draw, 10);

} pongGame();
