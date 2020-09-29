<template>
  <app-header @switch-component="toggleComponents" :component="selctedComponent"></app-header>
  <component :is="selctedComponent"></component>

</template>

<script>
import AppHome from './components/HomePage.vue'
import MyContact from './components/ContactMe.vue'
import MyAbout from './components/AboutMe.vue'
import MyAchievements from './components/MyAchievements.vue'
import appHeader from './components/Header/TheHeader.vue'

export default {
  data() {
    return {
      selctedComponent: "AppHome"
    }
  },
  components: {
    appHeader,
    AppHome,
    MyContact,
    MyAbout,
    MyAchievements
  },
  methods: {
    toggleComponents(cmp) {
      this.selctedComponent = cmp;
    }
  }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

html {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
}
</style>
