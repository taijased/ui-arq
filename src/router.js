import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)




const Index = () => import('./components/Index.vue')
const Error404 = () => import('./components/Error404.vue')
const PrivacyPolicy = () => import('./components/PrivacyPolicy.vue')
const PrivacyPolicyChildren = () => import('./components/PrivacyPolicyChildren.vue')




export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/privacypolicy',
      component: PrivacyPolicy
    },
    {
      path: '/bc',
      component: PrivacyPolicyChildren
    },
    { 
      path: "*", 
      component: Error404
    }
  ]
})
