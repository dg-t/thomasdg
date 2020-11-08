<template>

  <app-navigation v-if="!$route.meta.hideHeader"></app-navigation>
  
    <router-view v-slot="slotProps">
      <transition :name="routesAnimation" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  
  <app-footer></app-footer>

</template>

<script>
import appNavigation from './components/Header/TheNavigation.vue'
import appFooter from './components/Footer/TheFooter.vue'

export default {
  data() {
    return {
      routesAnimation: ''
    }
  },
  components: {
    appNavigation,
    appFooter
  },
watch: {
    '$route' (to) {
      // console.log(this.$router.options.routes[1])
      if (to.path == '/achievements/restaurant-reviews' || 
          to.path == '/achievements/cat-facts' ||
          to.path == '/achievements/ninja-fight' ||
          to.path == '/achievements/film-festival' ||
          to.path == '/achievements/dice-game' ||
          to.path == '/achievements/quote-generator' ||
          to.path == '/achievements/testing-todo-app' ||
          to.path == '/achievements/express-food') {
        this.routesAnimation = 'project-routes'
      } else {
        this.routesAnimation = 'global-routes'
      }
    }
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
    font-family: 'Lato', sans-serif;
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

/** TRANSITION GLOBAL ROUTES*/

.global-routes-enter-active {
  animation: global-routes 1s ease-in;
}

.global-routes-leave-from {
  opacity :0;
}

/** TRANSITION PROJECTS ROUTES*/
.project-routes-enter-active {
  animation: project-routes 1s ease-in;
}

.project-routes-leave-from {
  opacity :0;
}

/** ANIMATION */

@keyframes global-routes {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes project-routes {
  from {
    opacity: 0;
    /* transform: scale(0.99); */
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
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
