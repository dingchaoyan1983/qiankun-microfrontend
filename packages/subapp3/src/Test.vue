<template>
  <div class="container">
    <div class="content">
      <p>Test Vue 3 + TypeScript + Webpack 5</p>
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Test Vue 3 + TypeScript + Webpack 5')
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