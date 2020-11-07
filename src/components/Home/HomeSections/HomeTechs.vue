<template>

  <section class="container-fluid p-0 m-0 text-center">

    <base-heading>Some of the technologies I use...</base-heading>
    
    <div class="row icon_container">
      <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__fadeInTopLeft'" class="animate__animated"
                  :leave-active-class="innerWidth <= 767 ? 'animate__fadeOut': 'animate__fadeOutTopLeft'" mode="out-in">
        <div class="col-6 col-md-4 mb-md-5" v-if="showFirst">
            <img src="../../../assets/icons/skills_techs/html_icon.svg" alt="html icon">
        </div>
      </transition>
        <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__flip'" class="animate__animated"
                    leave-active-class="animate__fadeOut"  mode="out-in">
          <div class="col-6 col-md-4 mb-md-5" v-if="showFirst">
            <img src="../../../assets/icons/skills_techs/vue_icon.svg" alt="vue icon">
          </div>
        </transition>
        <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__fadeInTopRight'" class="animate__animated"
                    :leave-active-class="innerWidth <= 767 ? 'animate__fadeOut': 'animate__fadeOutTopRight'" mode="out-in">
          <div class="col-6 col-md-4 mb-md-5" v-if="showFirst">            
            <img src="../../../assets/icons/skills_techs/javascript_icon.svg" alt="js icon">
          </div>
        </transition>
        <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__fadeInBottomLeft'" class="animate__animated"
                    :leave-active-class="innerWidth <= 767 ? 'animate__fadeOut': 'animate__fadeOutBottomLeft'"
                    mode="out-in">
          <div class="col-6 col-md-4 mt-md-5" v-if="showSecond || showMobile">
            <img src="../../../assets/icons/skills_techs/css_icon.svg" alt="css icon">
          </div>
        </transition>
        <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__fadeInUp'" class="animate__animated"
                    :leave-active-class="innerWidth <= 767 ? 'animate__fadeOut': 'animate__fadeOutDown'"
                    mode="out-in">
          <div class="col-6 col-md-4 mt-md-5" v-if="showSecond"> 
            <img src="../../../assets/icons/skills_techs/node_icon.svg" alt="node icon">
          </div>
        </transition>
        <transition :enter-active-class="innerWidth <= 767 ? 'animate__fadeIn': 'animate__fadeInBottomRight'" class="animate__animated"
                    :leave-active-class="innerWidth <= 767 ? 'animate__fadeOut': 'animate__fadeOutBottomRight'"
                    mode="out-in">
          <div class="col-6 col-md-4 mt-md-5 animate__animated" v-if="showSecond">
            <img src="../../../assets/icons/skills_techs/python_icon.svg" alt="python icon">
          </div>
        </transition>
    </div>

  </section>

</template>

<script>

export default {
  data() {
    return {
      showFirst: false,
      showSecond: false,
      showMobile: false,
      scrollWindow: null,
      innerWidth: null
    }
  },
  methods: {
    isScrolled() {
      this.scrollWindow = window.scrollY;
      this.innerWidth = window.innerWidth;
    },
    scrollFirst(){
      this.scrollWindow = window.scrollY;
      this.innerWidth = window.innerWidth;
      if((this.scrollWindow > 1650 && this.innerWidth > 767) ||
          (this.scrollWindow > 1000 && this.innerWidth <= 767)) {
            this.showFirst=true;
      }
      else {
        this.showFirst=false;
      }

      if ((this.scrollWindow > 1850 && this.innerWidth > 767) ||
          (this.scrollWindow > 1150 && this.innerWidth <= 767)) {
          this.showSecond=true;
          }
      else {
        this.showSecond=false;
      }

      if (this.scrollWindow > 1000 && this.innerWidth <= 767) {
        this.showMobile=true;
      } else {
        this.showMobile=false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollFirst)
  }
}

</script>

<style scoped>

/** ICONS */

.icon_container {
   overflow: hidden;
  text-align: center;
  padding: 50px;
  background-color: #f7f7f7;
  min-height: 300px;
  margin-top:2px;
  border-bottom: 1px solid #e4e4e4;
}

img {
    height:250px;
    width: 250px;
    box-shadow: 1px 2px 2px  #888888;
    background-color: #fff;
    padding: 10%;
    border: 1px solid #f4f4f4;
    border-radius: 20%;
    transition: all 0.5s ease-out;
}

img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
}

@media only screen and (max-width: 1200px)  {
  img {
    height:200px;
    width:200px;
  }
}

@media only screen and (max-width: 1100px)  {
  img {
    height:180px;
    width:180px;
  }
}

@media only screen and (max-width: 900px)  {
  img {
    height:150px;
    width:150px;
  }
}

@media only screen and (max-width: 767px)  {
  img {
    height:160px;
    margin: 20px 0;
    width:160px;
  }
  .icon_container {
    margin-top:0;
  }
}

@media only screen and (max-width: 600px)  {
  img {
    height:130px;
    width:130px;
  }
}

@media only screen and (max-width: 480px)  {
  img {
    height:105px;
    width:105px;
  }
}

@media only screen and (max-width: 400px)  {
  img {
    height:100px;
    width:100px;
  }
}

@media only screen and (max-width: 370px)  {
  img {
    height:95px;
    width:95px;
  }
}

@media only screen and (max-width: 340px)  {
  img {
    height:80px;
    width:80px;
  }
}

</style>
