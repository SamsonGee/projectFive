var currentTime = moment().format('MMM Do h:mm A');
$("#currentDay").text(currentTime);

var currentHour = moment().format('H');

var past
var current
var future
var taskHour


// when save button is clicked

  $(".saveBtn").on("click", function(){

    //create a variable for text and the time 
      var textValue = $(this).siblings(".text").val();
      var textTime = $(this).siblings(".text").attr("hour");
      /* console.log(textTime);
      console.log(textValue); */

      //save in local storage 
      localStorage.setItem(textTime, textValue);
  })

  //call back any prevoiusly saved tasks using an array 
  function getTasks() {
    var arr = [9, 10, 11, 12, 13, 14,15, 16, 17];
    arr.forEach(function(e){
        $("textarea[hour='" + e + "']").val(localStorage.getItem(e))
    })
  }

function timeOfDay() {
    $("textarea").each(function(){
        var timeBlock = parseInt($(this).attr("hour"));  
        /* console.log(moment().format('h')); */
        if(timeBlock < currentHour){
            $(this).addClass("past")
        }
        else if(timeBlock === currentHour){
            $(this).addClass("present")
        }
        else if(timeBlock > currentHour) {
            $(this).addClass("future")
        }
    })
};

getTasks();
timeOfDay();