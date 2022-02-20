<template>
  <div class="card" v-for="(todo, index) in propTodos" :key="todo.id">
    <div class="card-body p-2 d-flex align-items-center">
      <div class="form-check flex-grow-1">
        <input
          type="checkbox"
          class="form-check-input"
          :value="todo.completed"
          @change="toggleTodo(index)"
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
    const toggleTodo = (index) => {
      emit("toggle-todo", index);
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
