increasebutton = document.getElementById("increasebutton");  
increasestuff = document.getElementById("fonttoincrease");
everestincrease = document.getElementById("everestfloat");
joeincrease = document.getElementById("rohdequote");
increasebutton.addEventListener("click", onButtonClick);
decreasebutton = document.getElementById("decreasebutton");  
decreasebutton.addEventListener("click", onButtonClick2);
amodetxt = document.getElementById("amodetxt");  
bmodetxt = document.getElementById("bmodetxt");
function onButtonClick() {    
    increasestuff.style.fontSize = "1.25em";
    everestincrease.style.width = "195px";
    joeincrease.style.width = "225px";
    amodetxt.style.paddingBottom = "5%";
    bmodetxt.style.paddingBottom = "5%";
}
function onButtonClick2() {    
    increasestuff.style.fontSize = "";
    everestincrease.style.width = "";
    joeincrease.style.width = "";
    amodetxt.style.paddingBottom = "";
    bmodetxt.style.paddingBottom = "";
}