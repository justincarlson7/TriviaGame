




var timer = 30;
var intervalID = 0;




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

if (timer === -1) {


    stop();

    alert("Time up!");
}
}

run();
decrement();

    