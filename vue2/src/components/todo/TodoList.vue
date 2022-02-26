<template>
  <div>
    <Todo
      :key="todo.id"
      v-for="todo in todos"
      :todo="todo"
      @toggle-check="toggle"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggle(value) {
      this.$emit("toggle-check", value);
    },
    deleteTodo(todoId) {
      this.$emit("delete-todo", todoId);
    },
  },
};
</script>
