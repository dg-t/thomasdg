<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color">
      <h2 class="text-center p-5 mb-5">Dice Game</h2>
    </div>

    <div class="py-5 container">
      <h4 class="py-3">Game Rules:</h4>
      <ul>
        <li>The game has 2 players, playing in rounds</li>
        <li>Players can set the score to reach.</li>
        <li>In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.</li>
        <li>BUT, if the player rolls the same number to both dice, all his ROUND score gets lost. After that, it's the next player's turn.</li>
        <li>The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.</li>
        <li>The first player to reach the number of points as setted in the beginning of the game on the GLOBAL score wins the game</li>
      </ul>
    </div>

    <div class="project_btn_container separator">
      <router-link :to="'/achievements/'" class="project_btn">Back to projects</router-link>
    </div>
    
  </section>
</template>

<script>

export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
