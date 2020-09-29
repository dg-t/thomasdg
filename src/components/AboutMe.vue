<template>
  
  <ul>
    <li>Hello</li>
    <li>Hey</li>
    <li>Buu</li>
  </ul>
  <h1>About Me</h1>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
}
li{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  flex: 1 0 20%;
  margin: 5px;
  height: 100px;
}
</style>
