<template>
  <div>
    <h1>{{errorMsg}}</h1>
    <h1>此页面不存在</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        errorMsg:'ERROR:404'
      }
    }
  }
</script>
