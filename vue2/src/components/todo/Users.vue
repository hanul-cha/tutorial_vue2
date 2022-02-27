<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
  },
};

/* 
        created
        처음보고 mounted와 같은데 뭐가 다를까 했다.
        created는 인스턴스가 작성된 후 동기적으로 호출된다. 즉 마운트가 되기 전에 
        작동하기 때문에 데이터 초기화의 목적으로 사용하기 좋다. 데이터를 미리 준비하는것임 이건 뭔가 next.js의 ssrprops기능이랑 비슷하다
        created에선 엘리먼트에 접근하는건 어려워 보인다 실제로 $el속성을 사용하지 못한다고 한다.(el속성은 좀더 알아봐야 할듯)
        그에비해 mounted는 인스턴스가 마운트 된 직후 호출되기 때문에 el에도 접근가능하다.

        정리하자면 created는 데이터 초기화(ex, 마운트되기전 쿼리를 날려 유저정보, 제품리스트를 가지고 오는)에 사용하고
        mounted는 엘리먼트 조작 또는 엘리먼트가 다 생성된후 실행하고 싶은 로직을 쓸때 자주 사용한다 한다.
    */
</script>
