window.onscroll = function() {myFunction()};
window.sr = ScrollReveal({ duration: 1000 });
sr.reveal('.well')
sr.reveal('.tags')
sr.reveal('.btn')
sr.reveal('.title')
sr.reveal('#nav')

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  
  var navbar = document.getElementById("nav");
  
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}