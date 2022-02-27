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
    <users />
  </div>
</template>

<script>
import TodoList from "../../components/todo/TodoList.vue";
import Users from "../../components/todo/Users.vue";

export default {
  components: {
    TodoList,
    Users,
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
