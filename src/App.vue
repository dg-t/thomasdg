<template>
  <app-navigation v-if="!$route.meta.hideHeader"></app-navigation>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import appNavigation from './components/Header/TheNavigation.vue'
import appFooter from './components/Footer/TheFooter.vue'

export default {
  components: {
    appNavigation,
    appFooter
  }
}
</script>

<style>

/** GENERAL */
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

/** SECTION SEPARATOR */

.separator:before {
  display: block;
  background-color: #0af;
  content: " ";
  height: 2px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 75px;
}

/** SECTIONs COLOR */

.section-color {
  background-color: #f4f4f4;
}

/** MEDIA QUERY PROJECTS */

@media only screen and (max-width: 767px)  {

  /** GENERAL */
  html {
    font-size: 18px;
  }
}

@media only screen and (max-width: 500px)  {

  /** GENERAL */
  html {
    font-size: 16px;
  }
}

</style>
