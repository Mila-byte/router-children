import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "user-profile" */ '@/components/home/UserProfile.vue')
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "gallery" */ '@/components/home/Gallery.vue')
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "blog" */ '@/components/home/Blog.vue'),
        children: [
          {
            path: ':id',
            name: 'videos',
            component: () => import(/* webpackChunkName: "video" */ '@/components/home/blog/Video.vue'),
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue'),
    children: [
      {
        path: 'smartphone',
        name: 'smartphone',
        component: () => import(/* webpackChunkName: "smartphone" */ '@/components/news/SmartPhone.vue')
      },
      {
        path: 'web-development',
        name: 'web-development',
        component: () => import(/* webpackChunkName: "web-development" */ '@/components/news/WebDevelopment.vue')
      },
      {
        path: 'webpack-news',
        name: 'webpack-news',
        component: () => import(/* webpackChunkName: "webpack-news" */ '@/components/news/WebDevelopment.vue')
      }
    ]
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  Vue: Vue,
  base: process.env.BASE_URL,
  routes
})

export default router
