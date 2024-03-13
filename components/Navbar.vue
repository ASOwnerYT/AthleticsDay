<script setup>
import { ref } from "vue";

// Mobile drop-down menu is hidden by default
const showMenu = ref(false);

// Show/hide mobile drop-down menu
function toggleMenu() {
  showMenu.value = !showMenu.value;
}

// Countdown text
const countdown = ref("");

let athelticsDayDate = new Date("Jan 5, 2030 15:37:25").getTime();

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
    countdown.value = "EXPIRED"; // Set text
  } else {
    countdown.value =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}

// TODO: fix
onBeforeMount(() => {
  setInterval(updateCountdown(), 1000);
});
</script>

<template>
  <nav id="navbar">
    <div class="container main">
      <div class="navbar-header">
        <div>
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" id="logo" height="32px" alt="Logo" />
          </NuxtLink>
        </div>

        <button class="menu-icon" @click="toggleMenu">
          <v-icon name="hi-menu" scale="1.5"></v-icon>
        </button>
      </div>
      <ul class="navbar-links" :class="{ active: showMenu }">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/winners">Winners Podium</NuxtLink></li>
        <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
    <client-only>
      <div class="container countdown">
      <p>{{ countdown }}</p>
    </div>
    </client-only>
  </nav>
</template>

<style scoped>
nav {
  /* Make navbar stay at top of screen (static) */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* Make sure the navbar stays on top of other elements */

  color: white;
  background-color: var(--accent);

  transition: background-color var(--transition);
}

/* Reset default styling on lists */
nav .container ul {
  list-style-type: none;
}

/* Position nav items correctly */
nav .container li {
  display: inline;
}

/* Padding betweeen nav items */
nav .container li:not(:last-of-type) {
  padding-right: 1rem;
}

/* Reset default styling on links */
nav .container li a {
  color: inherit;
  text-decoration: none;
}

/* Underline links on hover */
nav .container li a:hover {
  text-decoration: underline;
}

/* Make active link bold */
.router-link-exact-active {
  font-weight: bold;
}

.menu-icon {
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

#navbar .container.countdown {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: red;
}

#navbar .container.countdown p {
  margin-bottom: 0;
}

/* Add styles for mobile view */
@media (max-width: 500px) {
  .navbar-links {
    display: none;
    flex-direction: column;
    background-color: var(--accent);

    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 99;

    font-size: 1rem;
  }

  .navbar-links {
    padding-left: 20px;
    padding-right: 20px;
  }

  .navbar-links li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .navbar-links.active {
    display: flex;
  }

  .navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* Styles for desktop view */
@media (min-width: 501px) {
  .navbar-links {
    display: flex;
    flex-direction: row;
  }

  .menu-icon {
    display: none;
  }

  #navbar .container.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.navbar-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
