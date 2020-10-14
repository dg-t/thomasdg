<template>
  <router-view></router-view>
  <achievements-header></achievements-header>
  <section v-if="!projectDetailsShow" style="overflow: hidden" >
    <app-achievements v-for="(project, index) in projects" 
      :class="index % 2 == 0  ? '' : 'section-color'"
      :key="index" 
      :title="project.title"
      :description="project.description"
      :id="project.id"
      :image="project.image"
      :github_link="project.github_link"
      :webpage_link="project.webpage_link"
      @switch-project="switchProject"> </app-achievements>
  </section>
  <section>
    <router-view></router-view>
    <!-- <component :is="selectProject"></component> -->
  </section>
</template>

<script>
import AchievementsHeader from './AchievementsHeader/AchievementsHeader.vue';
import AppAchievements from './Achievement.vue';


export default {
  components: {
    AchievementsHeader,
    AppAchievements,
    // AchievementsHeading
    // ProjectOne,
    // ProjectTwo
  },
  data() {
    return {
      projectDetailsShow: false,
      projects: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
          title: "Testing todo app",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam 
                        earum dolor voluptatum consequatur blanditiis inventore debitis fuga 
                        numquam voluptate ex architecto itaque molestiae.`,
          image: require("../../assets/projects/testing.png"),
          github_link: "https://github.com/dg-t/todosAppTesting"
        },
        {
          id: 8,
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
  },
  methods: {
    switchProject() {
      this.projectDetailsShow = true;

      // if (id.id == 0) {
      //   this.selectProject = "Project-one";
      //   this.projectDetailsShow = true;
      // } else if (id.id == 1) {
      //   this.selectProject = "Project-two";
      //   this.projectDetailsShow = true;
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
