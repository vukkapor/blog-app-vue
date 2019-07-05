import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppPosts from '../components/AppPosts'
import SinglePost from '../components/SinglePost'
import AddPost from '../components/AddPost'

const routes = [{
    path: '/posts',
    component: AppPosts
  },
  {
    path: '/post/:id',
    component: SinglePost
  },
  {
    path: '/add',
    component: AddPost
  },
  {
    path: '/edit/:id',
    component: AddPost
  }
]

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})