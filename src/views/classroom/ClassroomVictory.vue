<template>
  <div class="classroom-detail-page">
    <van-nav-bar title="能打胜仗" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="detail-banner">
        <img :src="bannerImage" alt="能打胜仗" class="banner-image" />
        <div class="banner-overlay">
          <h1>能打胜仗</h1>
          <p>召之即来、来之能战、战之必胜</p>
        </div>
      </div>

      <div class="content-section">
        <h2 class="section-title">核心要求</h2>
        <van-cell-group inset>
          <van-cell title="提高打赢本领" label="练就过硬的军事素质" />
          <van-cell title="增强实战能力" label="在近似实战的环境中摔打锻炼" />
          <van-cell title="培养战斗精神" label="敢于亮剑、敢于胜利" />
        </van-cell-group>
      </div>

      <div class="content-section">
        <h2 class="section-title">学习资料</h2>
        <van-card
          v-for="(item, index) in materials"
          :key="index"
          :title="item.title"
          :desc="item.description"
          :thumb="item.thumb"
          @click="onMaterialClick(item)"
        />
      </div>

      <van-button type="primary" block class="study-btn" @click="startStudy">
        开始学习
      </van-button>
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

const bannerImage = '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'

const materials = ref([
  {
    title: '军事训练大纲',
    description: '全面提升作战能力',
    thumb: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '实战化训练',
    description: '从难从严从实战出发',
    thumb: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
])

const onMaterialClick = (item) => {
  console.log('Material clicked:', item)
}

const startStudy = () => {
  console.log('Start studying')
}
</script>

<style scoped>
.classroom-detail-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px;
}

.content-wrapper {
  padding-top: 46px;
}

.detail-banner {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: #fff;
}

.banner-overlay h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

.banner-overlay p {
  font-size: 14px;
  opacity: 0.9;
}

.content-section {
  background-color: #fff;
  margin-top: 10px;
  padding: 15px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.study-btn {
  margin: 20px 15px;
  border-radius: 8px;
}
</style>