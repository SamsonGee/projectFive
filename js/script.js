var currentTime = moment().format('MMM Do h:mm A');
$("#currentDay").text(currentTime);

var currentHour = moment().format('h');

var past
var current
var future
var taskHour
/* console.log(moment().format('h'));
console.log($('.hour col-lg-2 col-sm-12'));
$(".row").each(function(){
    if(moment().format("h") === $(this).val()) {
        taskHour = current;
        console.log(taskHour)
    }
console.log($(this).val())
}) */


//pseudo code this shit....

var tasks = {};

/* var createTask = function(taskText, taskTime) {
    // create elements that make up a task item
    var task
} */

//literally copying code from taskmaster-pro]

  //so this code is setting a string of the object of "tasks" a variable i have yet to define, which is great, because I can build around this.

  // while i'm at it, i'm also going to copy the load tasks function

    // loop over object properties

  // copying the push button logic in taskmaster

  $(".saveBtn").on("click", function(){
      var textValue = $(this).siblings(".text").val();
      var textTime = $(this).siblings(".text").attr("hour");
      console.log(textTime);
      console.log(textValue);

      localStorage.setItem(textTime, textValue);
  })

  function getTasks() {
    var arr = [9, 10, 11, 12, 13, 14,15, 16, 17];
    arr.forEach(function(e){
        $("textarea[hour='" + e + "']").val(localStorage.getItem(e))
    })
  }

/* function timeOfDay() {
    $("textarea").each(function(){
        var timeBlock = parseInt($(this).attr("hour"));
        console.log(timeBlock);
    })
} */

getTasks();