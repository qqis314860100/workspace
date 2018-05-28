<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <router-view name="left" style="font-size: x-small;float: left;background: silver;width: 50%;  height: 500px;"></router-view>
    <router-view name="right" style="float: right;background: seashell;width: 50%;  height: 500px;"></router-view>
    <router-link to="/">HelloWorld</router-link>|
    <router-link :to="{name:'hello',params:{username:'tzq'}}">hello</router-link>|
    <router-link :to="{name:'hi1',params:{username:'闽江学院'}}">hi1</router-link>|
    <router-link :to="{name:'hi2',params:{username:'清华大学'}}">hi2</router-link>
    <router-link to="/params/TangZhiQiang/5167101354/MinJiangUniversity">params</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/goParams/heheda/123456789/MinJiangUniversity">goParams</router-link>
    <router-link to="goHello">goHello</router-link>
    <router-link to="/home1">hom1</router-link>
    <p>{{$route.name}}</p>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter{
    opacity: 0;
  }
  .fate-enter-active{
    transition:opacity .5s ;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
