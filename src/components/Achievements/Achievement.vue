<template>

  <div class="row container-fluid projects">

      <div class="col-lg-5 project_description">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
          <div class="button_links">
            <router-link :to="'/achievements/'+id">Description</router-link>
            <a :href="github_link" target="_blank">Source Code</a>
          </div>
          <div class="button_links">
            <a :href="webpage_link" target="_blank" v-if="webpage_link">Webpage</a>
          </div>
      </div>
      
      <div class="col-lg-7 image_container">
        <p class="ghost_text" v-if="show">{{title}}</p>
        <div :class="{image_scroll: id == 'testing-todo-app' || id == 'film-festival' }">
          <img :src="image" :alt="title" class="img-fluid img_project" @mouseover="show = !show" @mouseleave="show = !show" />
        </div>
      </div>

  </div>
  
</template>

<script>

export default {
    props: ["id", "title", "description", "image", "github_link", "webpage_link"],
    data() {
      return {
        show: true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/** TODO CHANGE image_scroll SIZE FOR MOBILE */
/** TODO CHANGE BUTTONS ARRANGMENT FOR MOBILE */

/** GENERAL */

.projects {
  padding: 50px 0;
  margin: 0 auto;
}

/** IMAGE */

.image_container {
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  padding-right: 1.5em;
}

.image_scroll {
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}

.ghost_text {
  position: absolute;
  z-index: 1000;
  color:white;
  display:flex;
  justify-content: center;
  align-items: center;
}

.img_project {
  filter: brightness(50%);
  padding:5%;
  transition: all 1s ease;
}

.img_project:hover {
  transform: scale(1.05);
  filter: brightness(100%);
}

/** TEXT DESCRIPTION */

.project_description {
  padding: 3em 1em 1em 2em;
  font-size: 80%;
  word-spacing: 1px;
  letter-spacing: 0.4px;
}

.button_links {
  display: flex;
  justify-content: space-around;
  justify-items: center;
  width: 80%;
  margin: 10% 0 0 0;
}

a {
  font-size: 90%;
  white-space: nowrap;
  text-align: center;
  padding: 0.3em 0.8em;
  color: #07c;
  margin-left: 10%;
  border-radius: 5px;
  border: 1px solid #0af;
  transition: 0.6s;
  box-shadow: 1px 2px 2px  #888888;
  text-decoration: none;
}

a:hover {
  color: white;
  background-color: #0af;
  transition: all 0.5s ease;
}

</style>