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

function pongGame(){

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

        if (pongPositionOne <= 0 || pongPositionOne > canvas.height - pongHeight) { //keeps left bar from going beyond top or bottom bar
            pongPositionOne = 0;                                                    //top stop isn't working. weird.
            pongPositionOne = canvas.height - pongHeight;
        }
        if (pongPositionTwo <= 0 || pongPositionTwo > canvas.height - pongHeight) { //keeps right bar from going beyond top or bottom bar
            pongPositionTwo = 0;
            pongPositionTwo = canvas.height - pongHeight;
        }
        if(y + drawY > canvas.height || y + drawY < 0) { //bounces the ball off the top and bottom of screen
            drawY = -drawY;
        }
        else if(x + drawX > canvas.width || x + drawX < 0) { //TODO
            if(y > pongPositionTwo && y < pongPositionTwo + pongHeight  || y > pongPositionOne && y < pongPositionOne + pongHeight) {
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
