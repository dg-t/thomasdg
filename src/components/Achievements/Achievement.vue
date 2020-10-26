<template>

  <div class="row container-fluid projects">

      <div class="col-lg-5 project_description">
          <h3>{{ title }}</h3>
          <p class="container-fluid" v-html="description"></p>
          <div class="button__mobile">
              <router-link :to="'/achievements/'+id" class="button_links">Description</router-link>
              <a :href="github_link" class="button_links" target="_blank">Source Code</a>
              <a :href="webpage_link" class="button_links" target="_blank" v-if="webpage_link">Webpage</a>
          </div>
      </div>
      
      <div class="col-lg-7 image_container" v-if="id !='restaurant-reviews'">
        <p class="ghost_text" v-if="show">{{title}}</p>
        <div :class="{image_scroll: id == 'testing-todo-app' || id == 'film-festival' }">
          <img :src="image" :alt="title" class="img-fluid img_project" @mouseover="show = !show" @mouseleave="show = !show" />
        </div>
      </div>

      <!-- Test -->
      <div class="col-lg-7 flip-box" v-if="id=='restaurant-reviews'">
        <div class="flip-box-inner">
          <p class="ghost_text" v-if="show">{{title}}</p>
            <img :src="image" class="flip-box-front img-fluid image_box" :alt="title">
            <img :src="image_two" class="flip-box-back img-fluid image_box" :alt="title">
        </div>
      </div>

      <!-- End Test -->

  </div>
  
</template>

<script>

export default {
    props: ["id", "title", "description", "image", "image_two", "github_link", "webpage_link"],
    data() {
      return {
        show: true
      }
    }
}
</script>

<style scoped>

/** TODO CHANGE image_scroll SIZE FOR MOBILE */
/** TODO CHANGE BUTTONS ARRANGMENT FOR MOBILE */

/** GENERAL */

h3 {
    padding: 20px 0;
  }

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
  width: 100%;
  filter: brightness(50%);
  padding:5%;
  transition: all 1s ease;
}

.img_project:hover {
  transform: scale(1.05);
  filter: brightness(100%);
}

/** FLIP IMAGE */

/** TODO add height 200px for mobile */
.flip-box {
  background-color: transparent;
  padding: 25px 70px 0 50px;
  height: 400px;
}

.flip-box-inner {
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 1.5s ease;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  filter: brightness(80%);
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-box-back {
  filter: brightness(100%);
}

.flip-box-back {
  transform: rotateY(180deg);
}

/* .image_box {
  max-height: 100%;
} */

/** TEXT DESCRIPTION */

.project_description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em 1em 1em 2em;
  font-size: 80%;
  word-spacing: 1px;
  letter-spacing: 0.4px;
}

.button__mobile {
    display:flex;
    justify-content: center;
    width: 100%;
  }

.button_links {
  display: inline-block;
  margin: 8% 5% 0 0;
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

/** MEDIA QUERY */

@media only screen and (min-width: 1800px)  {
  /** IMAGE FLIP */
  .flip-box {
    height: 530px !important;
    padding: 25px 90px 0 70px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 530px;
  }
}

@media only screen and (min-width: 1500px)  {
  /** IMAGE FLIP */
  .flip-box {
    height: 480px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 500px;
  }
}

@media only screen and (max-width: 1100px)  {
  /** IMAGE FLIP */
  .flip-box {
    height: 350px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 350px;
  }
}

@media only screen and (max-width: 991px)  {

  /** GENERAL */
  h3 {
    padding: 30px 0;
  }
  .projects {
    padding: 25px 0;
  }
  .project_description {
    padding: 1em 1em 1em 2em;
  }

  /** IMAGES */
  .img_project {
    padding:20px 50px;
  }
  .image_container {
    width: 80%;
    margin-left:10%;
  }
  .button__mobile {
    display: flex;
    justify-content:center;
    width:50%;
  }

  /** IMAGE FLIP */
  .flip-box {
    height: 400px;
    width: 80%;
    margin-left:10%;
    padding: 20px 50px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /** BUTTONS */
  .button_links {
    display: inline-block;
    width: 30%;
    margin: 3%  2%;
  }
}

@media only screen and (max-width: 767px)  {

  /** GENERAL */
  h3 {
    padding-top: 0;
    font-size: 170%;
    font-weight: 400;
  }

  /** IMAGE FLIP */
  .flip-box {
    height: 300px;
    padding: 25px 90px 0 70px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 280px;
  }
  /** BUTTONS */
  .button_links {
    display: inline-block;
    font-size: 80%;
    width: 35%;
    margin: 3%  2%;
  }
}

@media only screen and (max-width: 600px)  {

  /** GENERAL */
  .project_description {
    padding: 1em;
  }

  /** IMAGES */
  .image_container {
    padding-right: 0;
  }

  /** IMAGE FLIP */
  .flip-box {
    height: 220px;
    padding: 25px 55px 0 55px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 200px;
  }

  /** BUTTONS */
  .button_links {
    width: 40%;
    margin: 3%  2%;
  }
}

@media only screen and (max-width: 500px)  {

  /** GENERAL */
  .project_description {
    padding: 1em;
  }

  /** IMAGES */
  .image_container {
    padding: 10px 0 0 0;
  }
  .img_project {
    padding: 20px 25px;
  }

  /** IMAGE FLIP */
  .flip-box {
    height: 180px;
    padding: 10px 25px 0 25px;
  }

  /** IMAGE SCROLL */
  .image_scroll {
    height: 160px;
  }

  /** BUTTONS */
  .button_links {
    width: 55%;
    margin-bottom: 20px;
    margin-top: 0;
  }


}
</style>
