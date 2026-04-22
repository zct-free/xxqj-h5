<template>
  <div class="study-detail-page">
    <van-nav-bar title="重要论述" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="article-list">
            <div v-for="(item, index) in articleList" :key="index" class="article-card" @click="onArticleClick(item)">
              <h3 class="article-title">{{ item.title }}</h3>
              <p class="article-source">{{ item.source }}</p>
              <div class="article-footer">
                <span class="article-date">{{ item.date }}</span>
                <van-icon name="arrow" />
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

const articleList = ref([
  { title: '习近平论强军兴军', source: '解放军报', date: '2024-01-20' },
  { title: '坚持党对军队绝对领导', source: '国防时报', date: '2024-01-18' },
  { title: '建设世界一流军队', source: '军报', date: '2024-01-15' },
  { title: '深化国防和军队改革', source: '前卫报', date: '2024-01-12' },
  { title: '军队党的建设', source: '党的生活', date: '2024-01-10' }
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

const onArticleClick = (item) => {
  console.log('Article clicked:', item)
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

.article-list {
  padding: 10px;
}

.article-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
}

.article-card:active {
  background-color: #f5f5f5;
}

.article-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
}

.article-source {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 12px;
}
</style>