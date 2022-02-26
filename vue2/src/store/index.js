import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {}, //데이터가 들어가는 공간
  mutations: {}, //실질적으로 데이터를 바꾸는 공간
  actions: {}, //함수가 들어가는 공간, 비동기적인 이후값을 바꾸게될 로직을 뮤테이션에 요청
  getters: {}, //뷰 컴포넌트에 compated 와 유사
});
