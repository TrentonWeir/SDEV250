// Author:     Trenton Weir;
// Date:       11.22.2021;


var errorDiv = document.getElementById("errorText");
var donateAmt = document.getElementById("donateAmt");
var yes = document.getElementById("PatreonYes");
var no = document.getElementById("PatreonNo");
var SignUpBTN = document.getElementById("SignUpBTN");
var submitted = document.getElementById("Submitted");
var PassedValidate = false;

var sub = document.getElementById("sub");
var SubBTN = document.getElementById("SubBTN");
var subed = document.getElementById("Subed");

//styling
errorDiv.style.color = "red";

SubBTN.addEventListener("click",function(){
    if(subed.innerHTML  == "" || sub.innerHTML == "No")
    {
        subed.innerHTML = "Yes";
    }
    else if(subed.innerHTML == "Yes")
    {
        subed.innerHTML = "No";
    }
    else
    {
        subed.innerHTML = "";
    }
    
    
});


function FormError()
{
    errorDiv.style.visibility = "visible";
    errorDiv.style.color = "red";
    errorDiv.style.backgroundColor = "rbg('200,0,0')";
}




yes.addEventListener("click",function(){
    if(yes.checked)
    {
        donateAmt.style.visibility = "visible";
    }
});
no.addEventListener("click",function(){
    if(no.checked)
    {
        donateAmt.style.visibility = "hidden";
    }
});
function formValidate(){
    if(donateAmt.style.visibility == "visible")
    {
       if(donateAmt.value == "")
       {
            donateAmt.style.backgroundColor = "rgb(255,120,120)";
            errorDiv.style.visibility = "visible"; 
       }
    }
    if(document.getElementById("Name").value == "")
    {
        document.getElementById("Name").style.backgroundColor = "rgb(255,120,120)";
        errorDiv.style.visibility = "visible";
    }
    if(document.getElementById("Email").value == "")
    {
        document.getElementById("Email").style.backgroundColor = "rgb(255,120,120)";
        errorDiv.style.visibility = "visible";
    }
    if(document.getElementById("Subject").value == "")
    {
        document.getElementById("Subject").style.backgroundColor = "rgb(255,120,120)";
        errorDiv.style.visibility = "visible";
    }
    if(document.getElementById("Message").value == "")
    {
        document.getElementById("Message").style.backgroundColor = "rgb(255,120,120)";
        errorDiv.style.visibility = "visible";
    }
    else
    {
        PassedValidate = true;
    }
}

SignUpBTN.addEventListener('click',function(){
    formValidate();
    if (PassedValidate == true)
    {   
        alert("Thank you!");
    }

});


window.addEventListener("load",function(){
    errorDiv.style.visibility = "hidden";
    donateAmt.style.visibility = "hidden";
    submitted.style.visibility = "hidden";
});

