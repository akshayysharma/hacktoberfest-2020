<template>
  <div>
    <AddTodo />
    <Todos v-bind:todos="allTodos" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const todoLimit = `limit=10`;

export default {
  name: "home",
  components: {
    AddTodo,
    Todos
  },
  methods: {
    ...mapActions(["getTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  }
};
</script>

<style scoped></style>