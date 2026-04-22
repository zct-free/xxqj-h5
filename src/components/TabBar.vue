<template>
  <div class="nav-tabs">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-item"
      :class="{ active: modelValue === tab.id }"
      @click="$emit('update:modelValue', tab.id)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true,
    default: () => []
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.nav-tabs {
  background-color: #fff;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 12px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab-item {
  padding: 0 15px;
  font-size: 14px;
  color: #666;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
}

.tab-item.active {
  color: #e74c3c;
  font-weight: bold;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 15px;
  right: 15px;
  height: 3px;
  background-color: #e74c3c;
  border-radius: 2px;
}
</style>