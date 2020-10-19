<template>

    <div class="heading">
        <h2 class="text-center p-4 m-0 custom-heading">
            <slot></slot>
        </h2>    
    </div>
  
</template>

<script>

export default {

}
</script>

<style scoped>

/** HEADING */

.heading {
  background-color: #f4f4f4;
  letter-spacing: 5px;
  word-spacing: 2px;
  
}

.custom-heading {
  font-size: 180%;
  font-weight: 320;
  padding: 20px;
  margin-top:20px;
}

.custom-heading:before {
    display: block;
    background-color: #0af;
    content: " ";
    height: 2px;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
}

.custom-heading:after {
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
.custom-heading:hover:after { 
  transform: scaleX(0);
  transform-origin:0 50%;
}

</style>
