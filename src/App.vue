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

/** LINK BACK TO PROJECT */

.project_btn_container {
  height: 180px;
  position: relative;
}

.project_btn {
  padding: 5px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 85%;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  background-color: white;
  color: #07c;
  border: 1px solid #0af;
  border-radius: 5px;
  box-shadow: 1px 2px 2px  #888888;
  text-decoration: none !important;
}

.project_btn:hover {
  color: white !important;
  background-color: #0af;
  transition: all 0.5s ease;
}


/* @media only screen and (max-width: 767px)  {

} */
</style>
