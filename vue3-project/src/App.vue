<template>
  <div class="container">
    <h2>To-Do List</h2>
    <input
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <hr />
    <TodoSimpleForm @add-todo="addTodo" />

    <div v-if="!filteredTodos.length">There is nothing to display</div>
    <TodoList
      :propTodos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoSimpleForm,
    TodoList,
  },
  setup() {
    //객채, 오브젝트는 reactive를 사용 프로퍼티로 바로 접근가능하다
    const todos = ref([]);
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    }; //바뀌는 값이 아니기 때문에 일반 변수로 선언

    const addTodo = (todo) => {
      todos.value.push(todo);
    };

    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const searchText = ref('');
    const filteredTodos = computed(() => {
      if(searchText.value) {
        return todos.value.filter(todo => {
          return todo.subject.includes(searchText.value);
        })
      }

      return todos.value
    })

    return {
      todos,
      addTodo,
      todoStyle,
      deleteTodo,
      toggleTodo,
      searchText,
      filteredTodos
    };
  },
};
/* 
이전 vue2에선 options api를 사용했다.
vue2버전에서 간단하게 사용해봤는데 가독성도 별로고 제일문제는 나뉘어진 로직이 복잡했음
vue3부턴 컴포지션 api 사용을 권장하는 듯 함
*/

/* 
vue2에선 두게 이상의 태그가 있다면 부모태그로 감싸주어야 했다.
이는 react에선 아직도 지켜야하는 문법인데 react에선 비어있는 프레그먼트로 해결가능했음
vue3에선 이런 빈 플레그먼트 없이도 작성가능하다
*/

/* 
v-on: == @
e.preventDefalt할 필요 없이
vue에선 이벤트를 걸때 속성에 prevent프로퍼티를 넣어주면됨

style바인딩
:style="todo.completed? todoStyle:{}" 삼항연산자로 
const todoStyle = {
      textDecoration: "line-through",
      color: 'gray'
    }
이런 오브젝트를 포함한다는 뜻으로 사용

class 바인딩
:class="{ifTodoCheck: todo.completed}"    :를 기준으로 참이면 클래스를 추가 아니면 제거
*/

/* 
v-show는 렌더링 자체는 되고 display:none으로 표현해줌
v-if는 렌더링도 안해줌
show는 초기렌더링 비용이 있는대신 이후 리소스가 적음
if는 초기렌더링이 없는대신 이후 리소스 소모가 큼

처음에 데이터를 받아와서 존재유무로 노출시키고 싶을때(예를들어 로그인)에
v-if쓰면 될거같고
노출버튼같이 자주 사용하는 기능같은경우엔 v-show쓰면 될거같음

react에선 전부 v-if로 작성하게 되있음 조건에 충족하면 렌더링해주는 방식이라
커스텀을 하면 할수 있지만 기본적으로 v-if임
vue에서 이렇게 두가지 선택지를 미리 준다는게 좀 매력적이네
*/

/* 
조금 써보니까 vue2와 vue3 의 가장 큰 차이점은
vue는 객체형 프로그래밍에 초점을 맞춘거같다
vue2의 기본확장을 보면 js의 class과 아주 흡사한 모습이다
함수정의도 메서드의 형태를 띄고 있고 변수도 프로퍼티 선언처럼 생겼음

근데 vue3보면 함수형 프로그래밍에 초점을 둔것같아보인다
변수부터 함수까지 정의 모양이 react에서 사용하던 모습과 흡사함
내 개인적인 생각엔 typescript호환성을 높이기 위해 사용한게 아닌가한다

함수형 프로그래밍엔 타입지정이 필수듯이 typescript도
함수형 정의가 필요함
*/
</script>

<style>
.error {
  color: red;
}
.ifTodoCheck {
  text-decoration: line-through;
  color: grey;
}
</style>
