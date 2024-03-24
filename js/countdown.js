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