<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Restaurant review</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>This project was made by following the instructions below:</p>
      <h4 class="py-3">Step 1</h4>
      <p>Build and organize the application foundation in 2 main sections:</p>
      <ul class="list__project">
        <li>A Google Maps map loaded with the <b>Google Maps API.</b></li>
        <li>A list of restaurants on the right side of the page that are within the area displayed on the map</li>
      </ul>
      <p>Use the <b>JavaScript geolocation API</b> to immediately focus the position of the user in the Google Maps map. A specific color marker is shown at the user's current location.</p>
      <p>Restaurants are shown on the map based on their GPS coordinates. Restaurants that are currently visible on the map are displayed in list form on the right side of the map together with the average reviews of each restaurant (ranging from 1 to 5 stars). <br />
        During this first step restaurants are added with a JSON file. Real restaurant data will be implemented in step three of the project.</p>
      <p>When clicking on a restaurant, the list of reviews is shown together with the <b>Google Street View</b> photo via the corresponding <b>API!</b> </p>
      <p>A filter tool allows the display of restaurants that have between X and Y stars. The map will be updated in real-time to show the corresponding restaurants.</p>
    </div>

    <div class="section-color">
      <div class="container-fluid  container__porject_description">
        <h4 class="py-3">Step 2: Add restaurants and reviews</h4>
        <p>Visitors can also interact with the map by:</p>
        <ul class="list__project">
          <li><b>Adding a review</b> to any of the restaurants.</li>
          <li><b>Add their very own restaurant</b> by clicking on a specific place on the map</li>
        </ul>
        <p>Once a review or restaurant has been added, it will appear immediately on the map. A new marker will show the position of the new restaurant.</p>
        <p>The information is only saved in memory for the duration of the visit.</p>
      </div>
    </div>

    <div class="container-fluid container__porject_description">
      <h4 class="py-3">Step 3: Integration with Google Places API</h4>
      <p>
        Use <b>Google Places API</b> to retrieve restaurants and reviews on the map!
        <a href="https://developers.google.com/places/web-service/details" class="link_customized" target="_blank"> See Google Place docs here</a>
      </p>
      <p>The <b>search API</b> is also implemented to find restaurants in a particular displayed area.</p>
    </div>

    <div class="project_btn_container">
      <a class="project_btn" @click="feedback=!feedback">See Feedback</a>
    </div>


    <section class="separator section-color" v-if="feedback">
      <div class="container-fluid feedback_container">
        <h4 class="py-3">Instructor Feedback</h4>
        <p><b>1. Provide an assessment of the student's work and, if the project has to be reworked, write a few lines about the criteria the project does not currently meet:</b></p>
        <p>Thomas has completed all the deliverables and a good explanation of his restaurant review web application.</p>
        <p><b>2. Assessment of the project deliverables against the project criteria:</b></p>
        <ul class="list__project">
          <li>He has completed the project coding in JS with all the user features, restaurant features and maps utilization.</li>
          <li>He has used clean coding practices.</li>
          <li>Made good use of DevTools.</li>
          <li>Good integration of Google APIs.</li>
        </ul>
        <p><b>3. Assessment of the student’s delivery of the presentation and whether they meet the presentation guidelines:</b></p>
        <p>He was precise and confident in his presentation.</p>
        <p><b>4. Assessment of the student's newly acquired skills:</b></p>
        <p>Thomas has an amazing understanding of using APIs and debugging the application by using Devtools.</p>
        <p><b>5. Explain at least one core strength of the work the student has done so far:</b></p>
        <p>Integrating APIs using JS.</p>
        <p><b>6. Explain at least one area in which the student’s work needs to improve:</b></p>
        <p>He can work more on the UI of the application.</p>  
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

<style scoped>

/** LINKS */
a {
  padding: 5px 10px;
  cursor: pointer;
  color: #07c;
  transition: 0.6s;
  text-decoration: none;
}

a:hover {
  color: #0af;
  transition: all 0.5s ease;
}

</style>
