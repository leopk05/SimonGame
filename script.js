var arrayAleatoria = [];
var clickedButton = [];
var entrance = 0;
var level = 1;
var i = 0;


document.addEventListener("keydown", function (event){
    if (event.key === "a"){
        arrayAleatoria = [];
        gameStart();
    }
});



function gameStart(){
    level = 1;
    $("#level-title").text("level " + level);
    entrance = -1;

    i = 0;
    clickedButton = [];
    setTimeout(function (){
        makeSound(pushColor());
    },300)
}


$(".btn").on("click", function (){



    var clicked = this.id;
    makeSound(clicked);
    clickedButton.push(clicked);
    verifer(i);


});





function verifer(number){
    if(number < level){
        if (clickedButton[number] === arrayAleatoria[number]){
            i++
            if (i === level){
                nextLevel();
                i=0;
            }
        } else {
            $("#level-title").text("Press 'A' to Play Again");
            $("body").addClass("game-over");
            let tom1 = new Audio("sounds/wrong.mp3");
            tom1.play();
            setTimeout(function (){
                $("body").removeClass("game-over");
            },300)
        }
    } else{
        nextLevel();
    }

}






function nextLevel(){
    level++;
    setTimeout(function (){
        $("#level-title").text("level " + level);
    },500);

    i = 0;
    clickedButton = [];
    setTimeout(function (){
        makeSound(pushColor());
    },800);


}



function pushColor(){
    let number = Math.floor(Math.random() * 4);
     if (number === 0){
         arrayAleatoria.push("red")
         return "red"
     }
    if (number === 1){
        arrayAleatoria.push("green")
        return "green"
    }
    if (number === 2){
        arrayAleatoria.push("blue")
        return "blue"
    }
    if (number === 3){
        arrayAleatoria.push("yellow")
        return "yellow"
    }
}













function makeSound(cor){

    $("." + cor).addClass("pressed")
    if (cor === "green"){
        let tom1 = new Audio("sounds/green.mp3");
        tom1.play();
    }
    if (cor === "yellow"){
        let tom1 = new Audio("sounds/yellow.mp3");
        tom1.play();
    }
    if (cor === "blue"){
        let tom1 = new Audio("sounds/blue.mp3");
        tom1.play();
    }
    if (cor === "red"){
        let tom1 = new Audio("sounds/red.mp3");
        tom1.play();
    }
    setTimeout(function (){
        $("." + cor).removeClass("pressed")
    }, 100)
}

