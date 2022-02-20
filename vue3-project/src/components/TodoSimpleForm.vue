<template>
  <form @submit.prevent="onSubmit">
    <div class="d-flex">
      <div class="flex-grow-1 mr-3">
        <input
          class="form-control"
          type="text"
          v-model="todo"
          placeholder="Type new todo"
        />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">ADD</button>
      </div>
      <!-- value뿐 아니라 모든 속성을 바인딩 해줄수 있음 -->
    </div>

    <div v-show="hasError" class="error">This field cannot be empty</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ['add-todo'],
  setup(props, context) {
    const todo = ref("");
    const hasError = ref(false);

    const onSubmit = () => {
      if (todo.value == "") {
        hasError.value = true;
      } else {
        context.emit('add-todo', {
          id: Date.now(),
          subject: todo.value,
          completed: false,
        });
        //context는 부모 컨텍스트에 보내줄때 쓰는 파라미터
        todo.value = "";
        hasError.value = false;
      }
    };

    return {
        todo,
        hasError,
        onSubmit
    }
  },
};
</script>
