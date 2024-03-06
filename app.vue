<template>
  <div>
    <!-- Footer (shared on all pages)
    Located in /components/BackToTop.vue -->
    <BackToTop />

    <!-- Navbar (shared on all pages) 
    Located in /components/Navbar.vue -->
    <Navbar />

    <!-- The page content is automaticially inserted here by Nuxt. 
      For example, the HTML inside the <template> tag of pages/index.vue will be inserted here -->
    <NuxtPage />

    <!-- Footer (shared on all pages)
    Located in /components/Footer.vue -->
    <Footer />
  </div>
</template>

<style>
/* 
* Styles that are applied to ALL pages go here
*/

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&display=swap");

/* Reset default margin/padding */
* {
  margin: 0;
  padding: 0;
}

/*
* Body (root)
*/
:root {
  /* Fonts */
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  /* 
  These are variables that can be used anywhere in the CSS
  Example of usage: background-color: var(--bg-light);
  In this example the background would be white as --bg-light is set to white here
  */

  /* Accent colour*/
  --accent: #034ea2;

  /* Spacing */
  --section-spacing: 6rem;
  --spacing: 3rem;

  /* Misc */
  --transition: 0.2s ease-in-out;
}

/* 
* Typography 
*/
h1,
h2 {
  font-family: "Nunito", sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

@media screen and (min-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }
}

p,
.text ul {
  margin-bottom: 1rem;
}

/* Add margin to lists */
.text ul {
  margin-left: 1.5rem;
}

/* Links */
a,
[role="link"] {
  color: var(--accent);

  text-decoration: none;
  -webkit-text-decoration: none;
}

/* Underline links when hovered */
a:hover,
[role="link"] {
  text-decoration: underline;
  -webkit-text-decoration: underline;
}

/*
* Constrained container
* This centeres elements horizontally and constrains the width so that elements are aligned (like a margin)
*/
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
}

/* Desktop */
@media (min-width: 920px) {
  .container {
    padding-left: 70px;
    padding-right: 70px;
  }
}

/*
* Misc styling
*/
.rounded {
  border-radius: 0.5rem;
}

.shadow {
  box-shadow: 0px 0px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 24px -12px rgba(0, 0, 0, 0.5);

  transition:
    box-shadow var(--transition),
    -webkit-box-shadow var(--transition);
}

/* Section */
section {
  margin-bottom: var(--spacing);
}
</style>
