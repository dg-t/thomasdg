<template>
  <div>

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
    
  </div>
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
          image: require("../../assets/projects/restaurant_review_one-min.png"),
          image_two: require("../../assets/projects/restaurant_review_two-min.png"),
          github_link: "https://github.com/dg-t/restaurantReview",
          webpage_link: "https://dg-t.github.io/restaurantReview/"
        },
        {
          id: "testing-todo-app",
          title: "Testing todo app",
          description: `<p>For this project, I worked on an existing codebase and improved the code.<br /><br />
                          Task included:
                          <ul class="pl-3"><li>Find and fix bugs.</li>
                          <li>Add new unit tests with Jasmine Framework.</li>
                          <li>Analyze website performance and write an audit performance document.</li>
                          <li>Write technical documentation for the website.</li></ul></p>`,
          image: require("../../assets/projects/testing-min.png"),
          github_link: "https://github.com/dg-t/todosAppTesting"
        },
        {
          id: "cat-facts",
          title: "Cat Facts",
          description: `<p>For this project, I created a single page application (SPA) that uses an external API, cat-facts, 
                          to retrieve information about cats using the latest JavaScript features.</p>`,
          image: require("../../assets/projects/cat_facts-min.png"),
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
          image: require("../../assets/projects/ninja_game-min.png"),
          github_link: "https://github.com/dg-t/ninjaGamejs",
          webpage_link: "https://dg-t.github.io/ninjaGamejs/"
        },
        {
          id: "film-festival",
          title: "Film Festival",
          description: `For this project, I created a static site from scratch for a film festival event.
                          The site is aesthetically pleasing and aims to all types of audience.<br />
                          I also prepared a project brief to communicate with the client.`,
          image: require("../../assets/projects/film_festival-min.png"),
          github_link: "https://github.com/dg-t/Film-Festival-Website",
          webpage_link: "https://dg-t.github.io/Film-Festival-Website/"
        },
        {
          id: "dice-game",
          title: "Dice Game",
          description: `For this project, I designed a game with JavaScript easy to use.
                          It is a turn-based game with specific rules and customizable score to reach.`,
          image: require("../../assets/projects/dice_game-min.png"),
          github_link: "https://github.com/dg-t/diceGame",
          webpage_link: "https://dg-t.github.io/diceGame/"
        },
        {
          id: "quote-generator",
          title: "Quote Generator",
          description: `For this project, I created a random quote generator with JavaScript. 
                          Quotes are randomly printed combining three different sentence fragments.`,
          image: require("../../assets/projects/quote_generator-min.png"),
          github_link: "https://github.com/dg-t/QuoteGenerator",
          webpage_link: "https://dg-t.github.io/QuoteGenerator/"
        },
        {
          id: "express-food",
          title: "Express Food",
          description: `For this project, I map out a technical solution for the food delivery site ExpressFood.<br />
                          I designed a UML (Unified Modeling Language) diagram to model the technical architecture of the database, 
                          and I created a MySQL database with made-up information. `,
          image: require("../../assets/projects/expressFood_uml-min.png"),
          github_link: "https://github.com/dg-t/ExpressFood"
        }
        ]
    }
  }
}
</script>

<style>

/** PROJECTS DESCRIPTION GLOBAL */

.heading_project_description {
  padding: 50px !important;
}

.header_project_description::after {
  display:block;
  content: '';
  border-bottom: solid 1px #0af;  
}

/** CONTAINER SECTION PROJECTS */

.container__porject_description {
  padding: 80px;
  margin: auto;
}
  
/** CONTAINER SECTION FEEDBACK */

.feedback_container {
  padding: 20px 80px 80px 80px;
  margin: auto;
}

/** LIST PROJECTS DESCRIPTION */

.list__project {
  margin-left: 40px;
}

/** LINKS */

.link_customized {
  display: inline-block;
  position:relative;
}

.link_customized::after {
  display:block;
  content: '';
  border-bottom: solid 1px #0af;  
  transform: scaleX(0);  
  transition: transform 0.5s ease-in-out;
  transform-origin:bottom right;
  transform-origin:100% 50%;
}
.link_customized:hover:after { 
  transform: scaleX(1);
  transform-origin:bottom left;
}

/** LINK BACK TO PROJECT */

.project_btn_container {
  height: 180px;
  position: relative;
}

.project_btn {
  padding: 5px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 85%;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  background-color: white;
  color: #07c;
  border: 1px solid #0af;
  border-radius: 5px;
  text-decoration: none !important;
}

.project_btn:hover {
  color: white !important;
  background-color: #0af;
  transition: all 0.5s ease;
}

/** TRANSITION FEEDBACK */

.feedback-enter-active {
  animation: global-routes 0.5s ease-out;
}

.feedback-leave-active {
  animation: global-routes 0.5s ease-in reverse;
}

/** MEDIA QUERY PROJECTS */

@media only screen and (max-width: 767px)  {

  /** CONTAINER SECTION PROJECTS */
  .container__porject_description {
    padding: 50px;
    margin: auto;
  }

  /** FEEDBACK CONTAINER */
  .feedback_container {
    padding: 0px 50px 50px 50px;
    margin: auto;
  }

  /** LIST PROJECTS DESCRIPTION */
  .list__project {
    margin-left: 35px;
  }

  /** FEEDBACK SEPARATOR */
  .separator:before {
    margin-bottom: 40px;
  }

  /** BUTONS PROJECTS DESCRIPTION */
  .project_btn_container {
    height: 150px;
  }
}

@media only screen and (max-width: 500px)  {

  /** HEADING PROJECTS */
  .heading_project_description {
    padding: 30px 20px !important;
  }

  /** CONTAINER SECTION PROJECTS */
  .container__porject_description {
    padding: 20px 25px !important;
    margin: auto;
  }

  /** FEEDBACK CONTAINER */
  .feedback_container {
    padding: 0 25px 20px 25px;
    margin: auto;
  }
  
  /** LIST PROJECTS DESCRIPTION */
  .list__project {
    margin-left: 25px;
  }

  /** BUTONS PROJECTS DESCRIPTION */
  .project_btn_container {
    height: 120px;
  }

  /** FEEDBACK SEPARATOR */
  .separator:before {
    margin-bottom: 30px;
  }
  .section-color {
    padding: 0 !important;
  }
}

</style>
