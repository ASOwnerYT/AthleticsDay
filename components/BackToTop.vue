<script setup>
import { ref, onBeforeMount } from "vue";

onBeforeMount(() => {
  // Trigger handleScroll() on scroll
  window.addEventListener('scroll', handleScroll)
})

const showButton = ref(false);

function handleScroll() {
  // Show button if window is not scrolled all the way to the top
  showButton.value = window.scrollY;
}

// Scroll to top on click
function handleClick() {
  window.scrollTo(0,0);
}

</script>

<template>
  <client-only>
    <button @click="handleClick" class="backToTopButton" :class="{ hidden: !showButton }"><v-icon name="hi-arrow-sm-up" size="1.5x"></v-icon></button>
  </client-only>
</template>

<style scoped>
  .backToTopButton {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    z-index: 1000;
    border-radius: 100%;
    border: none;
    margin: 0;
    text-decoration: none;
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
    background-color: lightblue;
    opacity: 100%;
    transition: opacity 0.5s;
  }

  .hidden {
    opacity: 0%;
  }
</style>
