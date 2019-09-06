$( document ).ready() {




var timer = 0;
var intervalID




function stopGame() {

console.log("Time is up sucka!");

}

setTimeout(stopGame, 1000 * 3);

function run(){

intervalID = setInterval(decrement, 1000);


}


function decrement() {

timer--;

console.log("time " + timer);

$("#timerNums").html("<h2>" + timer + "</h2>");

if (timer === 0) {


    stop();

    alert("Time up!");
}
}

run();
decrement();
}
    