<template>
  <div class="study-detail-page">
    <van-nav-bar title="权威解读" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="interpretation-list">
            <div v-for="(item, index) in interpretationList" :key="index" class="interpretation-card" @click="onItemClick(item)">
              <van-image width="100%" height="150" fit="cover" :src="item.image" />
              <div class="interpretation-content">
                <h3 class="interpretation-title">{{ item.title }}</h3>
                <p class="interpretation-desc">{{ item.description }}</p>
                <div class="interpretation-footer">
                  <span class="interpretation-author">{{ item.author }}</span>
                  <span class="interpretation-date">{{ item.date }}</span>
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

const interpretationList = ref([
  {
    title: '深入理解强军思想',
    description: '专家深度解读习近平强军思想的科学内涵和实践要求',
    author: '张教授',
    date: '2024-01-20',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '军队党的建设新要求',
    description: '全面加强军队党的领导和党的建设工作',
    author: '李专家',
    date: '2024-01-18',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
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

const onItemClick = (item) => {
  console.log('Item clicked:', item)
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

.interpretation-list {
  padding: 10px;
}

.interpretation-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
}

.interpretation-card:active {
  transform: scale(0.98);
}

.interpretation-content {
  padding: 12px;
}

.interpretation-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.interpretation-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
}

.interpretation-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}
</style>