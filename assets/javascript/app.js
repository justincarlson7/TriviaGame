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

  //Set interval ID funtion

  function run() {
    intervalID = setInterval(decrement, 1000);
  }

  //Start count down timer function

  function decrement() {
    timer--;

    console.log("time " + timer);

    $("#timerNums").html("<h2> Timer: " + timer + "</h2>");

    //stop time when it gets to 0

    if (timer === 0) {
      alert("Time up!");
      clearInterval(intervalID);
      // timer = 10;
    }
  }

  //Reset timer with set interval function

  run();

  //function to capture onclick as correct or incorrect - CAN'T MAKE IT WORK !!!!!!

  $("input[type='radio']").click(function() {
    var radioValue = $("input[name='riggs']:checked").val();

    if ((radioValue = "true")) {
      console.log("You got it correct!" + radioValue);
    } else {
      console.log("Incorrect - ");
    }
  });

  //PSEUDO CODE

  //use .hide to have start button and reload to quick
  // onclick correct answer
  // increment correct incorrect variables
  // display counters at increment
  //Display TIMES UP as part of conditional statement related to timer
  //Include a restart game button on Times up code

  //Additional code used for testing

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
});
