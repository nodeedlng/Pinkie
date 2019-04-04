/*eslint-env browser*/

/* For changing the active element in the nav bar */

/* Adapted from example on https://www.w3schools.com/howto/howto_js_active_element.asp */

var nav_bar = document.getElementsByTagName("nav");

var sections = nav_bar[0].getElementsByTagName("li");

for (var j = 0; j < sections.length; j ++){
    
    sections[j].addEventListener("click", function() {
        
        var current = getCurrent();
    
        //Hide if section not active
        hide(current[0].id + "container");
        
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        
        //Show if section active
        show(current[0].id + "container");
    });
}


var unitnav = document.getElementById("unitnav");

var unitsections = unitnav.getElementsByTagName("li");

for (var i = 0; i < unitsections.length; i ++) {
    
    unitsections[i].addEventListener("click", function() {
        
        var currentunit = document.getElementsByClassName("activeunit");
        
        document.getElementById(currentunit[0].id.substring(0, currentunit[0].id.length - 3)).style.display = "none";
        
        currentunit[0].className = currentunit[0].className.replace("activeunit", "");
        this.className += "activeunit";
        
        document.getElementById(currentunit[0].id.substring(0, currentunit[0].id.length - 3)).style.display = "inherit";
       
    });
}


var formationnav = document.getElementById("formationnav");

var formationsections = formationnav.getElementsByTagName("li");

for (var k = 0; k < formationsections.length; k ++) {
    
    formationsections[k].addEventListener("click", function() {
        
        var currentformation = document.getElementsByClassName("activeformation");
        
        document.getElementById(currentformation[0].id.substring(0, currentformation[0].id.length - 3)).style.display = "none";
        
        currentformation[0].className = currentformation[0].className.replace("activeformation", "");
        this.className += "activeformation";
        
        document.getElementById(currentformation[0].id.substring(0, currentformation[0].id.length - 3)).style.display = "inherit";
       
    });
}



function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "inherit";
}

function getCurrent() {
    return document.getElementsByClassName("active");
}