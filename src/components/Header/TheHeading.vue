<template>
    <div class="presentation mx-3 text-center">
      <div class="container">
        <h1 class="text-white col-md-">Hello, I am Thomas<br /> A web Developer!</h1>
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
  font-weight: 150;
  border-bottom: 1px solid white;
  padding-bottom: 30px;
  letter-spacing: 3px;;
}

</style>
