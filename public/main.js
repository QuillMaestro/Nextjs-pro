var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar2");
var navbar1 = document.getElementById("navbar1");
var pageHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // User is scrolling up
    navbar.classList.remove("is-sticky");
    navbar1.style.position = "absolute";
  } else {
    // User is scrolling down
    if (currentScrollPos >= pageHeight) {
      // Reached or passed the specified scroll position, remove class
      navbar.classList.remove("scrolled");
      navbar.classList.add("is-sticky");
      navbar1.style.position = "fixed";
      
    } else {
      // Scroll position is within the specified range, add class
      navbar.classList.add("is-sticky");
      navbar1.style.position = "fixed";
    }
  }

  prevScrollpos = currentScrollPos;
});