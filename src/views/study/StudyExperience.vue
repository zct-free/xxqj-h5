<template>
  <div class="study-detail-page">
    <van-nav-bar title="学习心得" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="experience-header">
        <h2>我的学习心得</h2>
        <van-button type="primary" size="small" @click="writeExperience">写心得</van-button>
      </div>

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="experience-list">
            <div v-for="(item, index) in experienceList" :key="index" class="experience-card" @click="onExperienceClick(item)">
              <h3 class="experience-title">{{ item.title }}</h3>
              <p class="experience-content">{{ item.content }}</p>
              <div class="experience-footer">
                <span class="experience-date">{{ item.date }}</span>
                <div class="experience-actions">
                  <van-icon name="like-o" />
                  <span>{{ item.likes }}</span>
                  <van-icon name="comment-o" />
                  <span>{{ item.comments }}</span>
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

const experienceList = ref([
  {
    title: '学习二十大精神的心得体会',
    content: '通过学习党的二十大精神，我深刻认识到要坚持党的领导，坚决听党指挥...',
    date: '2024-01-20',
    likes: 12,
    comments: 3
  },
  {
    title: '强军兴军学习感悟',
    content: '建设一支听党指挥、能打胜仗、作风优良的人民军队，是党在新时代的强军目标...',
    date: '2024-01-18',
    likes: 8,
    comments: 2
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

const onExperienceClick = (item) => {
  console.log('Experience clicked:', item)
}

const writeExperience = () => {
  console.log('Write experience')
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

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
}

.experience-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.experience-list {
  padding: 10px;
}

.experience-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
}

.experience-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.experience-content {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.experience-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.experience-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>