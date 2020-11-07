<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Ninja Fight</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>In this project, I created an online game written with JavaScript in which 2 players play each turn to compete.</p>
      <p>This project was made by following the steps below:</p>
      <h3 class="py-3">Step 1: Generate the map</h3>
      <p>The game map is generated randomly. Each box is either:</p>
      <ul class="list__project">
        <li>empty.</li>
        <li>Unavailable.</li>
      </ul>
      <p>Four different weapons are placed randomly in the game map and can be collected by players who pass through.<br />
        Each weapon inflict different damage, and the default weapon inflict 10 points of damage.</p>
      <p>The two players are also placed randomly on the map when the game loads.</p>
    </div>

    <div class="section-color">
    <div class="container-fluid  container__porject_description">
      <h3 class="py-3">Step 2: Movements</h3>
        <p>For each turn, a player can move from one to three boxes horizontally or vertically before ending their turn. They obviously can not pass through obstacles directly.</p>
        <p>When a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one.</p>
      </div>
    </div>

    <div class="container-fluid container__porject_description">
      <h3 class="py-3">Step 3: Fight!</h3>
      <p>When players cross over adjacent squares, a battle begins.</p>
      <p>During combat, the game works is as follows:</p>
      <ul class="list__project">
        <li>Each player attacks in turn.</li>
        <li>The damage depends on the player's weapon.</li>
        <li>The player can choose to attack or defend against the next shot.</li>
        <li>If the player chooses to defend themselves, they sustain 50% less damage than normal.</li>
        <li>As soon as the life points of a player (initially 100) falls to 0, they lose. A message appears and the game is over.</li>
      </ul>
    </div>

    <div class="project_btn_container">
      <a class="project_btn" @click="feedback=!feedback">See Feedback</a>
    </div>

    <transition name="feedback">
      <section class="separator section-color" v-if="feedback">
        <div class="container-fluid feedback_container">
          <h3 class="py-3">Instructor Feedback</h3>
          <p><b>    1. Provide an assessment of the student's work and, if the project has to be reworked, write a few lines about the criteria the project does not currently meet:</b></p>
          <p>Thomas has completed a great project which covers all the deliverables of the game and makes the Game look rich in UI and functionality. He has added more details in the game for the help of players explaining weapon damage etc.  </p>
          <p>Also his code is well documented and well structured and Thomas has used prototypes to define functions for objects. It was strange for me to know that he was new to Javascript. Thomas could also answer my questions and exhibited good knowledge of Javascript.</p>
          <p><b>2. Assessment of the project deliverables against the project criteria:</b></p>
          <p>Thomas has met the project criteria for the deliverables. </p>
          <p><b>3. Assessment of the student’s delivery of the presentation and whether they meet the presentation guidelines:</b></p>
          <p>Presentation was well detailed and illustrated. Thomas had walked me through the game and then through the code in detail.  </p>
          <p><b>4. Assessment of the student's newly acquired skills:</b></p>
          <p>Javascript coding skills. Game development thinking, and structuring code in a readable and maintainable way.</p>
          <p><b>5. Explain at least one core strength of the work the student has done so far:</b></p>
          <p>Thomas has picked up core concepts of Javascript quickly, so I suggest learning quickly is a core strength Thomas possesses.</p>
          <p><b>6. Explain at least one area in which the student’s work needs to improve:</b></p>
          <p>Even though Thomas had structured code in a good way for a beginner, but there's always room to structure code in a better way by having multiple files with logic abstracted to each rather than having less files have more code.</p>  
        </div>
      </section>
    </transition>

    <div class="project_btn_container separator">
      <router-link :to="'/achievements/'" class="project_btn">Back to projects</router-link>
    </div>

  </section>

</template>

<script>

export default {
  data() {
    return {
      feedback: false
    }
  }
  
}
</script>

<style scoped>


</style>
