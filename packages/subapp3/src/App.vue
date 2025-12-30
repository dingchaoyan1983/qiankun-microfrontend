<template>
  <div class="container">
    <h1 class="title">SubApp3 - Vue3</h1>
    <p class="description">This is a Vue3 sub-application powered by qiankun</p>
    <div class="content">
      <p>Vue 3 + TypeScript + Webpack 5</p>
      <p>{{ message }}</p>
    </div>
  </div>
  <Test />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Test from '@/Test.vue'
const message = ref('SubApp3 - Vue3')
</script>

<style scoped lang="less">
.container {
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.content p {
  margin: 10px 0;
  font-size: 1rem;
}
</style>
