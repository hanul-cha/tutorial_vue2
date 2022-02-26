<template>
  <div id="app" class="container">
    <h1 class="test-center">TodoApp</h1>
    <input type="text" class="w-100" placeholder="todo" />
    <hr />
    <Todo :key="todo.id" v-for="todo in todos" :todo="todo" />
  </div>
</template>

<script>
import Todo from "../../components/todo/Todo.vue";
export default {
  components: {
    Todo,
  },
  data() {
    return {
      todos: [
        { id: 1, text: "bay a car", checked: false },
        { id: 2, text: "go alar", checked: false },
      ],
    };
  },
};
</script>
