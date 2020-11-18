// alert("connected");
// var colors =
//  ["rgb(255, 0, 0)",
//  "rgb(255, 255, 0)",
//  "rgb(0, 255, 0)",
//  "rgb(0, 255, 255)",
//  "rgb(0, 0, 255)",
//  "rgb(255, 0, 255)"
//  ]

var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayRgb = document.getElementById("rgbVal");
displayRgb.textContent = pickedColor.toUpperCase();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var defaultBg = "#232323";
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var jumbotron = document.querySelector(".jumbotron");

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    //var choices = 3;
    colors = generateRandomColor(3);
    pickedColor = pickColor();
    displayRgb.textContent = pickedColor.toUpperCase();
    for (var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    }
    for(var i = 0; i < 3; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // h1.style.backgroundColor = defaultBg;
    // for(var i = 0; i < choices.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // alert("clicked")

})

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    // alert("clicked");
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    displayRgb.textContent = pickedColor.toUpperCase();
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
})

reset.addEventListener("click", function(){
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    displayRgb.textContent = pickedColor.toUpperCase();
    reset.textContent = "New Colors";
    jumbotron.style.backgroundColor = defaultBg;
    //for(var i =0; i < squares.length; i++){
        //squares[i].style.backgroundColor = colors[i];
    for(var i =0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

for(var i =0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    //to add event listener
    squares[i].addEventListener("click", function(){
        //console.log("clicked the square" + squares[i]);
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
        //alert("correct");
            messageDisplay.textContent = "Correct!";
            changeColor();
            jumbotron.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again?";
        }
        else{
            //alert("wrong");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColor(color){
    for( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var array = [];
    for (var i = 0; i < num; i++){
        // var item = Math.floor(Math.random()*255 + 1);
        // array.append(item);
        array.push(randomColor());
    }
    return array;
}

function randomColor(){
    //random alue of red
    var red = Math.floor(Math.random() * 256);
    //random value of green
    var green = Math.floor(Math.random() * 256);
    //random value of blue
    var blue = Math.floor(Math.random() * 256);
    const newLocal = `rgb(${red}, ${green}, ${blue})`;
    return newLocal;

}

