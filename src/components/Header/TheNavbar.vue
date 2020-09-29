<template>
  <!-- NavBar -->
    <div class="container">
      <nav  class="navbar navbar-expand-md navbar-light pt-3 fixed-top" 
            :class="{updateColor: scrollWindow > 10 || show  }">
          <button 
              class="navbar-toggler bg-white"
              :class="show == true ? 'btnOpen' : 'btnClose' " 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              @click="toggleNavBarBtn"
              >
              <i class="fas fa-bars toggleBtn"></i>
          </button>

          <!-- collapse navBar for smaller screens -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': show }">
            <ul class="navbar-nav" >
              <li @click="selectComponent('AppHome')" >
                <a href="#" :class="{active: component == 'AppHome'}">Home</a>
              </li>
              <li @click="selectComponent('MyAbout')">
                <a href="#" :class="{active: component == 'MyAbout'}" >About Me</a>
              </li>
              <li @click="selectComponent('MyAchievements')">
                <a href="#" :class="{active: component == 'MyAchivement'}">My Achievements</a>
              </li>
              <li @click="selectComponent('MyContact')">
                <a href="#" :class="{active: component == 'MyContact'}">Contact Me</a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
</template>

<script>
export default {
    props: ["component"],
    emits: ["switch-component"],
  data() {
    return {
      show: false,
      scrollWindow: null
    }
  },
  methods: {
    toggleNavBarBtn() {
      this.show = !this.show
    },
    isScrolled() {
      this.scrollWindow = window.scrollY
    },
    selectComponent(cmp) {
        this.$emit("switch-component", cmp);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.isScrolled)
  }
}
</script>

<style scoped>

/** TODO - Delete border bottom for Mobile device */

nav {
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  padding-top: 25px;
  transition: padding 0.6s;
}

li {
  padding: 2% 6%;
  white-space: nowrap;
}

a {
  font-weight: 200;
  font-size: 80%;
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  transition: border-bottom 0.3s;
  opacity:0.8;
}

a:hover {
  padding-bottom:10px;
  border-bottom: 2px solid rgb(66, 156, 252);
  
}

.active {
  opacity: 1;
  font-weight: 300;
}

.btnClose {
  position: absolute; 
  right:25px; 
  top: 60px;
  transition: top 1s;
}

.btnOpen {
  position: absolute; 
  right:25px; 
  top: 25px;
  transition: top 1s;
}

.updateColor {
  background-color: rgb(80, 80, 80);
  padding-bottom: 10px;
  padding-top: 10px;
}

button {
    outline: none;;
}

.toggleBtn {
    color:rgb(66, 156, 252);
    opacity:1;
    transition: opacity 0.4s;
}

.toggleBtn:hover {
    opacity:0.5;
    transition: opacity 0.4s;
}
</style>
