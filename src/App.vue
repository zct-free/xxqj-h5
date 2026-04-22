<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" @change="onTabChange" active-color="#1a73e8" inactive-color="#999">
      <van-tabbar-item name="home" icon-prefix="van-icon" to="/">
        <template #icon>
          <van-icon name="wap-home" />
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item name="classroom" icon-prefix="van-icon" to="/classroom">
        <template #icon>
          <van-icon name="orders-o" />
        </template>
        课堂
      </van-tabbar-item>
      <van-tabbar-item name="study" icon-prefix="van-icon" to="/study">
        <template #icon>
          <van-icon name="bookmark" />
        </template>
        学习
      </van-tabbar-item>
      <van-tabbar-item name="suggestions" icon-prefix="van-icon" to="/suggestions">
        <template #icon>
          <van-icon name="edit" />
        </template>
        献策
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const active = ref('home')

const onTabChange = (index) => {
  console.log('Tab changed:', index)
}

watch(() => route.path, (newPath) => {
  if (newPath.startsWith('/classroom')) {
    active.value = 'classroom'
  } else if (newPath.startsWith('/study')) {
    active.value = 'study'
  } else if (newPath.startsWith('/suggestions')) {
    active.value = 'suggestions'
  } else {
    active.value = 'home'
  }
}, { immediate: true })
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>