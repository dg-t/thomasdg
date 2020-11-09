<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Digital Portfolio</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>This website you are currently navigating on is a SPA digital portfolio made entirely from scratch using <b>the progressive JavaScript Framework Vue.js 3.</b><br /><br />
        The purpose of this site is to introduce myself and showcase my skills as a developer.<br />
        The web design is simple, elegant and fully responsive to allow the site to adapt to any screen size.<br />
        Many VUE feature has been implemented, such as <b>routing, forms, transitions</b> and more...<br />
        Feel free to navigate through it and check out the different feature.<br /><br /> 
        In the <b>contact me</b> page you can get in touch with me for any question or further information.
    </p>
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
