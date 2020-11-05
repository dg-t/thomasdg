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
  z-index:999;
  font-size: 180%;
  font-weight: 320;
  padding: 20px;
  margin-top:20px;
  text-shadow: 2px 2px #fefefe;
  box-shadow: 1px 2px 2px  #888888;
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

/** MEDIA QUERY */

@media only screen and (max-width: 767px) {

  .heading {
    position:relative;
    letter-spacing: 3px;
    word-spacing: 1px;
  }

  .custom-heading {
    font-weight: 350;
    font-size: 150%;
    padding: 8% 3% !important; 
    font-style: italic;
    box-shadow: none;
    text-shadow: 1px 1px #fefefe;
  }

  .custom-heading:before {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
}

  .custom-heading:after {
    position: absolute;
    bottom:0;
    left:10%;
    width: 80%;
  }

  .custom-heading:hover:after { 
    transform: scaleX(1);
  }
}

@media only screen and (max-width: 480px) {
  .custom-heading {
    padding: 10% 3% !important; 
    line-height: 1.4;
  }
}

</style>