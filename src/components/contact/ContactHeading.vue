<template>
  <header class="container-fluid">
    <h2 class="text-center p-4 m-0 heading-achievements">Contact Me</h2>    
  </header>


</template> 

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
    background-color: #f4f4f4;
  margin-top:90px;
  letter-spacing: 5px;
  word-spacing: 2px;
}

/** HEADING */

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



