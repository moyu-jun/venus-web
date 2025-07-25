<script setup lang="ts">
import { RouterView } from 'vue-router'
import { zhCN, dateZhCN } from 'naive-ui/es'
</script>

<template>
  <n-config-provider class="global-config-provider" :locale="zhCN" :date-locale="dateZhCN">
    <RouterView />
  </n-config-provider>
</template>
