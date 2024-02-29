<script setup>
  defineProps({
    images: Array
  })
</script>

<template>
  <div class="card">
    
  </div>
</template>

<style scoped>
.card {
  background-image: url("/home/carousel/2023_06_21_boysfootball2jpg.jpg");
  background-size: cover;
  background-position: center;
  height: 350px;
}

@media screen and (min-width: 480px) {
  .card {
    height: 480px;
  }
}
</style>
