import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppPosts from '../components/AppPosts'

const routes = [{
    path: '/posts',
    component: AppPosts
}]

export const router = new VueRouter({
    routes: routes,
    mode: 'history'
})