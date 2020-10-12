<template>
  <app-navigation v-if="!$route.meta.hideHeader"></app-navigation>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import appNavigation from './components/Navigation/TheNavigation.vue'
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

/** LINKS */

.link_customized {
  display: inline-block;
  position:relative;
}

.link_customized::after {
  display:block;
  content: '';
  border-bottom: solid 1px #0af;  
  transform: scaleX(0);  
  transition: transform 0.5s ease-in-out;
  transform-origin:bottom right;
  /* transform-origin:100% 50%; */
}
.link_customized:hover:after { 
  transform: scaleX(1);
  transform-origin:bottom left;
}

</style>
