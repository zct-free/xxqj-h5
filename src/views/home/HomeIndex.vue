<template>
  <div class="home-page">
    <!-- 顶部搜索栏 -->
    <div class="top-search">
      <div class="search-container">
        <van-icon name="search" size="16" />
        <input type="text" placeholder="搜索" class="search-input" />
      </div>
      <div class="ai-button">军智AI</div>
    </div>

    <!-- 导航标签 -->
    <TabBar v-model="activeTab" :tabs="tabs" />

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 热点推荐 -->
      <div v-if="activeTab === 'hot'" class="hot-section">
        <div class="article-item" v-for="(item, index) in hotList" :key="index">
          <div class="article-content">
            <h3 class="article-title">{{ item.title }}</h3>
            <p class="article-meta">{{ item.date }} {{ item.source }}</p>
          </div>
          <img v-if="item.image" :src="item.image" :alt="item.title" class="article-image" />
        </div>
      </div>

      <!-- 海军 -->
      <div v-else-if="activeTab === 'navy'" class="navy-section">
        <van-swipe class="navy-swipe" :autoplay="3000" indicator-color="#e74c3c">
          <van-swipe-item v-for="(item, index) in navyBanner" :key="index">
            <img :src="item.image" :alt="item.title" class="swipe-image" />
            <div class="swipe-text">{{ item.title }}</div>
          </van-swipe-item>
        </van-swipe>
        <div class="article-item" v-for="(item, index) in navyList" :key="index">
          <div class="article-content">
            <h3 class="article-title">{{ item.title }}</h3>
            <p class="article-meta">{{ item.date }} {{ item.source }}</p>
          </div>
          <img v-if="item.image" :src="item.image" :alt="item.title" class="article-image" />
        </div>
      </div>

      <!-- 建言献策 -->
      <div v-else-if="activeTab === 'suggestions'" class="suggestions-section">
        <div class="suggestions-tabs">
          <div
            v-for="tab in suggestionsTabs"
            :key="tab.id"
            class="suggestions-tab"
            :class="{ active: activeSuggestionsTab === tab.id }"
            @click="activeSuggestionsTab = tab.id"
          >
            {{ tab.name }}
          </div>
        </div>
        <div class="suggestion-item" v-for="(item, index) in suggestionsList" :key="index">
          <div class="suggestion-header">
            <span class="suggestion-tag" :class="item.tagClass">{{ item.tag }}</span>
            <h3 class="suggestion-title">{{ item.title }}</h3>
          </div>
          <p class="suggestion-content">{{ item.content }}</p>
          <p class="suggestion-date">{{ item.date }}</p>
        </div>
        <div v-if="suggestionsList.length === 0" class="empty-state">
          <p>没有更多了~</p>
        </div>
      </div>

      <!-- 教育专题 -->
      <div v-else-if="activeTab === 'education'" class="education-section">
        <div class="education-item" v-for="(item, index) in educationList" :key="index">
          <div class="education-content">
            <h3 class="education-title">{{ item.title }}</h3>
            <p class="education-meta">{{ item.date }} {{ item.source }}</p>
          </div>
          <img :src="item.image" :alt="item.title" class="education-image" />
        </div>
      </div>

      <!-- 政策发布 -->
      <div v-else-if="activeTab === 'policy'" class="policy-section">
        <div class="policy-banner">
          <h2 class="policy-title">{{ policyBanner.title }}</h2>
          <p class="policy-subtitle">{{ policyBanner.subtitle }}</p>
        </div>
        <div class="article-item" v-for="(item, index) in policyList" :key="index">
          <div class="article-content">
            <h3 class="article-title">{{ item.title }}</h3>
            <p class="article-meta">{{ item.date }} {{ item.source }}</p>
          </div>
          <img v-if="item.image" :src="item.image" :alt="item.title" class="article-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from '../../components/TabBar.vue'

const activeTab = ref('hot')
const activeSuggestionsTab = ref('all')

const tabs = [
  { id: 'hot', name: '热点推荐' },
  { id: 'navy', name: '海军' },
  { id: 'suggestions', name: '建言献策' },
  { id: 'education', name: '教育专题' },
  { id: 'policy', name: '政策发布' }
]

const suggestionsTabs = [
  { id: 'all', name: '全部' },
  { id: 'training', name: '训练保障' },
  { id: 'life', name: '生活服务' },
  { id: 'system', name: '制度' }
]

const hotList = [
  {
    title: '致敬伟大的祖国！致敬英雄的人民军队！致敬曾经和现在...',
    date: '2025-09-21',
    source: '西南雄狮号',
    image: ''
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: ''
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '致敬伟大的祖国！致敬英雄的人民军队！致敬曾经和现在...',
    date: '2025-09-21',
    source: '西南雄狮号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
]

const navyBanner = [
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
]

const navyList = [
  {
    title: '致敬伟大的祖国！致敬英雄的人民军队！致敬曾经和现在...',
    date: '2025-09-21',
    source: '西南雄狮号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
]

const suggestionsList = [
  {
    tag: '生活服务',
    tagClass: 'tag-life',
    title: '增设营区快递智能取件柜',
    content: '当前快递需要到营区门口收发室领取，高峰时间段排队时间长，建议引入智能取件柜，方便官兵错峰取件，提升效率。',
    date: '2025年3月5日'
  },
  {
    tag: '训练保障',
    tagClass: 'tag-training',
    title: '增设营区快递智能取件柜',
    content: '当前快递需要到营区门口收发室领取，高峰时间段排队时间长，建议引入智能取件柜，方便官兵错峰取件，提升效率。',
    date: '2025年3月5日'
  },
  {
    tag: '制度',
    tagClass: 'tag-system',
    title: '关于优化体能训练场地开放时间的建议',
    content: '当前快递需要到营区门口收发室领取，高峰时间段排队时间长，建议引入智能取件柜，方便官兵错峰取件，提升效率。',
    date: '2025年3月5日'
  }
]

const educationList = [
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '致敬伟大的祖国！致敬英雄的人民军队！致敬曾经和现在...',
    date: '2025-09-21',
    source: '西南雄狮号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
]

const policyBanner = {
  title: '新版《军队卫生监督规定》出台',
  subtitle: '新版《军队卫生监督规定》出台 1/5'
}

const policyList = [
  {
    title: '致敬伟大的祖国！致敬英雄的人民军队！致敬曾经和现在...',
    date: '2025-09-21',
    source: '西南雄狮号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '全军部队举行多种活动迎"七一"',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  },
  {
    title: '以国防和军队现代化有力支撑中华民族伟大复兴——写在...',
    date: '2025-09-21',
    source: '新华社新闻官方账号',
    image: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png'
  }
]
</script>

<style scoped>
.home-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px;
}

/* 顶部搜索栏 */
.top-search {
  background-color: #e74c3c;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-container {
  flex: 1;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  margin-left: 8px;
  flex: 1;
}

.ai-button {
  background-color: #c0392b;
  color: #fff;
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
}

/* 内容区域 */
.content-wrapper {
  padding: 10px;
}

/* 热点推荐 */
.hot-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.article-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
}

.article-item:last-child {
  border-bottom: none;
}

.article-content {
  flex: 1;
  margin-right: 10px;
}

.article-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  margin-bottom: 8px;
}

.article-meta {
  font-size: 12px;
  color: #999;
}

.article-image {
  width: 100px;
  height: 70px;
  border-radius: 4px;
  object-fit: cover;
}

/* 海军 */
.navy-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.navy-swipe {
  height: 180px;
  position: relative;
}

.swipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swipe-text {
  position: absolute;
  bottom: 10px;
  left: 15px;
  right: 15px;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  border-radius: 4px;
}

/* 建言献策 */
.suggestions-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.suggestions-tabs {
  display: flex;
  padding: 12px 15px;
  border-bottom: 1px solid #f0f0f0;
}

.suggestions-tab {
  padding: 6px 15px;
  margin-right: 10px;
  border-radius: 15px;
  font-size: 14px;
  color: #666;
  background-color: #f5f5f5;
  cursor: pointer;
}

.suggestions-tab.active {
  background-color: #e74c3c;
  color: #fff;
}

.suggestion-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}

.suggestion-tag {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  margin-right: 10px;
  white-space: nowrap;
}

.tag-life {
  background-color: #e8f4f8;
  color: #3498db;
}

.tag-training {
  background-color: #e8f8e8;
  color: #27ae60;
}

.tag-system {
  background-color: #f8e8f8;
  color: #9b59b6;
}

.suggestion-title {
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
}

.suggestion-content {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 8px;
}

.suggestion-date {
  font-size: 12px;
  color: #999;
}

/* 教育专题 */
.education-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.education-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
}

.education-item:last-child {
  border-bottom: none;
}

.education-content {
  flex: 1;
  margin-right: 10px;
}

.education-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  margin-bottom: 8px;
}

.education-meta {
  font-size: 12px;
  color: #999;
}

.education-image {
  width: 120px;
  height: 80px;
  border-radius: 4px;
  object-fit: cover;
}

/* 政策发布 */
.policy-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.policy-banner {
  background-color: #e74c3c;
  color: #fff;
  padding: 20px 15px;
  margin-bottom: 0;
}

.policy-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.policy-subtitle {
  font-size: 14px;
  opacity: 0.9;
}

/* 空状态 */
.empty-state {
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>
