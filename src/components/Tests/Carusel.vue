<template>
  <section class="container-fluid">
    <h3 class="text-center">Favourite Techs</h3>
    <div class="row justify-content-md-center">
      <div id="carouselExampleSlidesOnly" class="carousel slide carusel-customize bg-info" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item" :class="carusel.firstSlide">
              <img src="../assets/icons/html_icon.svg" class="mx-5 my-3 p-2" alt="html icon">
              <img src="../assets/icons/css_icon.svg" class="mx-5 my-3 p-2" alt="css icon">
          </div>
          <div class="carousel-item" :class="carusel.secondSlide">
            <img src="../assets/icons/vue_icon.svg" class="mx-5 my-3 p-2" alt="vue icon">
            <img src="../assets/icons/javaScript_icon.svg" class="mx-5 my-3 p-2" alt="javaScript icon">
          </div>
          <div class="carousel-item" :class="carusel.thirdSlide">
            <img src="../assets/icons/git_icon.svg" class="mx-5 my-3 p-2" alt="git icon">
            <img src="../assets/icons/github_icon.svg" class="mx-5 my-3 p-2" alt="github icon">
          </div>
          <div class="carousel-item" :class="carusel.fourthSlide">
            <img src="../assets/icons/node_icon.svg" class="mx-5 my-3 p-2" alt="node icon">
            <img src="../assets/icons/python_icon.svg" class="mx-5 my-3 p-2" alt="python icon">
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script>
export default {
  data() {
    return {
      carusel: {
        firstSlide: "active", 
        secondSlide: "",
        thirdSlide: "",
        FourthSlide: ""
      }
    }
  },
  methods: {
    startCarusel() {
      setInterval(() => { 
        if (this.carusel.firstSlide == "active") { 
          this.carusel.firstSlide = ""
          return this.carusel.secondSlide = "active" 
          }
        else if (this.carusel.secondSlide == "active") { 
          this.carusel.secondSlide = ""
          return this.carusel.thirdSlide = "active" 
        }
        else if (this.carusel.thirdSlide == "active") { 
          this.carusel.thirdSlide = ""
          return this.carusel.fourthSlide = "active" 
        }
        else if (this.carusel.fourthSlide == "active") { 
          this.carusel.fourthSlide = ""
          return this.carusel.firstSlide = "active" 
        }

       }, 5000);
    }
  },
  created() {
    this.startCarusel();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carusel-customize {
  color:black;
}

img {
  height: 100px;
  width: auto;
}

.fa-customize {
  font-size: 400%;
  color: green;
}
</style>
