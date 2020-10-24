<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" @change="onChange" />
      {{ todo.title }}
      <button v-on:click="onClick" class="del">x</button>
    </p>
  </div>
</template>
 
<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["editTodo", "deleteTodo"]),
    onChange() {
      let editedTodo = { ...this.todo };
      editedTodo.completed = !editedTodo.completed;
      this.editTodo(editedTodo);
    },
    onClick() {
      this.deleteTodo(this.todo);
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 12px;
  border-bottom: 1px #ccc dotted;
  text-transform: capitalize;
  font-size: 1em;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>