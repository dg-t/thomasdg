<template>
  <!-- NavBar -->
    <div class="container">
      <nav  class="navbar navbar-expand-md navbar-light pt-3 fixed-top" 
            :class="[{updateColor: scrollWindow > 10 || show  }, {contactFormNavigation: $route.meta.headerSection  }]">
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
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/achievements">Achievements</router-link>
              </li>
              <li>
                <router-link to="/contact-me">Contact Me</router-link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.isScrolled)
  }
}
</script>

<style scoped>

/** TODO - Delete border bottom for Mobile device */

/** NAV */

nav {
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  padding-top: 25px;
  transition: padding 0.6s;
}

.contactFormNavigation {
  background-color: #505050;
  padding-bottom: 25px;
  padding-top: 25px;
}

.updateColor {
  background-color: rgb(80, 80, 80);
  padding-bottom: 10px;
  padding-top: 10px;
}

/** NAV LINKS */

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
  letter-spacing: 1px;
}

a:hover,
a.active {
  padding-bottom:10px;
  border-bottom: 2px solid rgb(66, 156, 252);
}

a.router-link-active,
li {
  opacity: 1;
  font-weight: 245;
}

/** TOGGLE BUTTON */

button {
    outline: none;
}

button:hover {
    border: 1px solid #0af;
}

.btnClose {
  position: absolute; 
  right:25px; 
  top: 60px;
  transition: all 1s ease;
}

.btnOpen {
  position: absolute; 
  right:25px; 
  top: 25px;
  transition: all 1s ease;
}

.toggleBtn {
    color:#0af;
    opacity:0.7;
    transition: opacity 0.4s;
}

.toggleBtn:hover {
    opacity:1;
    transition: opacity 0.4s;
}

</style>
