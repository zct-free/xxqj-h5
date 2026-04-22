<template>
  <div class="answer-page">
    <div class="top-search">
      <div class="search-container">
        <van-icon name="search" size="16" />
        <input type="text" placeholder="搜索题库" class="search-input" />
      </div>
    </div>

    <div class="content-wrapper">
      <div class="empty-state">
        <van-icon name="document-o" size="64" />
        <h3>答题中心</h3>
        <p>暂无答题内容</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.answer-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px;
}

.top-search {
  background-color: #e74c3c;
  padding: 15px;
  display: flex;
  align-items: center;
}

.search-container {
  flex: 1;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
}

.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  margin-left: 8px;
  flex: 1;
}

.content-wrapper {
  padding: 40px 20px;
  text-align: center;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.empty-state van-icon {
  color: #e74c3c;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.empty-state p {
  font-size: 14px;
  color: #999;
}
</style>