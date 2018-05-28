<template>
  <div>
    <h1>{{messages}}：{{$route.name}}:{{$route.params.username}}:{{$route.params.school}}</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        messages:"hello,我是demo2"
      }
    }
  }
</script>
<style scoped>
  h1{
    color: seagreen;
  }
</style>
