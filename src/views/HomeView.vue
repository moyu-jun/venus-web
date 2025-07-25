<script setup lang="ts">
// TODO
</script>

<template>
  <div class="main-container">
    <main class="main"><p>主界面</p></main>
    <aside class="aside">aside</aside>
  </div>
</template>

<style scoped>
.main-container {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main {
  height: 150vh;
  background-color: #ecf5ff;
  flex-grow: 1;
}

.aside {
  width: 200px;
  background-color: #d9ecff;
}
</style>
