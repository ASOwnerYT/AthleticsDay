/*
 * Back to top button
 */

// Trigger handleScroll() on scroll
window.addEventListener("scroll", handleScroll);

const button = document.getElementById("backToTopButton"); // Back to top button
let showButton = false; // Hidden by default

// If window is not scrolled to top, show button
function handleScroll() {
  showButton = window.scrollY; // scrollY is 0 when page is scrolled to top

  if (showButton) {
    button.classList.add("show"); // Show
  } else {
    button.classList.remove("show"); // Hide
  }
}

// Scroll to top on click
button.onclick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};