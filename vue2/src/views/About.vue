<template>
  <div>
    <h1 @mouseover="onOver" @mouseleave="onLeave">mac</h1>
    <div v-show="bool">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "개발자",
      bool: false,
      test: null,
    };
  },
  methods: {
    onOver() {
      this.test = setTimeout(() => {
        this.bool = true;
      }, 2000);
    },
    onLeave() {
      clearTimeout(this.test);
      this.bool = false;
    },
  },
};
</script>
