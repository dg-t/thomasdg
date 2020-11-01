import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import Home from './components/Home/AppHomePage.vue'
import Achievements from './components/Achievements/AppAchievements.vue'
import Contact from './components/contact/appContact.vue'
import About from './components/About/AboutMe.vue'
import RestaurantReview from './components/Achievements/Projects/Restaurant_review.vue'
import CatFacts from './components/Achievements/Projects/Cat_facts.vue'
import NinjaFight from './components/Achievements/Projects/Ninja_fight.vue'
import FilmFestival from './components/Achievements/Projects/Film_festival.vue'
import DiceGame from './components/Achievements/Projects/Dice_game.vue'
import QuoteGenerator from './components/Achievements/Projects/Quote_generator.vue'
import TodoTesting from './components/Achievements/Projects/Todo_testing.vue'
import ExpressFood from './components/Achievements/Projects/Express_food.vue'

import BaseHeading from './components/Header/BaseHeading.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About, meta: { aboutHeader: true } },
        { path: '/achievements', component: Achievements, meta: { achievementsHeader: true } },
        { path: '/achievements/restaurant-reviews', component: RestaurantReview, meta: { hideHeader: true } },
        { path: '/achievements/cat-facts', component: CatFacts, meta: { hideHeader: true } },
        { path: '/achievements/ninja-fight', component: NinjaFight, meta: { hideHeader: true } },
        { path: '/achievements/film-festival', component: FilmFestival, meta: { hideHeader: true } },
        { path: '/achievements/dice-game', component: DiceGame, meta: { hideHeader: true } },
        { path: '/achievements/quote-generator', component: QuoteGenerator, meta: { hideHeader: true } },
        { path: '/achievements/testing-todo-app', component: TodoTesting, meta: { hideHeader: true } },
        { path: '/achievements/express-food', component: ExpressFood, meta: { hideHeader: true } },
        { path: '/contact-me', component: Contact, meta: { contactFooter: true, headerSection: true } },
        { path: '/:notFound(.*)', redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
        // console.log(router.options.routes)
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    }
})

const app = createApp(App);

app.component('base-heading', BaseHeading);

app.use(router);

/** To avoid route initial transition */
// router.isReady().then(() => app.mount('#app'))


app.mount('#app')