/* For changing the active element in the nav bar */

/* Adapted from example on https://www.w3schools.com/howto/howto_js_active_element.asp */

var nav_bar = document.getElementsByTagName("nav");

var sections = nav_bar[0].getElementsByTagName("li");

for (var i = 0; i < sections.length; i ++){
    
    sections[i].addEventListener("click", function() {
        
        var current = getCurrent();
        
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}

function getCurrent() {
    return document.getElementsByClassName("active");
}