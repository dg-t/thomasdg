<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Quote generator</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>In this project I build a simple quote generator to practice with the basic of JavaScript</p>
      <h4 class="py-3">Create Random quotes</h4>
      <ul class="list__project">
        <li>The quotes are generated randomly one by one with each JavaScript call.</li>
        <li>Each quote is a combination of 3 sentence fragments (beginning, middle, and end).</li>
        <li>The quotes is relatively coherent.</li>
      </ul>
    </div>

    <div class="section-color">
      <div class="container-fluid  container__porject_description">
        <h4 class="py-3">Customized quotes</h4>
        <ul class="list__project">
          <li>It is possible to select between 1 and 5 quotes to generated.</li>
          <li>It is possible to choose between 2 types of quotes, positivism and wellness.</li>
        </ul>
      </div>
    </div>

    <div class="project_btn_container">
      <a class="project_btn" @click="feedback=!feedback">See Feedback</a>
    </div>

    <section class="separator section-color" v-if="feedback">
      <div class="container-fluid feedback_container"> 
        <h4 class="py-3">Instructor feedback</h4>
        <p>Thomas has done brilliantly well with his project. He has structured his JavaScript function correctly and has an apt logic to form the quotes. The styling on the app is pleasing. He has met all the rubric criterias for this project.</p>
        <p>Good work mentor and student.</p>
      </div>
    </section>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
