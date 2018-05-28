<template>
  <div>
    <h1>{{info}}</h1>
    <router-view></router-view>

  </div>
</template>
<script>
  export default {
    name:'hello',
    data(){
      return{
        info:"我是hello页面"
      }
    }
  }
</script>
<style scoped>
  h1{
    color: red;
  }
</style>
