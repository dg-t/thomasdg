<template>
    <div class="presentation text-center">
      <div class="container">
        <h1>Hello, I am Thomas<br /> A web Developer!</h1>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



/** Text */

/** TODO - Not perfected center for mobile device */
.presentation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

h1 {
  font-weight: 200;
  text-shadow: 1px 1px 1px #fff;
  border-bottom: 1px solid white;
  color:white;
  padding-bottom: 30px;
  letter-spacing: 3px;
  word-spacing: 2px;
}

@media only screen and (max-width: 1024px)  {
  h1 {
    font-weight: 300;
    text-shadow: none;
  }
}

</style>
