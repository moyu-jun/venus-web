<script setup lang="ts">
import { config } from '@/config'
const currentYear: number = new Date().getFullYear()

// 菜单项
const menuItems = [
  { title: '首页', path: '/' },
  { title: '分类', path: '/categories' },
  { title: '标签', path: '/tags' },
  { title: '关于', path: '/about' },
]
</script>

<template>
  <div class="app-layout">
    <!-- header 部分 -->
    <header>
      <div class="logo-container">
        <img src="@/assets/images/logo.svg" alt="logo" /><span>{{ config.appTitle }}</span>
      </div>
      <nav class="nav-container">
        <ul class="menu-list">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <router-link :to="item.path" class="menu-link" active-class="active">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

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
  display: flex;
  padding: 0 32px;
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

.logo-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.logo-container img {
  width: 32px;
  height: 32px;
}

.logo-container span {
  margin-left: 20px;
  font-size: 24px;
  font-weight: 800;
  color: var(--color-primary);
}

.nav-container {
  display: flex;
  align-items: center;
}

.menu-list {
  list-style: none;
}

.menu-item {
  display: inline-block;
  margin-left: 20px;
}

.menu-link {
  display: block;
  padding: 8px 12px;
  color: var(--color-gray-8);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}
.menu-link:hover,
.menu-link.active {
  color: var(--color-primary);
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
