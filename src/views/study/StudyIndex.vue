<template>
  <div class="study-page">
    <van-nav-bar title="学习" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="user-card">
        <van-image round width="50" height="50" :src="userAvatar" />
        <div class="user-info">
          <h3>学习进行中</h3>
          <p>坚持学习，不断进步</p>
        </div>
      </div>

      <div class="study-modules">
        <div class="module-card" @click="goToPage('/study/important')">
          <div class="module-icon important-icon">
            <van-icon name="award-o" size="28" />
          </div>
          <h4>重要论述</h4>
          <p>习近平重要论述摘编</p>
        </div>

        <div class="module-card" @click="goToPage('/study/interpretation')">
          <div class="module-icon interpretation-icon">
            <van-icon name="comment-o" size="28" />
          </div>
          <h4>权威解读</h4>
          <p>专家深度解读</p>
        </div>

        <div class="module-card" @click="goToPage('/study/calendar')">
          <div class="module-icon calendar-icon">
            <van-icon name="calendar-o" size="28" />
          </div>
          <h4>学习日历</h4>
          <p>制定学习计划</p>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">学习心得</span>
          <van-icon name="arrow" />
        </div>
        <van-cell-group inset>
          <van-cell title="查看我的学习心得" is-link @click="goToPage('/study/experience')" />
          <van-cell title="原文原著" is-link @click="goToPage('/study/original')" />
        </van-cell-group>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">学习统计</span>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-value">{{ stats.days }}</span>
            <span class="stat-label">学习天数</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ stats.hours }}</span>
            <span class="stat-label">学习时长</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ stats.articles }}</span>
            <span class="stat-label">已学文章</span>
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

const goToPage = (path) => {
  router.push(path)
}

const userAvatar = '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'

const stats = ref({
  days: 28,
  hours: 56,
  articles: 15
})
</script>

<style scoped>
.study-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.user-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 10px;
  border-radius: 12px;
  padding: 20px;
  color: #fff;
}

.user-info h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.user-info p {
  font-size: 14px;
  opacity: 0.9;
}

.study-modules {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 15px;
  background-color: #fff;
}

.module-card {
  text-align: center;
  padding: 15px 5px;
  border-radius: 8px;
  background-color: #f8f9fa;
  cursor: pointer;
}

.module-card:active {
  transform: scale(0.95);
}

.module-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}

.important-icon {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: #fff;
}

.interpretation-icon {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: #fff;
}

.calendar-icon {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
  color: #fff;
}

.module-card h4 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.module-card p {
  font-size: 11px;
  color: #999;
}

.section {
  background-color: #fff;
  margin-top: 10px;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 12px;
  color: #999;
}
</style>