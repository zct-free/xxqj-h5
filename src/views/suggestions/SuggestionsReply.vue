<template>
  <div class="suggestions-reply-page">
    <van-nav-bar title="回复详情" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <div class="original-suggestion">
        <div class="suggestion-header">
          <van-image round width="36" height="36" :src="suggestion.avatar" />
          <div class="suggestion-user">
            <span class="user-name">{{ suggestion.userName }}</span>
            <span class="user-time">{{ suggestion.time }}</span>
          </div>
        </div>
        <p class="suggestion-content">{{ suggestion.content }}</p>
      </div>

      <div class="reply-list-section">
        <div class="reply-header">
          <h3>全部回复 ({{ totalReplies }})</h3>
        </div>

        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="(reply, index) in replyList" :key="index" class="reply-item">
            <van-image round width="32" height="32" :src="reply.avatar" />
            <div class="reply-content">
              <div class="reply-info">
                <span class="reply-name">{{ reply.userName }}</span>
                <span class="reply-time">{{ reply.time }}</span>
              </div>
              <p class="reply-text">{{ reply.content }}</p>
              <div class="reply-actions">
                <span @click="likeReply(reply)">
                  <van-icon name="good-job-o" />
                  {{ reply.likes }}
                </span>
                <span @click="replyToReply(reply)">回复</span>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>

    <van-submit-bar
      :label="''"
      placeholder="写回复..."
      button-text="发送"
      @submit="onSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onBack = () => {
  router.back()
}

const suggestion = ref({
  userName: '张三',
  avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
  time: '2024-01-20',
  content: '建议加强军事理论学习，提高政治素养...'
})

const loading = ref(false)
const finished = ref(false)
const totalReplies = ref(12)

const replyList = ref([
  {
    id: 1,
    userName: '李四',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20 14:00',
    content: '这个建议很好，支持！',
    likes: 5
  },
  {
    id: 2,
    userName: '王五',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20 14:30',
    content: '确实需要加强这方面的学习',
    likes: 3
  },
  {
    id: 3,
    userName: '赵六',
    avatar: '/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png',
    time: '2024-01-20 15:00',
    content: '希望能够落实到位',
    likes: 2
  }
])

const onLoad = () => {
  setTimeout(() => {
    loading.value = false
    finished.value = true
  }, 1000)
}

const likeReply = (reply) => {
  console.log('Like reply:', reply.id)
}

const replyToReply = (reply) => {
  console.log('Reply to reply:', reply.userName)
}

const onSubmit = () => {
  console.log('Submit reply')
}
</script>

<style scoped>
.suggestions-reply-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px;
}

.content-wrapper {
  padding-top: 46px;
}

.original-suggestion {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
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
}

.reply-list-section {
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
}

.reply-info {
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
  margin-bottom: 8px;
}

.reply-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 12px;
  color: #999;
}

.reply-actions span {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
</style>