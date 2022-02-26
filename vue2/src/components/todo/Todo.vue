<template>
  <div>
    <input type="checkbox" :checked="todo.checked" @change="toggleCheck" />
    <span class="ml-3">{{ todo.text }}</span>
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
      this.$emit("toggle-check", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
  },
};
</script>
