<template>
  <section class="container-fluid pl-0 pr-0">

    <div class="section-color">
      <h2 class="text-center p-5 mb-5">Express Food</h2>
    </div>

    <div class="py-5 container">
      <p>In this project I made a database for a delivery food company called ExpressFood following the instruction below.</p>
      <p>ExpressFood is a startup that every day creates 2 main dishes and 2 desserts.<br /> 
        These 2 main dishes are prepared by the chefs, than are stored in a cold setting ready to be delivered to the residence that requested it...in less than 20 minutes!</p>
      <p>Clients can order one or multiple dishes and desserts.<br />
        There are no fees for delivery. Menu items change every day.</p>
      <p>Once a client submits their order, they see a page displaying if the order has gone out for delivery yet, as well as an estimate for their meal's arrival time.</p>
      <p>The database will contain:</p>
      <ul>
        <li>A list of clients.</li>
        <li>A list of the different daily menu items.</li>
        <li>A list of delivery people.</li>
        <li>An order history for each client.</li>
      </ul>
    </div>

    <div class="py-5 section-color">
      <div class="container">
        <p>Firstly, I created a UML diagram to model this technical architecture.</p>
        <p>Then, I create the actual <b>MySQL database</b> and fill it up with made-up information.</p>
      </div>
    </div>

  </section>

  <section class="py-5 separator container" v-if="feedback">
    <h4 class="pb-3">Instructor feedback</h4>
    <p>Thomas presented the 4th project in the path, here is the summary:</p>
    <ul>
      <li>All the deliverables were in place and worked as per the specifications.</li>
      <li>All the deliverables were in place and worked as per the specifications.</li>
      <li>The UML diagram was logically implemented with all the tables rightly connected.</li>
      <li>Thomas did a great job in writing SQL queries and was thorough with their meaning as well.</li>
      <li>The database was mapped as per the UML diagram and contained proper data to test.</li>
    </ul>
    <p>Overall, a great effort in getting the project completed.</p>
    <p><b>Hence approved!</b></p>
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
