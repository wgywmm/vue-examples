import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/layout/container',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Container.vue')
  },
  {
    path: '/layout/box-sizing',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/BoxSizing.vue')
  },
  {
    path: '/layout/display',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Display.vue')
  },
  {
    path: '/layout/floats',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Floats.vue')
  },
  {
    path: '/layout/clear',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Clear.vue')
  },
  {
    path: '/layout/object-fit',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ObjectFit.vue')
  },
  {
    path: '/layout/object-position',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ObjectPosition.vue')
  },
  {
    path: '/layout/overflow',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Overflow.vue')
  },
  {
    path: '/layout/overscroll-behavior',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/OverscrollBehavior.vue')
  },
  {
    path: '/layout/position',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Position.vue')
  },
  {
    path: '/layout/top-right-bottom-left',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/TopRightBottomLeft.vue')
  },
  {
    path: '/layout/visibility',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Visibility.vue')
  },
  {
    path: '/layout/z-index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ZIndex.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
