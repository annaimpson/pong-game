var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var pongHeight = 100;
var pongWidth = 10;
var pongPositionOne = 250;
var pongPositionTwo = 250;
var ballRadius = 10;
var x = 100;
var y = 100;
var drawX = 1;
var drawY = -1;
var paddleX = (context.width - pongWidth)/2;
console.log(canvas.width);

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

    function drawBall() {
        context.beginPath();
        context.arc(x, y, ballRadius, 0, 2 * Math.PI); //x coordinate, y coordinate, radius, starting angle, ending angle
        context.fillStyle = "#efdce9";
        context.fill();
        context.closePath();
    }

    function drawRightPaddle() {
        context.beginPath();
        context.lineWidth = "3";
        context.strokeStyle = "#efdce9";
        context.fillStyle = "#efdce9";
        context.rect(0, pongPositionOne, pongWidth, pongHeight);
        context.fill();
        context.stroke();
        document.addEventListener('keydown', function (e) {
             if (e.keyCode == 87) { //W
                pongPositionOne -= 0.1;
             }
             if (e.keyCode == 83) { //S
                pongPositionOne += 0.1;
             }
        }, false);
    }

    function drawLeftPaddle() {
        context.beginPath();
        context.lineWidth = "3";
        context.strokeStyle = "#efdce9";
        context.fillStyle = "#efdce9";
        context.rect(canvas.height - pongWidth, pongPositionTwo, pongWidth, pongHeight);
        context.fill();
        context.stroke();
        document.addEventListener('keydown', function (e) {
             if (e.keyCode == 38) { //up arrow
                pongPositionTwo -= 0.1;
             }
             if (e.keyCode == 40) { //down arrow
                pongPositionTwo += 0.1;
             }
        }, false);
    }

    window.setInterval(function show() {
        context.clearRect(0, 0, canvas.width, canvas.height); //clears the ball trail
        drawBall();
        drawRightPaddle();
        drawLeftPaddle();

        if (pongPositionOne <= 0 || pongPositionOne >= canvas.height - pongHeight) { //keeps left bar from going beyond top or bottom bar
            pongPositionOne = 0;
            pongPositionOne = window.innerHeight - pongHeight;
        }
        // if (positionOfPong2 <= 30 || positionOfPong2 > window.innerHeight - pongHeight) { //keeps right bar from going beyond top or bottom bar
        //     positionOfPong2 = 30;
        //     positionOfPong2 = window.innerHeight - pongHeight;
        // }
        if(y + drawY > canvas.height || y + drawY < 0) { //bounces the ball off the top and bottom of screen
            drawY = -drawY;
        }
        if(x + drawX < ballRadius) {
            drawX = -drawX;
        }
        else if(x + drawX > canvas.width - ballRadius) { //TODO
            if(x > paddleX && x < paddleX + pongWidth) {
                drawX = -drawX;
            }
            else {
                document.location.reload(); //restarts the game if the ball doesn't get hit
            }
        }

        x += drawX;
        y += drawY;

    }, 1000/60);

} pongGame();
