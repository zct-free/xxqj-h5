<template>
  <div class="study-detail-page">
    <van-nav-bar title="原文原著" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="book-list">
            <div v-for="(item, index) in bookList" :key="index" class="book-card" @click="onBookClick(item)">
              <van-image width="80" height="100" fit="cover" :src="item.cover" />
              <div class="book-info">
                <h3 class="book-title">{{ item.title }}</h3>
                <p class="book-author">{{ item.author }}</p>
                <p class="book-desc">{{ item.description }}</p>
                <div class="book-progress">
                  <van-progress :percentage="item.progress" color="#1a73e8" />
                  <span class="progress-text">{{ item.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onBack = () => {
  router.back()
}

const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const bookList = ref([
  {
    title: '习近平谈治国理政',
    author: '习近平',
    description: '新时代中国特色社会主义思想的重要文献',
    cover: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    progress: 75
  },
  {
    title: '论坚持党对军队的绝对领导',
    author: '习近平',
    description: '强军兴军的根本原则',
    cover: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    progress: 50
  }
])

const onLoad = () => {
  setTimeout(() => {
    loading.value = false
    finished.value = true
  }, 1000)
}

const onRefresh = () => {
  setTimeout(() => {
    refreshing.value = false
  }, 1000)
}

const onBookClick = (item) => {
  console.log('Book clicked:', item)
}
</script>

<style scoped>
.study-detail-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.book-list {
  padding: 10px;
}

.book-card {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
}

.book-info {
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.book-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.book-author {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}

.book-desc {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  flex: 1;
}

.book-progress {
  display: flex;
  align-items: center;
  gap: 10px;
}

.book-progress van-progress {
  flex: 1;
}

.progress-text {
  font-size: 12px;
  color: #1a73e8;
  font-weight: bold;
}
</style>