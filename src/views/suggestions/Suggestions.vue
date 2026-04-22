<template>
  <div class="suggestions-page">
    <van-nav-bar title="建言献策" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="suggestions-header">
        <h2>我要建言</h2>
        <van-button type="primary" size="small" @click="createSuggestion">发表意见</van-button>
      </div>

      <van-tabs v-model:active="activeTab" sticky offset-top="46">
        <van-tab title="全部" name="all">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model:loading="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <div class="suggestions-list">
                <div v-for="(item, index) in suggestionsList" :key="index" class="suggestion-card" @click="goToContent(item)">
                  <div class="suggestion-header">
                    <van-image round width="36" height="36" :src="item.avatar" />
                    <div class="suggestion-user">
                      <span class="user-name">{{ item.userName }}</span>
                      <span class="user-time">{{ item.time }}</span>
                    </div>
                  </div>
                  <p class="suggestion-content">{{ item.content }}</p>
                  <div class="suggestion-footer">
                    <div class="suggestion-stats">
                      <van-icon name="comment-o" />
                      <span>{{ item.comments }}</span>
                      <van-icon name="good-job-o" />
                      <span>{{ item.likes }}</span>
                    </div>
                    <van-icon name="arrow" />
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="我的" name="mine">
          <van-pull-refresh v-model="refreshingMine" @refresh="onRefreshMine">
            <van-list
              v-model:loading="loadingMine"
              :finished="finishedMine"
              finished-text="没有更多了"
              @load="onLoadMine"
            >
              <div class="suggestions-list">
                <div v-for="(item, index) in mySuggestionsList" :key="index" class="suggestion-card" @click="goToContent(item)">
                  <div class="suggestion-header">
                    <van-image round width="36" height="36" :src="item.avatar" />
                    <div class="suggestion-user">
                      <span class="user-name">{{ item.userName }}</span>
                      <span class="user-time">{{ item.time }}</span>
                    </div>
                  </div>
                  <p class="suggestion-content">{{ item.content }}</p>
                  <div class="suggestion-footer">
                    <div class="suggestion-stats">
                      <van-icon name="comment-o" />
                      <span>{{ item.comments }}</span>
                      <van-icon name="good-job-o" />
                      <span>{{ item.likes }}</span>
                    </div>
                    <van-icon name="arrow" />
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
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

const activeTab = ref('all')

const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const loadingMine = ref(false)
const finishedMine = ref(false)
const refreshingMine = ref(false)

const suggestionsList = ref([
  {
    id: 1,
    userName: '张三',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20',
    content: '建议加强军事理论学习，提高政治素养...',
    comments: 5,
    likes: 12
  },
  {
    id: 2,
    userName: '李四',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-19',
    content: '关于加强作风建设的几点建议...',
    comments: 3,
    likes: 8
  }
])

const mySuggestionsList = ref([
  {
    id: 3,
    userName: '我',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-18',
    content: '希望增加更多实战化训练内容...',
    comments: 2,
    likes: 5
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

const onLoadMine = () => {
  setTimeout(() => {
    loadingMine.value = false
    finishedMine.value = true
  }, 1000)
}

const onRefreshMine = () => {
  setTimeout(() => {
    refreshingMine.value = false
  }, 1000)
}

const goToContent = (item) => {
  router.push({ path: '/suggestions/content', query: { id: item.id } })
}

const createSuggestion = () => {
  console.log('Create suggestion')
}
</script>

<style scoped>
.suggestions-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.suggestions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
}

.suggestions-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.suggestions-list {
  padding: 10px;
}

.suggestion-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
}

.suggestion-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.suggestion-user {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.user-time {
  font-size: 12px;
  color: #999;
}

.suggestion-content {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.suggestion-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.suggestion-stats {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  color: #999;
}
</style>