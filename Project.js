var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onload = function () {
  document.getElementsByClassName('nav-menu')[0].scrollLeft = 0;
  var menus = document.getElementsByClassName('nav-menu__item');
  for (var i = 0; i < menus.length; i++) {
      if (menus[i].classList.contains('active')) {
          document.getElementsByClassName('nav-menu')[0].scrollLeft = menus[i].offsetLeft;
      }
  }
}
