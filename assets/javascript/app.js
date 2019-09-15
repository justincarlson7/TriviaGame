  //PSEUDO CODE

  //use .hide to have start button and reload to quick
  // onclick correct answer
  // increment correct incorrect variables
  // display counters at increment
  //Display TIMES UP as part of conditional statement related to timer
  //Include a restart game button on Times up code


$(document).ready(function() {

  $('#countDown').hide();
  $('.questions').hide();
  $('.results').hide();


  var timerCounter = 30;
  var intervalId;
  var correctItems = 0;
  var wrongItems = 0;
  var unanswered = 0;

  // $("input[type='button']").click(function(){
  //   var radioValue = $("input[name='questionOne']:checked").val();
  //   if(radioValue = "option1"){
  //       console.log("radioValue", radioValue);
  //   }
  // });

  //Set interval ID funtion

  function showQuestions(){
    $('#countDown').show();
    $('.questions').show();
    $('#game-done').show();
}


function countDownTimer(){
  intervalId = setInterval(decrement, 1000);
}

function decrement(){
  timerCounter--;
  $('#timer').html(" " + timerCounter + " " + "seconds");
  if (timerCounter ===1){
      $('#timer').html(" " + timerCounter + " " + "second");
  }
  else if(timerCounter ===0) {
      stop();
      hide();
      gameSummary();
  }
}

  //stop timer function

  function stop() {
    clearInterval(intervalId);
}

//Hide functions
function hide(){
  $('#countDown').hide();
  $('.questions').hide();
  $('#game-done').hide();
}

//game stats


function gameSummary(){
  $('.results').show();
  unanswered = (8-(correctItems+wrongItems));
  $('#correctScore').text("Correct Answers:" + " " + correctItems); 
  $('#wrongScore').text("Wrong Answers:" + " " + wrongItems); 
  $('#unanswered').text("Unanswered:" + " " + unanswered); 
}


$('.game-start').on('click', function(){
  $('.game-start').hide();
  showQuestions();
  countDownTimer();
}); 

$('#game-done').on('click', function(){
  $('.game-start').hide(); 
  hide();
  gameSummary();
});

$('input[type=radio]').on ('change', function(){
  correctItems = $('input[value=correct]:checked').length;
  wrongItems = $('input[value=wrong]:checked').length;
  unanswered = (8-(correctItems+wrongItems));
  });


});

//     radioValueArray = radioValueArray.push(radioValue)

// console.log(answers[i]);

    //if ((radioValue === "correct")) {
    //   console.log("You got it correct! " + radioValue);
      
    // } else {
    //   console.log("Incorrect - ", radioValue);
    // }




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

