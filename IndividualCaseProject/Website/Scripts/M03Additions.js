const email = document.getElementById("Email").value;
const name = document.getElementById("Name").value;
const subject = document.getElementById("Subject").value;
const message = document.getElementById("Message").value;



function validate(){
    if(name == ""){
        
        window.alert("Please enter your contact name.");
    }
    if (email == ""){
        
        window.alert("Please Enter an Email Address so we can reply to you.");
    }
    if (subject == ""){
        
        window.alert("A Subject must be entered.");
    }
    if (message == ""){
        
        window.alert("Please enter a message.");
    }
    else{
        window.alert("Message was sent successfully."); 
    }
    
    
}