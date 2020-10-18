<template>
  <header>
    <h1>Todo List Application</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: black;
  color: white;
  padding-top: 30px;
  font-size: 1em;
  text-align: center;
}

header a {
  color: #ffff;
  padding-right: 5px;
  text-decoration: none;
}

#nav {
  text-align: center;
  margin-top: 10px;
  padding-bottom: 30px;
}
</style>