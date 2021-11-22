var selection =document.getElementById("dateSelected");
var result =document.getElementById("day");
var allDaysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var selectedDate;
var dayOfWeekNumber;
var dayOfWeekName;

function lookUpDay()
{
    selectedDate = newDate(selection.value);
    selectedDate.setUTCHours(12);
    dayOfWeekNumber = selectedDate.getUTCDay();
    dayOfWeekName = allDaysOfWeek[dayOfWeekNumber];
    result.value = dayOfWeekName;
}
function createEventListener()
{
    var submitButton =document.getElementById("determineDay");
    if (submitButton.addEventListener)
    {
        submitButton.addEventListener("click", lookUpDay, false);
    }
    else if(submitButton.attachEvent)
    {
        submitButton.attachEvent("onclick", lookUpDay);
    }
    document.getElementById("dateSelected").value ="";
    document.getElementById("day").innerHTML ="";
}
if (window.addEventListener)
{
    window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent)
{
    window.attachEvent("onload", createEventListener);
}
