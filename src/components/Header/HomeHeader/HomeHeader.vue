<template>
  <header class="container-fluid">
    <app-heading></app-heading>
  </header>
</template>

<script>
import appHeading from "./HomeHeaderHeading.vue"

export default {
  components: {
    appHeading
  }
}
</script>

<style scoped>

header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(../../../assets/header/home.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
}

@media only screen and (max-width: 1024px) {
  header {
    background-attachment: scroll;
  }
}

</style>
