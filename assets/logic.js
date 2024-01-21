
// Checks if local storage exists or creates empty array for it
var events
if (localStorage.getItem("events")) {
    events.JSON.parse(localStorage.getItem("events"))
    }
    else {events = [];}


// Loads dayjs advanced plugin for proper "Do" date display
dayjs.extend(window.dayjs_plugin_advancedFormat);


// Displays current date in element
var now = dayjs()
var currentDate = now.format("dddd MMMM [the] Do")
$("#currentDay").text(currentDate)


// Gets current time
var currentTime = dayjs().format('HH');

// Updates block color based on current time
$(".time-block").each(function() {
 var blockHour =  $(this).data("hour");

if (blockHour > currentTime) {
    $(this).find("textarea").removeClass("past present").addClass("future");
}
else if (blockHour == currentTime) {
    $(this).find("textarea").removeClass("past future").addClass("present");
    }
else if (blockHour < currentTime) {
    $(this).find("textarea").removeClass("present future").addClass("past");
}
}) 


// saves input when user types into time block
$(".time-block").each(function() {
  $(this).find(".saveBtn").on("click", function() {
    var input = $(this).siblings("textarea").val();
    var blockHour = $(this).parent().data("hour");

    // Finds the index of existing hour object or -1 if none found
    var existingEventIndex = events.findIndex(function(event) {
        return event.hour === blockHour;
      });
    // If no existing hour object is found, add it
      if (existingEventIndex === -1) {
        events.push({ hour: blockHour, eventText: input });
      }
    // Else, if existing hour object is found, update it's text content
      else {
        events[existingEventIndex].eventText = input
      }






    // localStorage.setItem("data", JSON.stringify(events))
  });
});


// var savedLocalStorageString = localStorage.getItem("data")
// var retrievedArrayOfObjects = JSON.parse(savedLocalStorageString)
// console.log(retrievedArrayOfObjects)










