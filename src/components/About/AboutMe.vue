<template>
  <div>

    <achievements-header></achievements-header>

    <section class="container-fluid row about__section">
      <div class="row container-fluid odd__about">
        <div class="container-fluid col-12">
          <h4>A little bit about me...</h4>
          <p>Hi! I am Thomas, a web developer in Barcelona, Spain. 
            <br />
            I born on January 1st, 1990 in Milano, Italy. In 2011 I moved to Barcelona, Spain, 
            where I am currently living with my wonderful wife. 
            <br />
            I also spent five years travelling around Australia, where I had the opportunity to learn the English language. 
            <br />
            Other than that, I travelled in many different places around Europe, South America, Southeast Asia and Japan.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div class="row container-fluid even__about">
        <div class="container-fluid col-lg-6 pr-lg-5">
          <h4>My passions</h4>
          <p>
            There are three things I love the most, programming, travel, and food. 
            <br />
            <br />
            I have worked as a chef for some time in my life, and I quickly learned to work under pressure, with reliability and precision.
            <br />
            In 2018, I came back to Barcelona, and I decided to pursue the biggest passion I always had in my life, becoming a web developer.
            <br />
            The reason why I love so much this job is that truly makes me feel accomplished. 
            <br />
            When I am coding a program, or an application, or a website, I feel like I am creating something from nothing. 
            <br />
            A simple idea becomes something real with some time and dedication. That makes me feel fulfilled.
            <br />
            <br />
          </p>
        </div>
        <div class="container image_container col-lg-6">
          <img src="../../assets/about/travel.jpg" class="img-fluid img_project" alt="travel">
        </div>
      </div>

      <div class="row container-fluid odd__about">
        <div class="container-fluid col-12">
          <h4>Where I am now...</h4>
          <p>
            I got my start in the IT industry working full time as an eCommerce Webmaster Configurator at Sopra Steria, for Nespresso Company, where I currently am.
            <br />
            At night I am a full-time, self-taught student, studying the art of programming. 
            <br />
            I am passionate about many technologies, and I love to keep learning new technologies every day.
            <br />
            <br />
            I mostly carried out my achievements with the use of HTML, CSS, JavaScript, Vue.js, and Node.js tracked with the git version control system.
            <br />
            I also have project experience with Unit Testing frameworks like 
            Jasmine or Jest, other front-end frameworks/libraries like React, and  backend language like Python. 
            <br />
            I enjoy Web design and give attention to details. I have good problem-solving and analytic skills.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div class="row container-fluid even__about">
        <div class="col-lg-5 image_container container">
          <img src="../../assets/about/dream-min.jpg" class="img-fluid img_project" alt="dream">
        </div>
        <div class="container-fluid col-lg-6">
          <h4>My Dreams</h4>
          <p>
            I travelled, I had fun, and I met a lot of people from everywhere around the world. <br />
            Now my main goal is to strive in my career and improve the quality of life for my family.
            <br />
            <br />
            My biggest dream is becoming an Amazing Senior Web Developer for a Company that promotes internal career growth and value hard work, honesty, and loyalty.
            <br />
            I like the idea, and the possibility to be part of a Team that try to change the world for the best.
          </p>
        </div>
      </div>

      <div class="row container-fluid odd__about">
        <div class="container-fluid col-md-12">
          <h4>My Qualifications</h4>
          <p>
            I successfully completed a Bachelor-Level Diploma in Web Development during one full year,
            and I am currently studying a degree in an online American University in Computer Science.
            <br />
            Other qualifications I have are the Italian High school in Science, completed in Barcelona, Spain, and the Diploma in Hospitality Management, completed in Perth, Australia.
            <br />
          </p>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import AchievementsHeader from '../Header/SectionsHeader.vue';

export default {
  components: {
    AchievementsHeader
  }
}
</script>

<style scoped>

/** GENERAL */

.about__section {
  margin: 0;
  padding: 20px 0;
}

.odd__about {
  padding: 3%;
  margin: 0;
}

.even__about {
  padding: 3%;
  margin: 0;
  background-color: #f4f4f4;
}

/** GENERAL TEXT */
p {
  font-size: 80%;
  letter-spacing: 0.5px;;
}

h4 {
  padding: 20px;
  letter-spacing: 2px;;
}

/** IMAGES */

.image_container {
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
}

.img_project {
  filter: brightness(50%);
  transform: rotate(10deg);
  padding: 0 3%;
  transition: all 1s ease;
}

.img_project:hover {
  transform: scale(1.05);
  filter: brightness(100%);
}

/** MEDIA QUERY */

@media only screen and (max-width: 991px) {
  /** IMAGE PADDING */
  .img_project {
    padding: 7% 0;
  }
}

@media only screen and (max-width: 480px) {

  /** IMAGE */

  .img_project {
  filter: brightness(100%);
  transform: rotate(0);
  padding: 7% 0;
  }
}

</style>
