increasebutton = document.getElementById("increasebutton");  
increasestuff = document.getElementById("fonttoincrease");
everestincrease = document.getElementById("everestfloat");
joeincrease = document.getElementById("rohdequote");
increasebutton.addEventListener("click", onButtonClick);
decreasebutton = document.getElementById("decreasebutton");  
decreasebutton.addEventListener("click", onButtonClick2);
function onButtonClick() {    
    increasestuff.style.fontSize = "1.5em";
    everestincrease.style.width = "195px";
    joeincrease.style.width = "225px";
}
function onButtonClick2() {    
    increasestuff.style.fontSize = "";
    everestincrease.style.width = "";
    joeincrease.style.width = "";
}