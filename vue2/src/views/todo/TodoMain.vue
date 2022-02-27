<template>
  <div id="app" class="container">
    <h1 class="test-center">TodoApp</h1>
    <input
      @keyup.enter="addTodo"
      v-model="todoText"
      type="text"
      class="w-100"
      placeholder="todo"
    />
    <hr />
    <todo-list />
  </div>
</template>

<script>
import TodoList from "../../components/todo/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo(e) {
      /* this.$store.commit("ADD_TODO", e.target.value); */
      this.$store.dispatch("addTodo", e.target.value);
      this.todoText = "";
    },
  },
};
</script>
