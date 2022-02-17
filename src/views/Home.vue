<template>
    <div>
        <h1>{{title}} 인 {{title2}}</h1>
        <input type="text" v-model="input1" />
        <button type="button"></button>
        <p>{{input1}}</p>
    </div>
</template>
<script>

export default {
    data() {
        return {
            title:"개발자",
            title2:"차한울",
            input1:"1234"
        }
    }
};
</script>
