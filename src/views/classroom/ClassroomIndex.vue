<template>
  <div class="classroom-page">
    <van-nav-bar title="课堂" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="banner">
        <img :src="bannerImage" alt="课堂banner" class="banner-image" />
      </div>

      <div class="course-grid">
        <div class="course-card" @click="goToPage('/classroom/listening')">
          <div class="course-icon listening-icon">
            <van-icon name="volume-o" size="32" />
          </div>
          <h3 class="course-title">听党指挥</h3>
          <p class="course-desc">忠诚于党</p>
        </div>

        <div class="course-card" @click="goToPage('/classroom/victory')">
          <div class="course-icon victory-icon">
            <van-icon name="flag-o" size="32" />
          </div>
          <h3 class="course-title">能打胜仗</h3>
          <p class="course-desc">能战善战</p>
        </div>

        <div class="course-card" @click="goToPage('/classroom/style')">
          <div class="course-icon style-icon">
            <van-icon name="shield-o" size="32" />
          </div>
          <h3 class="course-title">作风优良</h3>
          <p class="course-desc">纪律严明</p>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">推荐课程</span>
          <van-icon name="arrow" />
        </div>
        <van-cell-group inset>
          <van-cell v-for="(item, index) in courseList" :key="index" :title="item.title" :label="item.teacher" is-link />
        </van-cell-group>
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

const bannerImage = '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'

const courseList = ref([
  { title: '党的二十大精神学习', teacher: '讲师：张教官' },
  { title: '军事理论专题', teacher: '讲师：李教授' },
  { title: '光荣传统教育', teacher: '讲师：王指导员' }
])
</script>

<style scoped>
.classroom-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.banner {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 15px;
  background-color: #fff;
}

.course-card {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 20px 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.course-card:active {
  transform: scale(0.95);
}

.course-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.listening-icon {
  background: linear-gradient(135deg, #e53935, #ff5722);
  color: #fff;
}

.victory-icon {
  background: linear-gradient(135deg, #43a047, #66bb6a);
  color: #fff;
}

.style-icon {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: #fff;
}

.course-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.course-desc {
  font-size: 12px;
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
</style>