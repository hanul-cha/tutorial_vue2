import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "bay a car", checked: false },
      { id: 2, text: "go alar", checked: false },
    ],
  }, //데이터가 들어가는 공간
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos.splice(index, 1);
    },
  }, //실질적으로 데이터를 바꾸는 공간
  actions: {}, //함수가 들어가는 공간, 비동기적인 이후값을 바꾸게될 로직을 뮤테이션에 요청
  getters: {}, //뷰 컴포넌트에 compated 와 유사
});
