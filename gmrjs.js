increasebutton = document.getElementById("increasebutton");  
increasestuff = document.getElementById("fonttoincrease");
increasebutton.addEventListener("click", onButtonClick);
decreasebutton = document.getElementById("decreasebutton");  
decreasebutton.addEventListener("click", onButtonClick2);
prebreak = document.getElementById("prebreaktxt");  
postbreak = document.getElementById("postbreaktxt");
gmrincrease = document.getElementById("gmrfloat");
function onButtonClick() {    
    increasestuff.style.fontSize = "1.25em";
    prebreaktxt.style.paddingBottom = "5%";
    postbreaktxt.style.paddingBottom = "7.5%";
    gmrincrease.style.width = "165px";
}
function onButtonClick2() {    
    increasestuff.style.fontSize = "";
    prebreaktxt.style.paddingBottom = "";
    prebreaktxt.style.paddingBottom = "";
    gmrincrease.style.width = "";
}