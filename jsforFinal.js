increasebutton = document.getElementById("increasebutton");  
increasestuff = document.getElementById("fonttoincrease");
everestincrease = document.getElementById("everestfloat");
joeincrease = document.getElementById("rohdequote");
increasebutton.addEventListener("click", onButtonClick);
function onButtonClick() {    
    increasestuff.style.fontSize = "1.5em";
    everestincrease.style.width = "195px";
    joeincrease.style.width = "225px";
}