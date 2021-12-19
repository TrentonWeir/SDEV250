// JavaScript 6th Edition
// Chapter 12
// Hands-on Project 12-1

// Author: Trenton Weir
// Date:   12.15.2021

// Filename: index.htm

function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);