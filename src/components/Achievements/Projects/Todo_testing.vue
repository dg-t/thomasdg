<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color header_project_description">
      <h2 class="text-center heading_project_description">Todo Testing</h2>
    </div>

    <div class="container-fluid container__porject_description">
      <p>For this project I work on an existing codebase, adding unit tests, fixing possible bugs, and optimizing performance.</p>
      <p>Tests are added using the Jasmine, a behaviour-driven development framework for testing in JavaScript.</p>
        <h4 class="py-3">Step 1: Fix the bugs</h4>
        <p>Firstly, I read the code to understand the structure and how it works.</p>
        <p>Then, I have looked for bugs, found them, and fixed them to ensure the application is working properly.</p>
        <p>Once the application is working as it should, I have improved the code optimizing loops and logging statements.</p>
    </div>

    <div class="section-color">
      <div class="container-fluid container__porject_description">
        <h4 class="py-3">Step 2: Add tests</h4>
        <p>The project has already some tests included, but not enough to ensure the correct functionality</p>
        <p>A real test foundation to support the project has been created. This way I make sure to don't brake anything in future code implementations.</p>
        <p>Tests have been added adopting a TDD (Test-driven development) approach.</p>
      </div>
    </div>

    <div class="container-fluid container__porject_description">
        <h4 class="py-3">Step 3: Analyze performance</h4>
        <p>Analyze the performance of a competitor site in order to identify what works well and what doesn't.
          The competitor site analyzed is the following: <a href="http://todolistme.net/" class="link_customized" target="_blank">Competitor Site</a></p>
        <p>Analyze this website's performance with the help of chrome developer tools</p>
        <p>Write an audit performance document about the competitor's performance, understanding how it differs from our own app, and how to optimize performance when scaling the app.</p>
    </div>

    <div class="section-color">
      <div class="container-fluid container__porject_description">
        <h4 class="py-3">Step 4: Write technical documentation</h4>
        <p>Write technical documentation reading real-world example: <a href="https://www.atlassian.com/blog/add-ons/5-real-life-examples-beautiful-technical-documentation" class="link_customized" target="_blank">See examples</a></p>
        <p>The documentation will describe the project, how it works (technically), and include the audit performance.</p>
        <p>To see the the completed technical documentation, please access it directly from GitHub, or by clciking the following link: <a href="https://github.com/dg-t/todosAppTesting/blob/master/technicalDocumentation/technical_documentation.pdf" class="link_customized" target="_blank">See Documentation</a></p>
      </div>
    </div>


    <div class="project_btn_container">
      <a class="project_btn" @click="feedback=!feedback">See Feedback</a>
    </div>

    <transition name="feedback">
      <section class="separator section-color" v-if="feedback">
        <div class="container-fluid feedback_container">
          <h4 class="py-3">Instructor feedback</h4>
          <p><b>1. Provide an assessment of the student's work and, if the project has to be reworked, write a few lines about the criteria the project does not currently meet:</b></p>
          <p>Project work satisfies all the requirements listed in the project brief.</p>
          <p><b>2. Assessment of the project deliverables against the project criteria:</b></p>
          <p>Bug fixes</p>
          <ul>
            <li>The typo bug has been fixed and therefore restored the ability to add Todos.</li>
            <li>Potential ID conflict bug was also fixed.</li>
            <li>A third bug was found with the toggle-all functionality, and this bug has been fixed as well.</li>
          </ul>
          <p>Test cases</p>
          <ul>
            <li>All test cases that were marked to be done have been completed. All of the test cases are passing.</li>
          </ul>
          <p>Audit report and Technical documentation</p>
          <ul>
            <li>The technical documentation describes all the aspect of the project correctly. The language used is professional, clean and ambiguous.</li>
            <li>The audit report describes the performance metrics of both the competitor's app and the project's app in great detail. The comparison both these app and also has proposals on the improvements that can be made.</li>
          </ul>
          <p>Overall, clean coding practices have been applied and all documentation uses clear and professional language.</p>
          <p><b>3. Assessment of the student’s delivery of the presentation and whether they meet the presentation guidelines:</b></p>
          <p>The presentation of this project was very detailed and well within the prescribed time limit.</p>
          <p>Good work overall, project approved!</p>
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
