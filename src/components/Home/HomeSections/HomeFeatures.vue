<template>

    <div class="row container_feature">
      <div class="col-md-6 center design_two">
        Websites made with love... <br />Where creativity and technology work together!
      </div>
      <div class="col-md-6 img_container design">
        <img src="../../../assets/home/tech.jpg" class="img_web" alt="tech img">
      </div>
    </div>

    <div class="row container_feature" style="background-color:#f4f4f4;">
      <div class="col-md-6 img_container design_two">
        <img src="../../../assets/home/organised.jpg" class="img_responsive" alt="organised img">
      </div>
      <div class="col-md-6 center p-0 m-0">
        Modern Responsive Websites <br />Stunning design...
      </div>
    </div> 

    <div class="row container_feature">
      <div class="col-md-5 center p-2">
        Inspiring solutions born from <br />passion, dedication and... a lot of coffee.
      </div>
      <div class="col-md-7 img_container design_three">
        <img src="../../../assets/home/work_on_time.jpg" class="img_solution" alt="calendar img">
      </div>
    </div> 
    
</template>

<script>
export default {

}
</script>

<style scoped>

/** TODO REMOVE IMAGE FOR MOBILE */

/** ROWS HEIGHT */

.container_feature {
    height: 400px;
}

/** TEXT */

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
}

/** IMAGE */

.img_container {
    display: flex;
    height: auto;
}

img {
    width: 50%;
    height: auto;
    margin: auto;  
    opacity: 0.6;
    z-index: -0.5;
    transition: opacity 1s;
    position: fixed;
    object-fit: cover;
}

.img_web {
    top: 10%;
    right:0;
    height:90%;
}

.img_responsive {
    bottom: 0;
    left:0;
    height:90%;
}

.img_solution {
    bottom: 0;
    right:0;
    width: 52.5%;
    height:90%;
}

.design {
  clip-path: polygon(3% 0, 100% 0, 100% 100%, 0 100%);
}

.design_two {
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
}

.design_three {
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 15% 100%);
}

.img_web:hover,
.img_responsive:hover,
.img_solution:hover {
    opacity: 0.8;
    z-index: -0.5;
    transition: opacity 1s;

}

/** MEDIA QUERY */

@media only screen and (max-width: 767px) {
  .container_feature {
    height: 180px;
    padding: 30px 20px;
  }
  .img_container {
    display: none;
  }
}


</style>
