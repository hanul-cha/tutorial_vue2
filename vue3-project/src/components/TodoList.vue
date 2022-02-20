<template>
  <div class="card" v-for="(todo, index) in propTodos" :key="index">
    <div class="card-body p-2 d-flex align-items-center">
      <div class="form-check flex-grow-1">
        <input
          type="checkbox"
          class="form-check-input"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <label
          class="form-check-labal"
          :class="{ ifTodoCheck: todo.completed }"
        >
          {{ todo.subject }}
        </label>
      </div>
      <div>
        <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-todo", "delete-todo"],
  props: {
    propTodos: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toggleTodo = (id) => {
      emit("toggle-todo", id);
    };

    const deleteTodo = (id) => {
      emit("delete-todo", id);
    };
    return {
      toggleTodo,
      deleteTodo,
    };
  },
};
</script>

<style></style>
