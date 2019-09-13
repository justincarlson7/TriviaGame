




var timer = 10;
var intervalID = 0;




// function stopGame() {


// }

// setTimeout(stopGame, 1000 * 3);

function run(){

intervalID = setInterval(decrement, 1000);


}


function decrement() {

timer--;

console.log("time " + timer);

$("#timerNums").html("<h2> Timer: " + timer + "</h2>");

if (timer === 0) {

    alert("Time up!");
    clearInterval(intervalID);
    // timer = 10;
}
}

run();

// onclick answer
// if class is true
// show moreInfo
// Else show wrong anser


$('.Question1').on('click',function() {
    alert($(this).val());
    console.log($(this).val());
  });
    

  //Start game page - instructions and button
//   $("#hide").click(function(){
//     $("p").hide();
//   });
  
//   $("#show").click(function(){
//     $("p").show();
//   });