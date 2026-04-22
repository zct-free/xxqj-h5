<template>
  <div class="home-page">
    <van-nav-bar title="首页" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="section">
        <div class="section-header">
          <span class="section-title">热点推荐</span>
          <van-icon name="arrow" />
        </div>
        <van-swipe class="hot-swipe" :autoplay="3000" indicator-color="#1a73e8">
          <van-swipe-item v-for="(item, index) in hotList" :key="index">
            <div class="hot-card">
              <img :src="item.image" :alt="item.title" class="hot-image" />
              <div class="hot-info">
                <h3 class="hot-title">{{ item.title }}</h3>
                <p class="hot-desc">{{ item.description }}</p>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">教育专题</span>
          <van-icon name="arrow" />
        </div>
        <div class="special-grid">
          <div v-for="(item, index) in specialList" :key="index" class="special-card">
            <img :src="item.image" :alt="item.title" class="special-image" />
            <div class="special-title">{{ item.title }}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">政策发布</span>
          <van-icon name="arrow" />
        </div>
        <van-cell-group inset>
          <van-cell v-for="(item, index) in policyList" :key="index" :title="item.title" :label="item.date" is-link />
        </van-cell-group>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">海军</span>
          <van-icon name="arrow" />
        </div>
        <div class="navai-card">
          <img :src="navaiImage" alt="海军" class="navai-image" />
          <div class="navai-content">
            <h3>海军部队</h3>
            <p>保卫祖国海疆</p>
          </div>
        </div>
      </div>
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

const hotList = ref([
  {
    title: '学习贯彻党的二十大精神',
    description: '深入学习习近平新时代中国特色社会主义思想',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '军事训练新动态',
    description: '全面提升作战能力',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
])

const specialList = ref([
  { title: '专题一', image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png' },
  { title: '专题二', image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png' },
  { title: '专题三', image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png' },
  { title: '专题四', image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png' }
])

const policyList = ref([
  { title: '关于加强军队建设的指导意见', date: '2024-01-15' },
  { title: '军事训练考核办法', date: '2024-01-10' },
  { title: '部队管理新规定', date: '2024-01-05' }
])

const navaiImage = '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
</script>

<style scoped>
.home-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.section {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.hot-swipe {
  border-radius: 8px;
  overflow: hidden;
}

.hot-card {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #e3f2fd;
  border-radius: 8px;
  overflow: hidden;
}

.hot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hot-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
}

.hot-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.hot-desc {
  font-size: 12px;
  opacity: 0.9;
}

.special-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.special-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.special-image {
  width: 100%;
  height: 80px;
  object-fit: cover;
}

.special-title {
  padding: 8px;
  font-size: 14px;
  text-align: center;
  color: #333;
}

.navai-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  border-radius: 8px;
  padding: 20px;
  color: #fff;
}

.navai-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.navai-content h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.navai-content p {
  font-size: 14px;
  opacity: 0.9;
}
</style>