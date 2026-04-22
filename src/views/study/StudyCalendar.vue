<template>
  <div class="calendar-page">
    <van-nav-bar title="学习日历" fixed left-arrow @click-left="onBack" />

    <div class="content-wrapper">
      <van-calendar
        :show-title="false"
        :poppable="false"
        :show-mark="true"
        :formatter="formatter"
        @select="onDateSelect"
      />

      <div class="calendar-stats">
        <h3 class="stats-title">本月学习进度</h3>
        <div class="progress-info">
          <div class="progress-item">
            <van-circle
              v-model:current-rate="studyRate"
              :rate="studyRate"
              :speed="60"
              :stroke-width="60"
              color="#1a73e8"
            >
              <span class="progress-text">{{ studyRate }}%</span>
            </van-circle>
            <span class="progress-label">学习完成率</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">学习计划</span>
          <van-button size="small" type="primary" @click="addPlan">添加计划</van-button>
        </div>
        <van-cell-group inset>
          <van-cell v-for="(item, index) in plans" :key="index" :title="item.title" :label="item.time" is-link />
        </van-cell-group>
      </div>

      <van-empty v-if="plans.length === 0" description="暂无学习计划" />
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

const studyRate = ref(65)

const formatter = (day) => {
  if (day.type === 'same') {
    day.bottomInfo = '学习'
  }
  return day
}

const plans = ref([
  { title: '学习党的二十大精神', time: '09:00 - 10:30' },
  { title: '军事理论专题学习', time: '14:00 - 15:30' }
])

const onDateSelect = (date) => {
  console.log('Date selected:', date)
}

const addPlan = () => {
  console.log('Add plan')
}
</script>

<style scoped>
.calendar-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.content-wrapper {
  padding-top: 46px;
}

.calendar-stats {
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
}

.stats-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.progress-info {
  display: flex;
  justify-content: center;
}

.progress-item {
  text-align: center;
}

.progress-text {
  font-size: 16px;
  font-weight: bold;
  color: #1a73e8;
}

.progress-label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 8px;
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