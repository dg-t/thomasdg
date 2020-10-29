<template>
  <!-- NavBar -->
    <div class="container">
      <nav  class="navbar navbar-expand-sm navbar-light fixed-top customized_nav" 
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
              <i class="fas fa-bars icon__toggleBtn"></i>
          </button>

          <!-- collapse navBar for smaller screens -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': show }">
            <ul class="navbar-nav" >
              <li>
                <router-link to="/" @click="toggleNavBarBtn">Home</router-link>
              </li>
              <li>
                <router-link to="/about" @click="toggleNavBarBtn">About</router-link>
              </li>
              <li>
                <router-link to="/achievements" @click="toggleNavBarBtn">Achievements</router-link>
              </li>
              <li>
                <router-link to="/contact-me" @click="toggleNavBarBtn">Contact Me</router-link>
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

.customized_nav {
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  padding-top: 25px;
  transition: all 0.6s;
}

.updateColor {
  background-color: rgb(80, 80, 80);
  padding-bottom: 10px;
  padding-top: 10px;
  transition: all 0.3s ease-out;
}

/** NAV CONTACT FORM */
.contactFormNavigation {
  background-color: #505050;
  padding: 25px 0;
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
  border-radius: 15px;
}

button:hover,
button:focus {
    outline: none;
    box-shadow: 0 0 3px 2px #0af;
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

.icon__toggleBtn {
    color:#0af;
    opacity:0.7;
    transition: opacity 0.4s;
}

.icon__toggleBtn:hover {
    opacity:1;
    transition: opacity 0.4s;
}

@media only screen and (max-width: 575px)  {

  /** NAV */
  .customized_nav {
    border-bottom: none;
    padding:0 ;
  }

  /** NAV LINKS */

  ul {
    padding: 20px 0;
  }
  a {
    transition: border-bottom 0.3s;
    opacity:0.8;
    letter-spacing: 1px;
  }
  a:hover,
  a.active {
    padding-bottom:5px;
    border-bottom: 1px solid rgb(66, 156, 252);
  }

}

</style>
