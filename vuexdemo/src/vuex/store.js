import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  count:5
}
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state,n){
    state.count-=n;
  }
}
const getters={
    count:function () {
      return state.count+=100;
    }
}
const actions={
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('add',10)},2000);
  },
  reduceAction(context){
    context.commit('reduce',10);
  }
}
const moduleA={
  state,mutations,getters,actions
}
export default new Vuex.Store({
  modules:{a:moduleA}
})
