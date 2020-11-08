<template>

  <section class="container-fluid mx-0 px-0" v-if="$route.meta.achievementsHeader">
    <header class="container-fluid header-achievements"></header>
    <base-heading>
      Achievements
    </base-heading>    
  </section>

  <section class="container-fluid mx-0 px-0" v-if="$route.meta.aboutHeader">
    <header class="container-fluid header-about" ></header>
    <base-heading>
        ABOUT ME  
    </base-heading>
  </section>
  
</template>

<script>

export default {
}
</script>

<style scoped>

/** HEADER */

.header-achievements {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(../../assets/header/achievement-min.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 60vh;
}

.header-about {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(../../assets/header/about-min.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
}

/** MEDIA QUERY */

@media only screen and (max-width: 1024px)  {
  .header-about {
    background-position: 26% 0%;
  }
}

@media only screen and (max-width: 767px)  {
  .header-achievements {
    max-height: 500px;
}

  .header-about {
    max-height: 500px;
  }
}

</style>
