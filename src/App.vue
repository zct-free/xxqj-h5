<template>
  <div id="app">
    <router-view />
    <div class="bottom-nav">
      <div class="nav-item" :class="{ active: isActive('/') }" @click="navigate('/')">
        <van-icon name="wap-home" />
        <span>首页</span>
      </div>
      <div class="nav-item" :class="{ active: isActive('/classroom') }" @click="navigate('/classroom')">
        <van-icon name="orders-o" />
        <span>课堂</span>
      </div>
      <div class="nav-center" :class="{ active: isActive('/study') }" @click="navigate('/study')">
        <div class="center-icon">
          <van-icon name="bookmark" size="32" />
        </div>
        <span>智</span>
      </div>
      <div class="nav-item" :class="{ active: isActive('/answer') }" @click="navigate('/answer')">
        <van-icon name="document-o" />
        <span>答题</span>
      </div>
      <div class="nav-item" :class="{ active: isActive('/mine') }" @click="navigate('/mine')">
        <van-icon name="user-o" />
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isActive = path => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path === path || route.path.startsWith(`${path}/`);
};

const navigate = path => {
  router.push(path);
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10px 0 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #666;
  flex: 1;
}

.nav-item.active {
  color: #e74c3c;
}

.nav-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #666;
  flex: 1;
  margin-bottom: -10px;
}

.nav-center.active {
  color: #e74c3c;
}

.center-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
  margin-bottom: 5px;
}

.nav-item span,
.nav-center span {
  margin-top: 5px;
}
</style>
