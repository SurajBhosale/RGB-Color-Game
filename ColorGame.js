var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        // add eventlisteners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "You guessed Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again ?"
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){   
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }    
        
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}


resetButton.addEventListener("click",function(){
    reset();
});



function changeColors(color){
    // loop through all the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // Make an Array
    var arr = [];
    for(var i = 0; i< num; i++ ){
        // Get random colors and push into array
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    // pick a "red " between 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" between 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue " between 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g + ", " + b + ")";
}