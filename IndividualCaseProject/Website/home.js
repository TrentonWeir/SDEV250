const identifierBTN = document.getElementById("homeBTN");
pageIdentifier();

identifierBTN.addEventListener('mouseover',function(){
identifierBTN.style.backgroundColor = "orange";

});
identifierBTN.addEventListener('mouseout',function(){
    pageIdentifier();
});

function pageIdentifier(){
    identifierBTN.style.backgroundColor = "gray";
}

