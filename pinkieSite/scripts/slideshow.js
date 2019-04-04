var slideIndex = 1;
showDivs(slideIndex, divid);

function plusDivs(n, divid) {
  showDivs(slideIndex += n, divid);
}


function showDivs(n, divid) {
  var i;
  var x = document.getElementsByClassName(divid);
    
  if (n > x.length) {slideIndex = 1};
    
  if (n < 1) {slideIndex = x.length};
    
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}