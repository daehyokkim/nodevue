import Vue from 'vue'
import Router from 'vue-router'
import Read from "@/components/read/read.vue"
import Create from "@/components/create/create.vue"
import Detail from "@/components/detail/detail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
  
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
  ]
})
