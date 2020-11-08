<template>

  <section class="container-fluid p-0 m-0">

    <home-header></home-header>
    <base-heading class="custom_heading">Imagine it, design it, create it!</base-heading>
    <home-features></home-features>
    <home-tech></home-tech> 
    <home-skills></home-skills>

  </section>

</template>

<script>
import HomeHeader from '../Header/HomeHeader/HomeHeader.vue'
import HomeFeatures from './HomeSections/HomeFeatures.vue'
import HomeTech from './HomeSections/HomeTechs.vue'
import HomeSkills from './HomeSections/HomeSkills.vue'

export default {
  components: {
    HomeHeader,
    HomeFeatures,
    HomeTech,
    HomeSkills
  }
}
</script>

<style scoped>

section {
  max-width: 100%;
  overflow-x: hidden;
}

</style>
