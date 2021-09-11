//pseudo code this shit....
var textInput = document.querySelector(".text").text;
// first it seems like the textarea is capturing any click and type... it's not saving 

//since part of the activity is the save btn, i need to create a save function to local storage.

// let's do that now, i know we can do that from a previous code.
//let's first create a variable to capture the task

var tasks = {};

/* var createTask = function(taskText, taskTime) {
    // create elements that make up a task item
    var task
} */

//literally copying code from taskmaster-pro

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //so this code is setting a string of the object of "tasks" a variable i have yet to define, which is great, because I can build around this.

  // while i'm at it, i'm also going to copy the load tasks function
  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text);
      });
    });
  };

  // copying the push button logic in taskmaster

  $(".task").on("click", "textarea", function () {
      //get current status of text of textarea
      var text = $(textInput).text;
      console.log(text);
  })