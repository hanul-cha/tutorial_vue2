<template>
  <div>Completed Todo : {{ numberOfCompleted }}</div>
</template>

<script>
export default {
  computed: {
    numberOfCompleted() {
      return this.$store.getters.numberOfCompleted;
    },
  },
};
</script>

<style></style>
