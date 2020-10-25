$(document).ready(function() {

  $("#currentDay").text(moment().format('MMMM Do YYYY'));
  $("#currentTime").text(moment().format('h:mm a'));

  // Each time Save button is clicked retrieve sibling of class .description (text for each timeslot)
  $(".saveBtn").on("click", function() {
        
    console.log("this is: " + this);
    var entry = $(this).siblings(".description").val();
    var slot = $(this).parent().attr("id");
    var dateSaved = moment().format("MMM Do YY");

    console.log("entry: "+entry+ " slot: "+slot+" date:"+dateSaved);

    // Save entries to local storage
    localStorage.setItem(slot, entry, dateSaved);
  });


  function hourIdToNumber(hour){
    switch(hour) {
      case "8am-slot": return 8;
      case "9am-slot": return 9;
      case "10am-slot": return 10;
      case "11am-slot": return 11;
      case "12pm-slot": return 12;
      case "1pm-slot": return 13;
      case "2pm-slot": return 14;
      case "3pm-slot": return 15;
      case "4pm-slot": return 16;
      case "5pm-slot": return 17;
      case "6pm-slot": return 18;
      case "7pm-slot": return 19;
      case "8pm-slot": return 20;
      case "9pm-slot": return 21;
      case "10pm-slot": return 22;
      case "11pm-slot": return 23;

    }
  }

  function updateTimeSlot() {
    //Updating current time and date
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    $("#currentTime").text(moment().format('h:mm a'));

    $(".time-block").each(function() {
      var currentHour = moment().hours();
      console.log("current hour: "+currentHour);

      var thisTimeSlot = hourIdToNumber($(this).attr("id"));
      console.log("thisTimeSlot is: "+this);
      console.log("This thisTimeSlot: "+ thisTimeSlot);

      //Compare each timeslot to current time
 
      if (thisTimeSlot === currentHour) {
        //If timeslot is the current hour, make it red (.present in css)
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else if (thisTimeSlot < currentHour) {
        //If timeslot is a past hour, make it gray (.past in css)
        $(this).addClass("past");
      }
      else {
        //If timeslot is a future hour, make it green (.future in css)
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  updateTimeSlot();

  //Refresh timeslot every 10 seconds
  setInterval(updateTimeSlot, 10000);

  // Retrieve any saved data from local storage
  $("#8am-slot .description").val(localStorage.getItem("8am-slot"));
  $("#9am-slot .description").val(localStorage.getItem("9am-slot"));
  $("#10am-slot .description").val(localStorage.getItem("10am-slot"));
  $("#11am-slot .description").val(localStorage.getItem("11am-slot"));
  $("#12pm-slot .description").val(localStorage.getItem("12pm-slot"));
  $("#1pm-slot .description").val(localStorage.getItem("1pm-slot"));
  $("#2pm-slot .description").val(localStorage.getItem("pm-slot"));
  $("#3pm-slot .description").val(localStorage.getItem("3pm-slot"));
  $("#4pm-slot .description").val(localStorage.getItem("4pm-slot"));
  $("#5pm-slot .description").val(localStorage.getItem("5pm-slot"));
  $("#6pm-slot .description").val(localStorage.getItem("6pm-slot"));
  $("#10pm-slot .description").val(localStorage.getItem("10pm-slot"));
  $("#11pm-slot .description").val(localStorage.getItem("11pm-slot"));
});

