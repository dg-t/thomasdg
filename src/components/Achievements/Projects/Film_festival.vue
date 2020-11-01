<template>
  <div>
    <section class="container-fluid pl-0 pr-0">

      <div class="section-color header_project_description">
        <h2 class="text-center heading_project_description">Film Festival</h2>
      </div>

      <div class="container-fluid container__porject_description">
        <h4 class="py-3">Web Design</h4>
        <p> In this project I developed a website for an outdoor film festival in Boston.</p>
        <ul class="list__project">
          <li>The films are shown from August 5th to 8th in Boston Public Garden.</li>
          <li>The event and the website, will aim to audience of all ages.</li>
        </ul>
        <p>The website is made using HTML, CSS and Bootstrap.</p>
        <p>For this project the pre-registration page is not functional. 
          Its a simple page with a form that doesn't actually submit data to a real codebase. Its more about the design.</p>
      </div>
        
      <div class="section-color">
        <div class="container-fluid container__porject_description">
          <h4 class="py-3">Documentation</h4>
          <p>I also privided a project brief to the client with the logisticals and technicals details.</p>
          <p>The project brief includes:</p>
          <ul class="list__project">
            <li>Summary</li>
            <li>Stajeholders</li>
            <li>Goals</li>
            <li>Budget</li>
            <li>Timeline</li>
            <li>Technical specification</li>
          </ul>
          <p>Please click the button to see a copy of the project brief:
            <a href="/pdf_file/ProjectBriefFilmFestival.pdf" class="link_customized" target="_blank">see pdf</a>
          </p>
        </div>
      </div>
    
      <div class="project_btn_container">
        <a class="project_btn" @click="feedback=!feedback">See Feedback</a>
      </div>

      <section class="separator section-color" v-if="feedback">
        <div class="container-fluid feedback_container">
          <h4 class="py-3">Instructor feedback</h4>
          <p><b>Summary:</b></p>
          <p>Thomas has done a fantastic job with his website! <br />
            I've left my feedback about it below.</p>

          <p><b>Things to work on:</b></p>
          <p>The theme/design chosen for the website could have been more apt, but since this is trivial, it is okay.</p>
          <p><b>Overall impression:</b></p>
          <p>Thomas has written a very well-detailed project brief.<br />
            He has also built a great website and it meets all of Jennifer's requirements!<br />
            All the best with your future projects, Thomas! :)</p>
        </div>
      </section>

      <div class="project_btn_container separator">
        <router-link :to="'/achievements/'" class="project_btn">Back to projects</router-link>
      </div>
    </section>
  </div>
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

/** DOWNLOAD LINK */

a {
  padding: 5px 10px;
  color: #07c;
  transition: 0.6s;
  text-decoration: none;
}

a:hover {
  color: #0af;
  transition: all 0.5s ease;
}

</style>
