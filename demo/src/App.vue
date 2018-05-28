<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in">
       <router-view/>
    </transition>
      <div>
        <button @click="backOff">后退</button>
        <button @click="forward">前进</button>
        <button @click="goHome">返回首页</button>
      </div>
    <router-view name="left" ></router-view>
    <router-view name="right"></router-view>
    <router-link to="/">HelloWorld</router-link>
    <router-link :to="{name:'demo1',params:{username:'tzq',school:'闽江学院'}}">demo1</router-link>
    <router-link :to="{name:'demo2',params:{username:'xjp',school:'清华大学'}}">demo2</router-link>
    <router-link to="/params/TangZhiQiang/1995/MingJiangUniversity">params</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    backOff(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opcity 0.5s  ;
  }
</style>
