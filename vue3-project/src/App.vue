<template>
  <div>
    {{ name }}
  </div>
  <button 
    class="btn btn-primary"
    v-on:click="update"
  >click</button>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';

export default {
  setup() {
    const name = ref("hanulCha");
    const arrayName = reactive({
      id: 1
    })
    //객채, 오브젝트는 reactive를 사용 프로퍼티로 바로 접근가능하다

    /* const greeting = (name) => {
      return "hello, " + name;
    }
    const greet = greeting(name); */

    const update = () => {
      name.value = "chahanul"
      arrayName.id = 2
    }

    return {
      name,
      arrayName,
      update
    }
  }
}
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
</script>

<style>

</style>