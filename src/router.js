import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)




const Index = () => import('./components/Index.vue')
const Error404 = () => import('./components/Error404.vue')
const PrivacyPolicy = () => import('./components/PrivacyPolicy.vue')
const PrivacyPolicyChildren = () => import('./components/PrivacyPolicyChildren.vue')
const Privileges = () => import('./components/form/Privileges.vue')
const BarcodeViewer = () => import('./components/BarcodeViewer.vue')





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
      path: '/privileges',
      component: Privileges
    },
    {
      path: '/bc',
      component: PrivacyPolicyChildren
    },
    {
      path: '/barcodeviewer',
      component: BarcodeViewer
    },
    { 
      path: "*", 
      component: Error404
    }
  ]
})
