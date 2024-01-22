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


// Checks if local storage exists or creates empty array for it
var events
if (localStorage.getItem("data")) {
    events = JSON.parse(localStorage.getItem("data"))
    }
    else {events = [];}

// Fills out text blocks from local storage
$(".time-block").each(function() {
var blockHour =  $(this).data("hour");
// Finds an object where hour matches time-block hour, if it exists
var correspondingEvent = events.find(function(event) {
    return event.hour === blockHour;
  });
// If object is found, sets text area to be the text from object
if (correspondingEvent)
$(this).find("textarea").val(correspondingEvent.eventText)
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
      };
    // Store input into local storage
     localStorage.setItem("data", JSON.stringify(events));
  });
});










