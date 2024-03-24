// Navbar
const menuToggle = document.getElementById("menu-toggle"); // Button
const navbarLinks = document.querySelector(".navbar-links"); // Links

// Toggle menu visibility when button is clicked
menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Add active class to navbar links when on page
// The <a> elements in the links
const allLinksInNavbar = document.querySelectorAll(".navbar-links li a");

// If the href in the <a> element is the same as the current location, add .active class
for (let i = 0; i < allLinksInNavbar.length; i++) {
  if (allLinksInNavbar[i].href == document.location.href) {
    allLinksInNavbar[i].classList.add("active");
  }
};