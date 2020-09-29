<template>
  <header class="container-fluid">
    <app-navbar :component="component" @switch-component="selectComponent"></app-navbar>
    <app-heading></app-heading>
  </header>
</template>

<script>
import appNavbar from "./TheNavbar.vue"
import appHeading from "./TheHeading.vue"

export default {
    props: ["component"],
    emits: ["switch-component"],
  components: {
    appNavbar,
    appHeading
  },
  methods: {
    selectComponent(cmp) {
        this.$emit("switch-component", cmp);
    }
  }
}
</script>

<style scoped>

header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(../../assets/header/jetty.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
}

</style>
