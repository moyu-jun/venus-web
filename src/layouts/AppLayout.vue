<script setup lang="ts">
const currentYear: number = new Date().getFullYear()
</script>

<template>
  <div class="app-layout">
    <!-- header 部分 -->
    <header></header>

    <!-- 主体内容 -->
    <router-view />

    <!-- footer 部分 -->
    <footer>
      <p>@2020 - {{ currentYear }} By 莫语</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  max-width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 底部阴影增强效果 */
header::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
}

footer {
  width: 100%;
  height: 100px;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  color: white;
}
</style>
