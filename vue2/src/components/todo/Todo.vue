<template>
  <div class="mb-2 d-flex">
    <input
      class=""
      type="checkbox"
      :checked="todo.checked"
      @change="toggleCheck"
    />
    <span
      class="ml-3 flex-grow-1"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration:line-through' : ''"
      >{{ todo.text }}</span
    >
    <button class="btn btn-danger btn-sm" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  methods: {
    toggleCheck(e) {
      this.$store.commit("TOGGLE_TODO", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    deleteTodo() {
      this.$store.commit("DELETE_TODO", this.todo.id);
    },
  },
};
</script>
