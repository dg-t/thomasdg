<template>

    <base-heading>What can I can offer...</base-heading>
    <section class="row container-fluid distribution_cards">

            <div class="custom_card col-sm-6 col-md-4" v-for="skill in skills" :key="skill.id">
                <div class="card ">
                    <img class="card-img-top" 
                        :src="skill.image" 
                        :alt="skill.title"
                        :style="{backgroundColor:skill.bgColor}"
                        >
                    <div class="card-body">
                        <h5 class="card-title">{{ skill.title }}</h5>
                        <p class="card-text">{{ skill.description }}</p>
                    </div>
                </div>
            </div>

    </section>
  
</template>

<script>

export default {
    data() {
        return {
            switchcolors: "",
            skills: [
                {
                    id: 1,
                    title: "Responsive",
                    description: `Since the very beginning, I provide Responsive Web Wesign ensures the creation of a 
                                    beautiful and flexible layout and guarantees the best 
                                    possible experience across multiple devices.`,
                    image: require("../../../assets/icons/skills_offer/responsive.svg"),
                    bgColor: "#fff675"
                },
                {
                    id: 2,
                    title: "Functioanlity",
                    description: `Fully customize a website functionality dictating what it can exactly do and how it works 
                                    with the implementation of powerful features. Providing the correct functionality is crucial 
                                    to the success of a website. `,
                    image: require("../../../assets/icons/skills_offer/functionality.svg"),
                    bgColor: "#5f9ea0"
                },
                {
                    id: 3,
                    title: "Web Desing",
                    description: `My approach to web design is to create a website with a beautiful layout and modern content structure
                                    while ensuring ease of use and simplicity to provide the audience with an enjoyable, and positive experience.
                                    `,
                    image: require("../../../assets/icons/skills_offer/web-design.svg"),
                    bgColor: "#ff5e5e"
                },
                {
                    id: 4,
                    title: "SEO",
                    description: `My search engine optimization (SEO) methods, will optimize the code of the website 
                                    to deliver faster performance and better user experience, increasing the quantity 
                                    and quality of traffic to the website.`,
                    image: require("../../../assets/icons/skills_offer/seo.svg"),
                    bgColor: "#6ffebb"
                },
                {
                    id: 5,
                    title: "Marketing Strategies",
                    description: `Maximize prospective customers by implementing a good marketing strategy and 
                                    social media management to attract potential customers to visit the website and 
                                    become regulars.`,
                    image: require("../../../assets/icons/skills_offer/marketing.svg"),
                    bgColor: "#5de7ff"
                },
                {
                    id: 6,
                    title: "After Care Support",
                    description: `Web development is constantly changing and evolving. The regular maintenance of a website is 
                                    just as important as building it, to ensure the website is free of bugs and glitches.`,
                    image: require("../../../assets/icons/skills_offer/support.svg"),
                    bgColor: "#ffd875"
                }
            ]
        }
    }
}
</script>

<style scoped>

/** GENERAL */
h5 {
    letter-spacing: 1px;
    font-weight: 300;
}

p {
    font-size: 80%;
    letter-spacing: 0.5px;
}

/** CARDS */

.distribution_cards {
    margin: auto;
    padding: 30px 20px;
}

.custom_card {
    padding: 30px 40px;
    transition: all 1s ease;
}

.custom_card:hover {
    transform: translateY(-20px);
    transition: all 0.8s ease;
}

/** CARDS IMG */

img {
    max-height: 150px;
    padding:10px;
    width: auto;
}

/** CARDS TEXT */

/* .card__body {
    height: 220px;
}  */


/** FLEXBOX */
/* .distribution_cards {
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px 0;
    max-width:1250px;
}

.custom_card {
    flex: 1 0 20%;
    height: auto;
    margin: 30px 3%;
    box-shadow: 1px 2px 2px  #888888;
    transition: all 1s ease;
} */

</style>
