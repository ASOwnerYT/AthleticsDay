/*
 * Menu
 */

const menuToggle = document.getElementById("menu-toggle"); // Button
const navbarLinks = document.querySelector(".navbar-links"); // Links

// Toggle active class when button is clicked
menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

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

/*
 * Countdown
 */

const countdownText = document.getElementById("countdown");

// Date & time of event
let athelticsDayDate = new Date("Feb 16, 2025 9:00:00").getTime();

function updateCountdown() {
  // Current date & time
  let currentTime = new Date().getTime();

  // Time until Athletics Day
  let distance = athelticsDayDate - currentTime;

  // Convert to readable format
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Set countdown text
  if (distance < 0) {
    // Expired
    clearInterval(updateCountdown); // Stop from updating
    countdownText.innerText = "EXPIRED"; // Set text
  } else {
    countdownText.innerText =
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s " +
      "until Athetics Day ";
  }
}

setInterval(updateCountdown, 1000);

/*
Forms
I have moved this to the <script> tags in formsubmit.html because
1. the javascript is only for formsubmit.html, it doesnt need to affect any other page
2. it doesnt work if i put it here (i have no idea why)
*/
