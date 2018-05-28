import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import HelloWord from '@/components/page/HelloWorld'
import errorMsg from '@/components/page/errorMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWord
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },{
      path:'*',
      component:errorMsg
    }
  ]
})
