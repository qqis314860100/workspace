 import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
 import hi1 from '@/components/hi1'
 import hi2 from '@/components/hi2'
 import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:hello,
        left:hi1,
        right:hi2
      },
      alias:'/home1'
    },{
      path:'/tzq',
      name:'tzq',
      components:{
        default:hello,
        left:hi2,
        right:hi1
      }
    },{
      path:'/hello',
      component:hello,
      children:[
        {path:'/',name:'hello',component:hello},
        {path:'hi1',name:'hi1',component:hi1},
        {path:'hi2',name:'hi2',component:hi2}
      ]
    },
    {
      path:'/params/:stuName/:stuNo/:school',
      component:params
    },{
      path:'/home',
      redirect:'/'
    },{
      path:'/goParams/:stuName/:stuNo/:school',
      redirect:'/params/:stuName/:stuNo/:school'
    },{
      path:'/goHello',
      redirect:'/hello'
    }
  ]
})
