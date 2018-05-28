<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{count}}</h3>
    <p>
      <button @click="add(5)">+</button>
      <button @click="reduce(3)">-</button>
    </p>
    <p>
      <button @click="addAction()">+</button>
      <button @click="reduceAction()">+</button>
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  export default {
    data(){
      return{
        msg:'when happiness knocks at the door'
      }
    },
   computed:{
//     ...mapState(['count']),
//     count(){
//        return this.$store.getters.count;
//     }
     count(){
       return this.$store.state.a.count;
     }
   },
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
