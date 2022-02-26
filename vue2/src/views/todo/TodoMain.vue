<template>
  <div id="app" class="container">
    <h1 class="test-center">TodoApp</h1>
    <input
      v-model="todoText"
      @keyup.enter="addTodo"
      type="text"
      class="w-100"
      placeholder="todo"
    />
    <hr />
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
import Todo from "../../components/todo/Todo.vue";
export default {
  components: {
    Todo,
  },
  data() {
    return {
      todoText: "",
      todos: [
        { id: 1, text: "bay a car", checked: false },
        { id: 2, text: "go alar", checked: false },
      ],
    };
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.todoText = "";
    },
    toggle({ id, checked }) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
      console.log(this.todos);
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos.splice(index, 1);
    },
  },
};
</script>
