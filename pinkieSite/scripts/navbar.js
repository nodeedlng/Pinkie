/* For changing the active element in the nav bar */

/* Adapted from example on https://www.w3schools.com/howto/howto_js_active_element.asp */

var nav_bar = document.getElementsByTagName("nav");

var sections = nav_bar[0].getElementsByTagName("li");

for (var i = 0; i < sections.length; i ++){
    
    sections[i].addEventListener("click", function() {
        
        var current = getCurrent();
    
        //Hide if section not active
        hide(current[0].id + "content");
        
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        
        //Show if section active
        show(current[0].id + "content");
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