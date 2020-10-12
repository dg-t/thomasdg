<template>
        <div class="row container-fluid projects">
            <div class="col-lg-5 project_description pl-5">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
                <div class="button_links">
                  <router-link :to="'/achievements/'+id" @click="switchProject()">Description</router-link>
                  <a :href="github_link" target="_blank">Source Code</a>
                </div>
                <div class="button_links">
                  <a :href="webpage_link" target="_blank" v-if="webpage_link">Webpage</a>
                </div>
            </div>
            <div class="col-lg-7 image_container pr-5">
              <p class="ghost_text" v-if="show">{{title}}</p>
              <div :class="{image_scroll: id == 7 || id == 4 }">
                <img class="img-fluid img_project" @mouseover="show = !show" @mouseleave="show = !show"  :src="image" />
              </div>
            </div>
        </div>
</template>

<script>

export default {
    props: ["id", "title", "description", "image", "github_link", "webpage_link"],
    emit: ["switch-project"],
    data() {
      return {
        show: true
      }
    },
    methods: {
      switchProject() {
        this.$emit("switch-project");
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/** GENERAL */

.projects {
  padding: 50px 0;
  /* border: 0.2px solid #0af; */
  margin: 0 auto;
}

/** IMAGE */

.image_container {
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
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
  padding: 40px 10px 10px 10px;
  font-size: 80%;
  word-spacing: 1px;
  letter-spacing: 0.4px;
}

.button_links {
  display: flex;
  justify-content: space-around;
  justify-items: center;
  width: 80%;
  margin: 10% 0 0 0%;
}

a {
  font-size: 15px;
  white-space: nowrap;
  text-align: center;
  width:130px;
  padding: 5px 10px;
  color: white;
  /* background-color: #d3d3d3; */
  background-color: #07c;
  margin-left: 30px;
  border-radius: 5px;
  transition: 0.6s;
  box-shadow: 1px 2px 2px  #888888;
  text-decoration: none;
}


a:hover {
  /* animation: example 2s infinite; */
  /* background-color: #0af; */
  background-color: #0af;
  transition: all 0.5s ease;
}

/* @keyframes example {
  0%   {
    background-color: white;
    color:black
    }
  100% {
    background-color: #0af;
    color:white;
    }
} */
</style>
