import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import leftDemo from '@/components/demo1'
import rightDemo from '@/components/demo2'
import params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        left:leftDemo,
        right:rightDemo
      }
    },{
      path:'/tzq',
      components:{
        default:HelloWorld,
        left:rightDemo,
        right:leftDemo
      },

    },{
      path:'/demo1',
      name:'demo1',
      component:leftDemo
    },{
      path:'/demo2',
      name:'demo2',
      component:rightDemo,
      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
      }
    },{
      path:'/params/:stuName(\\D+)/:stuNo(\\d+)/:school',
      component:params
    },{
      path:"*",
      component:Error
    }
  ]
})
