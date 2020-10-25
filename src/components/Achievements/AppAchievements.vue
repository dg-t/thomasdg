<template>
  
  <achievements-header></achievements-header>

  <section style="overflow: hidden" >
    <app-achievements v-for="(project, index) in projects" 
      :class="index % 2 == 0  ? '' : 'section-color'"
      :key="index" 
      :title="project.title"
      :description="project.description"
      :id="project.id"
      :image="project.image"
      :image_two="project.image_two"
      :github_link="project.github_link"
      :webpage_link="project.webpage_link"
      > </app-achievements>
  </section>

</template>

<script>
import AchievementsHeader from '../Header/SectionsHeader.vue';
import AppAchievements from './Achievement.vue';

export default {
  components: {
    AchievementsHeader,
    AppAchievements,
  },
  data() {
    return {
      projects: [
        {
          id: "restaurant-reviews",
          title: "Restaurant reviews",
          description: `<p>For this project I implemented an external API to the website. 
                          <ul class="pl-3"><li>Use of <b>Google Map API</b> to display a map.</li>
                          <li>The map focuses immediately on the user position.</li> 
                          <li>Users can search for restaurants close to them, review restaurants,
                          add new restaurants to the map, and access the Google street view.</li> 
                          <li>All information is in real-time.</li></ul></p>`,
          image: require("../../assets/projects/restaurant_review_one.png"),
          image_two: require("../../assets/projects/restaurant_review_two.png"),
          github_link: "https://github.com/dg-t/restaurantReview",
          webpage_link: "https://dg-t.github.io/restaurantReview/"
        },
        {
          id: "testing-todo-app",
          title: "Testing todo app",
          description: `For this project, I worked on an existing codebase and improved the code.<br />
                          Task included:
                          <ul class="pl-3"><li>Find and fix bugs.</li>
                          <li>Add new unit tests with Jasmine Framework.</li>
                          <li>Analyze website performance and write an audit performance document.</li>
                          <li>Write technical documentation for the website.</li></ul>`,
          image: require("../../assets/projects/testing.png"),
          github_link: "https://github.com/dg-t/todosAppTesting"
        },
        {
          id: "cat-facts",
          title: "Cat Facts",
          description: `<p>For this project, I created a single page application (SPA) that uses an external API, cat-facts, 
                          to retrieve information about cats using the latest JavaScript features.</p>`,
          image: require("../../assets/projects/cat_facts.png"),
          github_link: "https://github.com/dg-t/catFacts",
          webpage_link: "https://dg-t.github.io/catFacts/"
        },
        {
          id: "ninja-fight",
          title: "Ninja Fight",
          description: `<p>For this project, I created a turn-based game with JavaScript following object-oriented programming principles.
                          <ul class="pl-3"><li>Generate a random game-board with obstacles, players and weapons.</li>
                          <li>Players can move one to three boxes, and if they pass over a weapon they leave their current weapon on-site and replace it with the new one.</li>
                          <li>If players cross over adjacent squares, a battle begins.</li></ul></p>`,
          image: require("../../assets/projects/ninja_game.png"),
          github_link: "https://github.com/dg-t/ninjaGamejs",
          webpage_link: "https://dg-t.github.io/ninjaGamejs/"
        },
        {
          id: "film-festival",
          title: "Film Festival",
          description: `For this project, I created a static site from scratch for a film festival event.
                          The site is aesthetically pleasing and aims to all types of audience.<br />
                          I also prepared a project brief to communicate with the client.`,
          image: require("../../assets/projects/film_festival.png"),
          github_link: "https://github.com/dg-t/Film-Festival-Website",
          webpage_link: "https://dg-t.github.io/Film-Festival-Website/"
        },
        {
          id: "dice-game",
          title: "Dice Game",
          description: `For this project, I designed a game with JavaScript easy to use.
                          It is a turn-based game with specific rules and customizable score to reach.`,
          image: require("../../assets/projects/dice_game.png"),
          github_link: "https://github.com/dg-t/diceGame",
          webpage_link: "https://dg-t.github.io/diceGame/"
        },
        {
          id: "quote-generator",
          title: "Quote Generator",
          description: `For this project, I created a random quote generator with JavaScript. 
                          Quotes are randomly printed combining three different sentence fragments.`,
          image: require("../../assets/projects/quote_generator.png"),
          github_link: "https://github.com/dg-t/QuoteGenerator",
          webpage_link: "https://dg-t.github.io/QuoteGenerator/"
        },
        {
          id: "express-food",
          title: "Express Food",
          description: `For this project, I map out a technical solution for the food delivery site ExpressFood.<br />
                          I designed a UML (Unified Modeling Language) diagram to model the technical architecture of the database, 
                          and I created a MySQL database with made-up information. `,
          image: require("../../assets/projects/expressFood_uml.png"),
          github_link: "https://github.com/dg-t/ExpressFood"
        }
        ]
    }
  }
}
</script>

<style scoped>

</style>
