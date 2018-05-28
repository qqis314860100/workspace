<template>
  <div>
    <h1>{{info}},我的名字叫:{{$route.name}},我就读于{{$route.params.username}}</h1>  </div>
</template>
<script>
  export default{
    data(){
      return{
        info:'大家好，我是hi2页面'
      }
    }
  }
</script>
<style scoped>
  h1{
    color: gold;
  }
</style>
