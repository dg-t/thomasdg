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
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/google_api.png"),
          github_link: "https://github.com/dg-t/restaurantReview",
          webpage_link: "https://dg-t.github.io/restaurantReview/"
        },
        {
          id: "cat-facts",
          title: "Cat Facts",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/cat_facts.png"),
          github_link: "https://github.com/dg-t/catFacts",
          webpage_link: "https://dg-t.github.io/catFacts/"
        },
        {
          id: "ninja-fight",
          title: "Ninja Fight",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/ninja_game.png"),
          github_link: "https://github.com/dg-t/ninjaGamejs",
          webpage_link: "https://dg-t.github.io/ninjaGamejs/"
        },
        {
          id: "film-festival",
          title: "Film Festival",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/film_festival.png"),
          github_link: "https://github.com/dg-t/Film-Festival-Website",
          webpage_link: "https://dg-t.github.io/Film-Festival-Website/"
        },
        {
          id: "dice-game",
          title: "Dice Game",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/dice_game.png"),
          github_link: "https://github.com/dg-t/diceGame",
          webpage_link: "https://dg-t.github.io/diceGame/"
        },
        {
          id: "quote-generator",
          title: "Quote Generator",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/quote_generator.png"),
          github_link: "https://github.com/dg-t/QuoteGenerator",
          webpage_link: "https://dg-t.github.io/QuoteGenerator/"
        },
        {
          id: "testing-todo-app",
          title: "Testing todo app",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/testing.png"),
          github_link: "https://github.com/dg-t/todosAppTesting"
        },
        {
          id: "express-food",
          title: "Express Food",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
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
