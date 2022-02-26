<template>
  <div>
    <Todo :key="todo.id" v-for="todo in todos" :todo="todo" />
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>
