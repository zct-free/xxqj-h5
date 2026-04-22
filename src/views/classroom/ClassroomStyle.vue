<template>
  <div class="classroom-detail-page">
    <van-nav-bar title="作风优良" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="detail-banner">
        <img :src="bannerImage" alt="作风优良" class="banner-image" />
        <div class="banner-overlay">
          <h1>作风优良</h1>
          <p>纪律严明、作风过硬</p>
        </div>
      </div>

      <div class="content-section">
        <h2 class="section-title">核心要求</h2>
        <van-cell-group inset>
          <van-cell title="严守纪律" label="一切行动听指挥" />
          <van-cell title="端正作风" label="求真务实、真抓实干" />
          <van-cell title="艰苦奋斗" label="保持优良传统" />
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
    title: '军队条令条例',
    description: '严明纪律规矩',
    thumb: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '光荣传统教育',
    description: '传承红色基因',
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