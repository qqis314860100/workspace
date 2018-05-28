<template>
  <div>
    <h1>{{title}}</h1>
    <p>stuName:{{$route.params.stuName}}</p>
    <p>stuNo:{{$route.params.stuNo}}</p>
    <p>school:{{$route.params.school}}</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        title:'params page'
      }
    }
  }
</script>
