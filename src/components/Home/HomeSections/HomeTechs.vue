<template>
  <section class="container-fluid p-0 m-0 text-center">
    <h2 class="heading-techs">Some of the technologies I like to use...</h2>
    <div class="row icon_container">
        <div class="col-md-4 mb-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInTopLeft: scrollWindow > 1700}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/html_icon.svg" class="" alt="js icon">
        </div>
        <div class="col-md-4 mb-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInDown: scrollWindow > 1700}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/css_icon.svg" alt="js icon">
        </div>
        <div class="col-md-4 mb-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInTopRight: scrollWindow > 1700}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/javascript_icon.svg" alt="js icon">
        </div>
        <div class="col-md-4 mt-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInBottomLeft: scrollWindow > 1900}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/vue_icon.svg" alt="js icon">
        </div>
        <div class="col-md-4 mt-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInUp: scrollWindow > 1900}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/node_icon.svg" alt="js icon">
        </div>
        <div class="col-md-4 mt-5 animate__animated" style="opacity:0;"
            :class="[{animate__fadeInBottomRight: scrollWindow > 1900}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/python_icon.svg" alt="js icon">
        </div>
    </div>
    <h2 class="p-4">and more...</h2>
  </section>

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

section {
    background-color: #f4f4f4;
}
.heading-techs {
  padding: 20px;
  margin-top:20px;
}

.heading-techs:before {
    display: block;
    background-color: #013f59;
    content: " ";
    height: 2px;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
}

.heading-techs:after {
  display:block;
  width: 60%;
  content: '';
  margin: auto;
  border-bottom: solid 2px #013f59;  
  padding-bottom: 30px;
  transform: scaleX(1);  
  transition: transform 0.5s ease-in-out;
  transform-origin:100% 50%
}
.heading-techs:hover:after { 
  transform: scaleX(0);
  transform-origin:0 50%;
}

.icon_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 50px;
}

img {
    height:120px;
    width: auto;
}
.card_icon {
    padding: 10px;
}

.visible {
    opacity: 1;
}

</style>
