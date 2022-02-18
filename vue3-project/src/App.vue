<template>
  <div class="container">
    <h2>To-Do List</h2>
    <form action="">
      <input type="text" v-model="name" />
      <!-- value뿐 아니라 모든 속성을 바인딩 해줄수 있음 -->
      <button class="btn btn-primary" @click="onSubmit">click</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const name = ref("hanulCha");
    //객채, 오브젝트는 reactive를 사용 프로퍼티로 바로 접근가능하다

    /* const greeting = (name) => {
      return "hello, " + name;
    }
    const greet = greeting(name); */

    const onSubmit = () => {
      console.log(name.value);
    };

    return {
      name,
      onSubmit,
    };
  },
};
/* 
이전 vue2에선 options api를 사용했다.
vue2버전에서 간단하게 사용해봤는데 가독성도 별로고 제일문제는 나뉘어진 로직이 복잡했음
vue3부턴 컴포지션 api를 사용함
*/

/* 
vue2에선 두게 이상의 태그가 있다면 부모태그로 감싸주어야 했다.
이는 react에선 아직도 지켜야하는 문법인데 react에선 비어있는 프레그먼트로 해결가능했음
vue3에선 이런 빈 플레그먼트 없이도 작성가능하다
*/

/* 
v-on: == @
 */
</script>

<style></style>
