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
    var blockHour =  $(this).data("hour");
  $(this).find(".saveBtn").on("click", function() {
    var input = $(this).siblings("textarea").val();
    // converts to string and saves into localstorage
    var localStorageObject = {
        time: blockHour,
        text: input,
    }
    localStorage.setItem("data", JSON.stringify(localStorageObject))
  });
});











