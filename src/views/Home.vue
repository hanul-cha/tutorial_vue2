<template>
  <div>
    <h1>{{ title }} 인 {{ title2 }}</h1>
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    
    <select class="form" v-model="region">
        <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
    </select>

    <table class="table">
        <tr :key="i" v-for="(d,i) in options">
            <td>{{d.v}}</td>
            <td>{{d.t}}</td>
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "개발자",
      title2: "차한울",
      input1: "1234",
      options: [
          {v:"s", t:"seoul"},
          {v:"j", t:"jeju"},
          {v:"b", t:"busan"},
      ],
      region: "j"
    };
  },
  watch: {
      input1() {
          console.log(this.input1)
      }
  },
  methods: {
    getData() {
      console.log(this.input1);
    },
  },
  beforCreate() {
    console.log("beforCreate");
  },
  created() {
      console.log("created")
  },
  beforeMount() {
      console.log("beforeMount")
  },
  mounted() {
      console.log("mounted")
  },
  beforeUpdate() {
      console.log("beforeUpdate")
  },
  updated() {
      console.log("updated")
  },
  beforeDestroy() {
      console.log("beforeDestroy")
  },
  destroyed() {
      console.log("destroyed")
  },
};
</script>
