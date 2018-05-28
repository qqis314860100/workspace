<template>
  <div>
    <h1>{{info}}</h1>
    <p>stuName:{{$route.params.stuName}}</p>
    <p>stuNo:{{$route.params.stuNo}}</p>
    <p>school:{{$route.params.school}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        info:'params page'
      }
    }
  }
</script>
