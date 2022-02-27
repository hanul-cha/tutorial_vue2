import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "bay a car", checked: false },
      { id: 2, text: "go alar", checked: false },
    ],
    users: [],
  }, //데이터가 들어가는 공간
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
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
  actions: {
    addTodo({ commit }, value) {
      setTimeout(() => {
        commit("ADD_TODO", value);
      }, 2000);
    },
    getUsers({ commit }) {
      axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
        commit("SET_USERS", res.data);
      });
    },
  }, //함수가 들어가는 공간, 비동기적인 이후값을 바꾸게될 로직을 뮤테이션에 요청
  getters: {
    numberOfCompleted(state) {
      return state.todos.filter((todo) => todo.checked).length;
    },
  }, //뷰 컴포넌트에 compated 와 유사
});

/* 
action 과 mutations와 다른점은 비동기처리에 차이점이 있다.
여기서 promis 나 async 쓰면 되지 않을까 생각했는데 보다 vue생태계 적인 문제가있다. 

Mutations 에는 순차적인 로직들만 선언하고 
Actions 에는 비 순차적 또는 비동기 처리 로직들을 선언한다. 
이렇게 나누는 이유는 아래와 같다. Mutations 의 역할 자체가 State 관리에 주안점을 두고 있고. 
상태관리 자체가 한 데이터에 대해 여러 개의 컴포넌트가 관여하는 것을 효율적으로 관리하기 위함인데 
Mutations 에 비동기 처리 로직들이 포함되면 같은 값에 대해 여러 개의 컴포넌트에서 
변경을 요청했을 때, 그 변경 순서 파악이 어렵기 때문이다. 따라서, setTimeout() 이나 
서버와의 http 통신 처리 같이 결과를 받아올 타이밍이 예측되지 않은 로직은 Actions 에 선언한다.

어쨋든 action은 비동기 작업후 변경해야 되는 로직이 필요하기 때문에 비동기 작업후
mutations를 호출한다.

action에 있는 함수 콜백함수를 구조분해하면 commit도 있고 dispatch도 있음
아마 비동기 처리가 끝나고 다른 비동기 함수를 부르던가 바로 mutation해줄지 고를 수 있는걸로 보임
*/
