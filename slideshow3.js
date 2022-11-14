/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/
//works with multiple slideshows per page
let slideIndex = [1,1,1];
let slideId = ["mySlides", "mySlides2","mySlides3"]
let dotId = ["dot1", "dot2", "dot3"]
//showSlides(1, 0);
//showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

/*
function currentSlide(e, n) {
  console.log(e.className.split(" ")[0]);
  //showSlides(slideIndex[no] = n, no);
}*/



function initSlides(){
  let i;
  for(let no = 0; no<slideId.length; no++){
    /*let x = document.getElementsByClassName(slideId[no]);
    if(x.length>0){
      var dots = document.getElementsByClassName(dotId[no]);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      x[slideIndex[no]-1].style.display = "block";
      
      dots[slideIndex[no]-1].className += " active";  
    }*/
    slideIndex[no]=1;
    showSlides(1,no);
  }
}


function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  //console.log(dots);
  if(x.length>0){
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex[no]-1].style.display = "block";
    
    dots[slideIndex[no]-1].className += " active";  
  }
}