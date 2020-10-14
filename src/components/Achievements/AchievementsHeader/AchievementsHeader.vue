<template>

  <section class="container-fluid mx-0 px-0">
    <header class="container-fluid"></header>

    <div class="heading">
        <h2 class="text-center p-4 m-0 heading-achievements">My Achievements</h2>    
    </div>
  </section>
  
</template>

<script>

export default {

}
</script>

<style scoped>

/** HEADER */

header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(../../../assets/header/jetty.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 60vh;
}

/** HEADING */

.heading {
  background-color: #f4f4f4 !important;
  letter-spacing: 5px;
  word-spacing: 2px;
}

.heading-achievements {
  padding: 20px;
  margin-top:20px;
}

.heading-achievements:before {
    display: block;
    background-color: #0af;
    content: " ";
    height: 2px;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
}

.heading-achievements:after {
  display:block;
  width: 60%;
  content: '';
  margin: auto;
  border-bottom: solid 2px #0af;  
  padding-bottom: 30px;
  transform: scaleX(1);  
  transition: transform 0.5s ease-in-out;
  transform-origin:100% 50%
}
.heading-achievements:hover:after { 
  transform: scaleX(0);
  transform-origin:0 50%;
}

</style>
