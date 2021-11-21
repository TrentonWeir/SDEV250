Clock = document.getElementById('clock');
function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('clock').innerHTML="Current Time:  "+h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
}
function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
function checkHours(i){
    if(i>12){
        i = i - 12;
            if(i<10){
                i = "0"+i;
            }
    }
    return i;
    
}
startTime();

function GetBreakTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m+10;
    if(m > 59){
        h=h+1;
        m=m-60;
    }
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('content').innerHTML="Ends: " + h + ":" + m;
    // t=setTimeout('GetBreakTime()',500);


}
function GetThirty(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m+30;
    if(m > 59){
        h=h+1;
        m=m-60;
    }
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('content').innerHTML="Ends: " + h + ":" + m;
    // t=setTimeout('GetBreakTime()',500);

}
function GetHour(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h=h+1;
    if(m > 59){
        h=h+1;
        m=m-60;
    }
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('content').innerHTML="Ends: " + h + ":" + m;
    // t=setTimeout('GetBreakTime()',500);

}
function GetWorkTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h=h+8;
    if(m > 59){
        h=h+1;
        m=m-60;
    }
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    if(h>12){h=h-12}
    if(h<=9){h="0"+h}
    document.getElementById('content').innerHTML="Ends: " + h + ":" + m;
    // t=setTimeout('GetBreakTime()',500);

}
function GetLunchTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = h+1
    // make h not military time
    h=checkHours(h);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('content').innerHTML="Ends: " + h + ":" + m;
    // t=setTimeout('GetBreakTime()',500);
    document.getElementById('onBreak').innerHTML="On Lunch";

}
var input = "Error:001:Try Again";
function SuperATV(){
    document.getElementById('content').innerHTML= "SuperATV";
    document.getElementById('onBreak').innerHTML="";


}
function Input(){
    inputLoop();
    var checkInput = confirm("Is the time "+input+" Correct?");
    if(checkInput==true){
        document.getElementById('content').innerHTML= input;
    }else{Input();}


}
function inputLoop(){
    input = window.prompt('Enter your Display Message: ____');

}



const content = document.getElementById('content');
const onBreak = document.getElementById('onBreak');
const StartingColor = 152;
let MaxHSL = StartingColor;
let counter = 0;

function ColorRaise(){
    let h = MaxHSL;
    let h2 = MaxHSL-100;
    let s = 100;
    let l = 50;
    content.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
    onBreak.style.color = `hsl(${h2}deg, ${s}%, ${l}%)`;
    date.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
    Clock.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
    MaxHSL++;
    counter++;

}
function ColorLower(){

    if (counter < 60){
        let h = MaxHSL;
        let h2 = MaxHSL-100;
        let s = 100;
        let l = 50;
        content.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
        onBreak.style.color = `hsl(${h2}deg, ${s}%, ${l}%)`;
        date.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
        Clock.style.color = `hsl(${h}deg, ${s}%, ${l}%)`;
        MaxHSL--;
        counter++;
    }else{
        counter = 0;
        MaxHSL = StartingColor;

    }


}
/*Function that calls ColorRaise and Lower
 counter = StartingColor(HSL#) - EndingColor(theLargestHSL you want) / 2;
 if you want 150 and 300 then counter < 75 and 150

*/
function ChangeColor(){

    if (counter < 30){
        ColorRaise();
    }
    else{
        ColorLower();
    }
}

//Date construction
const date = document.getElementById("date");
function SetDate(){
    let DayOfMonth = new Date().getDate();
    let Month = new Date().getMonth() + 1;
    let Year = new Date().getFullYear();
    //console.log(Month + ':' + DayOfMonth + ":" + Year);
    date.innerHTML= "Current Date:: "+Month+"/"+DayOfMonth+"/"+Year;
}SetDate();

setInterval(() => {
    ChangeColor();
}, 20);
