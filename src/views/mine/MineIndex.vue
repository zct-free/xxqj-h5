<template>
  <div class="mine-page">
    <div class="top-search">
      <div class="search-container">
        <van-icon name="search" size="16" />
        <input type="text" placeholder="搜索" class="search-input" />
      </div>
    </div>

    <div class="content-wrapper">
      <div class="user-profile">
        <van-image round width="80" height="80" :src="userAvatar" />
        <div class="user-info">
          <h3>用户名</h3>
          <p>ID: 1000001</p>
        </div>
      </div>

      <div class="menu-section">
        <div class="menu-item">
          <van-icon name="star-o" />
          <span>我的学习</span>
          <van-icon name="arrow" />
        </div>
        <div class="menu-item">
          <van-icon name="gift-o" />
          <span>我的成就</span>
          <van-icon name="arrow" />
        </div>
        <div class="menu-item">
          <van-icon name="credit-card-o" />
          <span>我的收藏</span>
          <van-icon name="arrow" />
        </div>
        <div class="menu-item">
          <van-icon name="settings-o" />
          <span>设置</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userAvatar = '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
</script>

<style scoped>
.mine-page {
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
  padding: 20px;
}

.user-profile {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  margin-left: 15px;
}

.user-info h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.user-info p {
  font-size: 14px;
  color: #999;
}

.menu-section {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item span {
  flex: 1;
  margin-left: 15px;
  font-size: 14px;
  color: #333;
}

.menu-item van-icon:first-child {
  color: #e74c3c;
}

.menu-item van-icon:last-child {
  color: #999;
}
</style>