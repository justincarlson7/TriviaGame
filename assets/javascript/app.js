



$(document).ready(function() {


  
var timer = 10;
var intervalID = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


// $("input[type='button']").click(function(){
//   var radioValue = $("input[name='questionOne']:checked").val();
//   if(radioValue = "option1"){
//       console.log("radioValue", radioValue);
//   }
// });







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

$("input[type='radio']").click(function(){
  var radioValue = $("input[name='riggs']:checked").val();

  
  if (radioValue = "true") {

  console.log("You got it correct!" + radioValue)

} else { console.log("WRONG!!!!")

}

});

// onclick answer
// if class is true
// show moreInfo
// Else show wrong anser


// $('.Question1').on('click',function() {
//     alert($(this).val());
//     console.log($(this).val());
//   });
    

  //Start game page - instructions and button
//   $("#hide").click(function(){
//     $("p").hide();
//   });
  
//   $("#show").click(function(){
//     $("p").show();
//   });


})