<template>
  <div class="suggestions-content-page">
    <van-nav-bar title="建言详情" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="suggestion-detail">
        <div class="detail-header">
          <van-image round width="40" height="40" :src="suggestion.avatar" />
          <div class="detail-user">
            <span class="user-name">{{ suggestion.userName }}</span>
            <span class="user-time">{{ suggestion.time }}</span>
          </div>
        </div>

        <h2 class="detail-title">{{ suggestion.title }}</h2>
        <p class="detail-content">{{ suggestion.content }}</p>

        <div class="detail-images" v-if="suggestion.images && suggestion.images.length">
          <van-image
            v-for="(img, index) in suggestion.images"
            :key="index"
            width="100"
            height="100"
            fit="cover"
            :src="img"
            @click="previewImage(index)"
          />
        </div>
      </div>

      <div class="reply-section">
        <div class="reply-header">
          <h3>回复 ({{ suggestion.comments }})</h3>
        </div>

        <van-list>
          <div v-for="(reply, index) in replyList" :key="index" class="reply-item">
            <van-image round width="32" height="32" :src="reply.avatar" />
            <div class="reply-content">
              <div class="reply-header">
                <span class="reply-name">{{ reply.userName }}</span>
                <span class="reply-time">{{ reply.time }}</span>
              </div>
              <p class="reply-text">{{ reply.content }}</p>
            </div>
          </div>
        </van-list>
      </div>
    </div>

    <van-submit-bar
      :label="''"
      placeholder="请输入回复..."
      button-text="回复"
      @submit="onSubmit"
      @bindinput="onInput"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const onBack = () => {
  router.back()
}

const suggestion = ref({
  id: 1,
  userName: '张三',
  avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
  time: '2024-01-20',
  title: '关于加强作风建设的建议',
  content: '建议进一步加强部队作风建设，强化纪律意识，培养优良作风...',
  comments: 5,
  images: []
})

const replyList = ref([
  {
    userName: '李四',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20 15:30',
    content: '说得很有道理，支持！'
  },
  {
    userName: '王五',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20 16:00',
    content: '确实需要加强这方面的建设'
  }
])

const onSubmit = () => {
  console.log('Submit reply')
}

const onInput = (value) => {
  console.log('Input value:', value)
}

const previewImage = (index) => {
  console.log('Preview image:', index)
}
</script>

<style scoped>
.suggestions-content-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px;
}

.content-wrapper {
  padding-top: 46px;
}

.suggestion-detail {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
}

.detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.detail-user {
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

.detail-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.detail-content {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.detail-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.reply-section {
  background-color: #fff;
  padding: 15px;
}

.reply-header h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.reply-item {
  display: flex;
  margin-bottom: 15px;
}

.reply-content {
  flex: 1;
  margin-left: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.reply-name {
  font-size: 13px;
  font-weight: bold;
  color: #333;
}

.reply-time {
  font-size: 11px;
  color: #999;
}

.reply-text {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}
</style>