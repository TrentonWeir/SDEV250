// Author:     Trenton Weir;
// Date:       11.18.2021;

var formValidaty = true;

function validateRequired()
{
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;

    try
    {
        for(var i = 0; i < elementCount; i++)
        {
            currentElement = inputElements[i];
            if(currentElement.value ==="")
            {
                currentElement.style.background = "rgb(255,255,233)";
                requiredValidity = false;
            }
            else
            {
                currentElement.style.background = "white";  
            }

        }
        if(requiredValidity===false)
        {
            throw "Please complete all fields.";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }   
    catch(msg)
    {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidaty = false;
        
    }
}