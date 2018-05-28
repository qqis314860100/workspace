<template>
  <div>
    <h1>{{messages}}：{{$route.name}}:{{$route.params.username}}:{{$route.params.school}}</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        messages:"hello,我是demo1标题"
      }

    }
  }
</script>
<style scoped>
  h1{
    color: springgreen;
  }
</style>
