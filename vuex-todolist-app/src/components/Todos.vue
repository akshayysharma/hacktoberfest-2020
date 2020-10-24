<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>


<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style scoped></style>