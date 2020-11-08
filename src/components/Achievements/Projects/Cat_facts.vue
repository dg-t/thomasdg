<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Cat Facts</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>For this project I made a SPA with pure JavaScript ES6 and Rest API, following the instructions below:</p>
      <ul class="list__project">
        <li>This page is made with <b>JavaScript ES6</b>, including classes, constructors, promises and more.</li>
        <li>The style are made with HTML, CSS, and Bootstrap.</li>
        <li>The Rest API I used is cat-facts: <a href="https://alexwohlbruck.github.io/cat-facts/docs/" class="link_customized"  target="_blank">@alexwohlbruc</a></li>
        <li>The application includes a <b>pagination</b> logic.</li>
        <li>The view is set in a single element.</li>
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

<style scoped>

</style>
