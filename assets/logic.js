// Loads dayjs advanced plugin for proper "Do" date display
dayjs.extend(window.dayjs_plugin_advancedFormat);


// Displays current date in element
var now = dayjs()
var currentDate = now.format("dddd MMMM [the] Do")
$("#currentDay").text(currentDate)


// gets current time
var currentTime = dayjs().format('HH');


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

