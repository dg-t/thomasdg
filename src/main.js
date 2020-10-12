import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import Home from './components/Home/AppHomePage.vue'
import Achievements from './components/Achievements/AppAchievements.vue'
import Contact from './components/ContactMe.vue'
import About from './components/AboutMe.vue'
import RestaurantReview from './components/Achievements/Projects/Restaurant_review.vue'
import CatFacts from './components/Achievements/Projects/Cat_facts.vue'
import NinjaFight from './components/Achievements/Projects/Ninja_fight.vue'
import FilmFestival from './components/Achievements/Projects/Film_festival.vue'
import DiceGame from './components/Achievements/Projects/Dice_game.vue'
import QuoteGenerator from './components/Achievements/Projects/Quote_generator.vue'
import TodoTesting from './components/Achievements/Projects/Todo_testing.vue'
import ExpressFood from './components/Achievements/Projects/Express_food.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/achievements', component: Achievements },
        { path: '/achievements/1', component: RestaurantReview, meta: { hideHeader: true } },
        { path: '/achievements/2', component: CatFacts, meta: { hideHeader: true } },
        { path: '/achievements/3', component: NinjaFight, meta: { hideHeader: true } },
        { path: '/achievements/4', component: FilmFestival, meta: { hideHeader: true } },
        { path: '/achievements/5', component: DiceGame, meta: { hideHeader: true } },
        { path: '/achievements/6', component: QuoteGenerator, meta: { hideHeader: true } },
        { path: '/achievements/7', component: TodoTesting, meta: { hideHeader: true } },
        { path: '/achievements/8', component: ExpressFood, meta: { hideHeader: true } },
        { path: '/contact-me', component: Contact }
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app')