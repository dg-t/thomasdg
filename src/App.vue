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
      console.log(to.path.split('/').length)
      console.log(this.routesAnimation)
      if (to.path.split('/').length > 2){
        this.routesAnimation = 'project-routes'
      } else {
        this.routesAnimation = 'global-routes'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
/** GENERAL */
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

html {
  font-family: 'Pacifico', cursive;
    /* font-family: 'Lato', sans-serif; */
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

/** TRANSITION */

.global-routes-enter-active {
  animation: global-routes 1s ease-in;
}

.global-routes-leave-from {
  opacity :0;
}
/* .routes-leave-active {
  transition: all 0;
} */
/* .routes-leave-to {
  opacity :0;
} */

.project-routes-enter-active {
  animation: project-routes 1s ease-in;
}

.project-routes-leave-from {
  opacity :0;
}

@keyframes global-routes {
  from {
    opacity: 0;
    /* transform: scale(0.99); */
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
