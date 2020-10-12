<template>
  <section class="container-fluid p-0 m-0">
    <home-header></home-header>
    <home-heading></home-heading>
    <home-features></home-features>
    <home-tech></home-tech> 
  </section>
</template>

<script>
import HomeHeader from './HomeHeader/HomeHeader.vue'
import HomeHeading from './HomeHeading.vue'
import HomeFeatures from './HomeSections/HomeFeatures.vue'
import HomeTech from './HomeSections/HomeTechs.vue'

export default {
  components: {
    HomeHeader,
    HomeHeading,
    HomeFeatures,
    HomeTech
  }
}
</script>

<style scoped>

section {
  max-width: 100%;
  overflow-x: hidden;
}

</style>
