<template>

  <section class="container-fluid p-0 m-0 text-center">

    <base-heading>Some of the technologies I use...</base-heading>
    
    <div class="row icon_container">
        <div class="col-sm-6 col-md-4 mb-5 animate__animated isVisible"
            :class="[{animate__fadeInTopLeft: scrollWindow > 1700 && innerWidth > 767}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/skills_techs/html_icon.svg" class="" alt="js icon">
        </div>
        <div class="col-sm-6  col-md-4 mb-5 animate__animated isVisible"
            :class="[{animate__fadeInDown: scrollWindow > 1700 && innerWidth > 767}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/skills_techs/css_icon.svg" alt="js icon">
        </div>
        <div class="col-sm-6 col-md-4 mb-5 animate__animated isVisible" 
            :class="[{animate__fadeInTopRight: scrollWindow > 1700 && innerWidth > 767}, {visible: scrollWindow > 1700}]">
            <img src="../../../assets/icons/skills_techs/javascript_icon.svg" alt="js icon">
        </div>
        <div class="col-sm-6  col-md-4 mt-5 animate__animated isVisible" 
            :class="[{animate__fadeInBottomLeft: scrollWindow > 1900 && innerWidth > 767}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/skills_techs/vue_icon.svg" alt="js icon">
        </div>
        <div class="col-sm-6  col-md-4 mt-5 animate__animated isVisible" 
            :class="[{animate__fadeInUp: scrollWindow > 1900 && innerWidth > 767}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/skills_techs/node_icon.svg" alt="js icon">
        </div>
        <div class="col-sm-6  col-md-4 mt-5 animate__animated isVisible"
            :class="[{animate__fadeInBottomRight: scrollWindow > 1900 && innerWidth > 767}, {visible: scrollWindow > 1900}]">
            <img src="../../../assets/icons/skills_techs/python_icon.svg" alt="js icon">
        </div>
    </div>

    <!-- <h2 class="custom-heading separator m-0">and more...</h2> -->

  </section>

</template>

<script>

export default {
  data() {
    return {
      show: false,
      scrollWindow: null,
      innerWidth: null
    }
  },
  methods: {
    isScrolled() {
      this.scrollWindow = window.scrollY;
      this.innerWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.isScrolled)
  }
}

</script>

<style scoped>

/** TODO IMPROVE ANIMATION WITH CUSTOM DIRECTIVE */

/** ICONS */

.icon_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 50px;
    background-color: #fafafa
}

img {
    height:120px;
    width: auto;
}

.visible {
    opacity: 1;
}

.isVisible {
  opacity: 0;
}


@media only screen and (max-width: 767px) {
  .isVisible {
  opacity: 1;
}
}
</style>
