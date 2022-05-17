let opa = document.getElementById("bottom");
let cont = document.getElementById("container");
let opavalue = opa.getAttribute('style');

cont.onclick = function on() { 
    if(opa.style.opacity == "0") {
    opa.style.opacity = "1";
    } else {
        opa.style.opacity = "0";  
    }
     };



