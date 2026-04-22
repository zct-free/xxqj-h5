<template>
  <div class="artboard-page">
    <div class="phone-shell">
      <div v-if="artboard === 'home'" class="functional-home">
        <!-- 示例：功能性界面内容 -->
        <h1 class="title">欢迎来到首页</h1>
        <button class="action-button" @click="handleClick">点击我</button>
      </div>
      <div v-else class="missing-tip">未找到画板：{{ artboard }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  artboard: {
    type: String,
    required: true,
  },
});

const handleClick = () => {
  alert("按钮被点击了！");
};
</script>

<style lang="less" scoped>
.artboard-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #e9edf4 0%, #d7dde9 100%);
  display: flex;
  justify-content: center;
  padding: 12px 10px;
  box-sizing: border-box;
}

.phone-shell {
  width: 100%;
  max-width: 430px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(17, 35, 64, 0.2);
  background: #fff;
  padding: 20px;
}

.functional-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
