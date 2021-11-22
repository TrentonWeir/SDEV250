


var LaunchBTN = document.getElementById("LaunchBTN");
var DateInput = document.getElementById("dateSelected");
var DateInputValue = document.getElementById("dateSelected").value;

LaunchBTN.addEventListener("click",function(){
    DateInputValue = document.getElementById("dateSelected").value;
});


function CalculateDateDifference(){
    var LDate = new Date(2023,10,01)
    var LaunchYear = LDate.getFullYear();
    var LaunchDay = LDate.getDay();
    var LaunchMonth = LDate.getMonth();
    DateInputValue = document.getElementById("dateSelected").value;




    if(DateInputValue == ""||DateInputValue == null|| DateInputValue == 0)
    {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDay();
        console.log(year +"/"+ month + "/"+day);
        year = LaunchYear - year;
        month = LaunchMonth - month;
        day = LaunchDay - day;

        document.getElementById("day").innerHTML = " Time Till Launch is " + year +" years, " +month+" Months, and "+day+"days.";


        
    }else if(DateInputValue != ""||DateInputValue != null|| DateInputValue != 0)
    {
        var Iyear = DateInputValue.slice(0,-6);
        var Imonth = DateInputValue.slice(5,-3);
        var Iday = DateInputValue.slice(8);
        var year = LaunchYear - Iyear;
        var month = LaunchMonth - Imonth;
        var day = LaunchDay - Iday;
    
        document.getElementById("day").innerHTML = " Time Till Launch is " + year +" years, " +month+" Months, and "+day+"days.";
    
    }
    console.log(Iyear);
    console.log(Imonth);
    console.log(Iday);
    console.log(DateInputValue);
    console.log(LDate);
}