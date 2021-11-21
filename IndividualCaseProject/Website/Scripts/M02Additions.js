let one = document.querySelector('valueOne');
let two = document.querySelector('valueTwo');
console.log(one);
console.log(two);



const addition = document.getElementById('add');
const sububtraction = document.getElementById('sub');
const divison = document.getElementById('div');
const multiplication = document.getElementById('mul');

addition.addEventListener('change',function(){
    add();
});
addition.addEventListener('click',function(){
    add();
});
sububtraction.addEventListener('change',function(){
    sub();
});
divison.addEventListener('change',function(){
    div();
});
multiplication.addEventListener('change',function(){
    mul();
});



function add(){
    let result = one+two;
    document.getElementById('result').textContent = result;
}
function sub(){
    let result = one-two;
    document.getElementById('result').textContent = result;
}
function sub(){
    let result = one/two;
    document.getElementById('result').textContent = result;
}
function mul(){
    let result = one*two;
    document.getElementById('result').textContent = result;
}



 // resets form when page is reloaded
// window.addEventListener("load", /*Function ,*/ false);