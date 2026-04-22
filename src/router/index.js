import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/HomeIndex.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/classroom",
    name: "Classroom",
    component: () => import("../views/classroom/ClassroomIndex.vue"),
    meta: { title: "课堂" },
  },
  {
    path: "/classroom/listening",
    name: "ClassroomListening",
    component: () => import("../views/classroom/ClassroomListening.vue"),
    meta: { title: "听党指挥" },
  },
  {
    path: "/classroom/victory",
    name: "ClassroomVictory",
    component: () => import("../views/classroom/ClassroomVictory.vue"),
    meta: { title: "能打胜仗" },
  },
  {
    path: "/classroom/style",
    name: "ClassroomStyle",
    component: () => import("../views/classroom/ClassroomStyle.vue"),
    meta: { title: "作风优良" },
  },
  {
    path: "/study",
    name: "Study",
    component: () => import("../views/study/StudyIndex.vue"),
    meta: { title: "学习" },
  },
  {
    path: "/study/important",
    name: "StudyImportant",
    component: () => import("../views/study/StudyImportant.vue"),
    meta: { title: "重要论述" },
  },
  {
    path: "/study/interpretation",
    name: "StudyInterpretation",
    component: () => import("../views/study/StudyInterpretation.vue"),
    meta: { title: "权威解读" },
  },
  {
    path: "/study/calendar",
    name: "StudyCalendar",
    component: () => import("../views/study/StudyCalendar.vue"),
    meta: { title: "学习日历" },
  },
  {
    path: "/study/experience",
    name: "StudyExperience",
    component: () => import("../views/study/StudyExperience.vue"),
    meta: { title: "学习心得" },
  },
  {
    path: "/study/original",
    name: "StudyOriginal",
    component: () => import("../views/study/StudyOriginal.vue"),
    meta: { title: "原文原著" },
  },
  {
    path: "/suggestions",
    name: "Suggestions",
    component: () => import("../views/suggestions/Suggestions.vue"),
    meta: { title: "建言献策" },
  },
  {
    path: "/suggestions/content",
    name: "SuggestionsContent",
    component: () => import("../views/suggestions/SuggestionsContent.vue"),
    meta: { title: "建言献策内容" },
  },
  {
    path: "/suggestions/reply",
    name: "SuggestionsReply",
    component: () => import("../views/suggestions/SuggestionsReply.vue"),
    meta: { title: "建言献策回复" },
  },
  {
    path: "/answer",
    name: "Answer",
    component: () => import("../views/answer/AnswerIndex.vue"),
    meta: { title: "答题" },
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/mine/MineIndex.vue"),
    meta: { title: "我的" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
