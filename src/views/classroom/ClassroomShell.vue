<template>
  <div class="classroom-page">
    <header class="top-area">
      <div class="search-box">
        <span class="search-icon">&#128269;</span>
        <input class="search-input" type="text" placeholder="搜索" />
      </div>
      <button class="ai-btn" type="button">军智AI</button>
    </header>

    <nav class="class-tabs">
      <button
        v-for="item in tabs"
        :key="item.key"
        type="button"
        class="class-tab"
        :class="{ active: activeKey === item.key }"
        @click="switchTab(item.path)"
      >
        {{ item.label }}
      </button>
    </nav>

    <main class="content-panel">
      <section v-if="activeKey === 'home'" class="home-content">
        <article class="hero-card">
          <img :src="hero.image" :alt="hero.title" />
          <div class="hero-mask">
            <p class="hero-title">{{ hero.title }}</p>
            <div class="hero-dots">
              <span class="dot" />
              <span class="dot" />
              <span class="dot active" />
            </div>
          </div>
        </article>

        <div class="feature-grid">
          <button v-for="feature in features" :key="feature.label" type="button" class="feature-item">
            <img :src="feature.icon" :alt="feature.label" />
            <span>{{ feature.label }}</span>
          </button>
        </div>

        <section class="course-no">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-mark">&#128101;</span>
              <h3>课程号</h3>
            </div>
            <button type="button" class="more-btn">更多</button>
          </div>

          <article v-for="section in homeSections" :key="section.id" class="teach-card">
            <header class="teach-head">
              <div class="brand">
                <img :src="section.logo" alt="学习讲堂" />
                <div>
                  <h4>{{ section.title }}</h4>
                  <p>{{ section.subTitle }}</p>
                </div>
              </div>
              <button type="button" class="view-all">查看全部</button>
            </header>

            <div class="mini-list">
              <article v-for="course in section.courses" :key="course.id" class="mini-item">
                <div class="mini-cover-wrap">
                  <img :src="course.image" :alt="course.title" class="mini-cover" />
                  <span class="play-icon">&#9654;</span>
                </div>
                <p>{{ course.title }}</p>
              </article>
            </div>
          </article>
        </section>
      </section>

      <section v-else class="list-content">
        <article v-for="card in currentCards" :key="card.id" class="video-card">
          <div class="cover-wrap">
            <img :src="card.image" :alt="card.title" class="cover" />
            <span class="badge">{{ card.badge }}</span>
          </div>
          <h3>{{ card.title }}</h3>
          <p class="meta">
            <span class="eye">&#128065;</span>
            <span>{{ card.views }}</span>
            <span v-if="card.source" class="source">{{ card.source }}</span>
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  activeKey: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const tabs = [
  { key: "home", label: "首页", path: "/classroom" },
  { key: "listening", label: "听党指挥", path: "/classroom/listening" },
  { key: "victory", label: "能打胜仗", path: "/classroom/victory" },
  { key: "style", label: "作风优良", path: "/classroom/style" },
];

const hero = {
  title: "以国防和军队现代化有力支撑中华民族伟大复兴",
  image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
};

const features = [
  { label: "军营大课", icon: "/src/ui/专用手机_首页_课堂_学习/标注切图/res/课堂-首页/png/1@2x.png" },
  { label: "军营微课", icon: "/src/ui/专用手机_首页_课堂_学习/标注切图/res/课堂-首页/png/2@2x.png" },
  { label: "社会讲堂", icon: "/src/ui/专用手机_首页_课堂_学习/标注切图/res/课堂-首页/png/3@2x.png" },
  { label: "教育动态", icon: "/src/ui/专用手机_首页_课堂_学习/标注切图/res/课堂-首页/png/4@2x.png" },
  { label: "素材宝", icon: "/src/ui/专用手机_首页_课堂_学习/标注切图/res/课堂-首页/png/5@2x.png" },
];

const homeSections = [
  {
    id: "sec-1",
    logo: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/logo_m.png",
    title: "学习讲堂",
    subTitle: "让学习成为力量!",
    courses: [
      { id: "c-1", title: "习近平与世界文化", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
      { id: "c-2", title: "平语近人经典故事", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
      { id: "c-3", title: "政论片 | 英雄观", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
    ],
  },
  {
    id: "sec-2",
    logo: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/logo_m.png",
    title: "学习讲堂",
    subTitle: "让学习成为力量!",
    courses: [
      { id: "c-4", title: "习近平与世界文化", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
      { id: "c-5", title: "平语近人经典故事", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
      { id: "c-6", title: "政论片 | 英雄观", image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png" },
    ],
  },
];

const baseCards = [
  {
    id: "v-1",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-2",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
    source: "学习强国",
  },
  {
    id: "v-3",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "更新至第3节",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-4",
    title: "军人地位和权益保障法",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-5",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-6",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-7",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
  {
    id: "v-8",
    title: "“习近平新时代中国特色社会主义思想”专题讲座",
    views: "113254",
    badge: "6节全",
    image: "/src/ui/专用手机_首页_课堂_学习/标注切图/img/bg.png",
  },
];

const currentCards = computed(() => {
  if (props.activeKey === "listening") {
    return baseCards;
  }
  if (props.activeKey === "victory") {
    return baseCards.map((item, idx) => ({
      ...item,
      id: `victory-${idx}`,
      title: idx % 4 === 3 ? "军人地位和权益保障法" : "“习近平新时代中国特色社会主义思想”专题讲座",
    }));
  }
  return baseCards.map((item, idx) => ({
    ...item,
    id: `style-${idx}`,
    title: idx % 4 === 3 ? "军人地位和权益保障法" : "“习近平新时代中国特色社会主义思想”专题讲座",
  }));
});

const switchTab = path => {
  router.push(path);
};
</script>

<style lang="less" scoped>
.classroom-page {
  min-height: 100vh;
  background: #c91f14;
  padding-bottom: 98px;
}

.top-area {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px 0;
}

.search-box {
  flex: 1;
  height: 40px;
  border-radius: 24px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 14px;
}

.search-icon {
  color: #a5a5a5;
  font-size: 18px;
  margin-right: 8px;
}

.search-input {
  border: 0;
  outline: none;
  width: 100%;
  color: #333;
  font-size: 14px;
  background: transparent;
}

.ai-btn {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  padding: 0;
}

.class-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 14px 12px 0;
}

.class-tab {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  height: 56px;
  position: relative;
}

.class-tab.active {
  font-size: 44px;
  font-weight: 700;
}

.class-tab.active::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4px;
  width: 54px;
  height: 6px;
  border-radius: 4px;
  background: #fff;
}

.content-panel {
  border-radius: 18px 18px 0 0;
  background: #ececec;
  padding: 14px 16px 28px;
  min-height: calc(100vh - 170px);
}

.hero-card {
  position: relative;
  height: 220px;
  border-radius: 14px;
  overflow: hidden;
  background: #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-mask {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.62) 100%);
  padding: 0 14px;
}

.hero-title {
  color: #fff;
  font-size: 18px;
  margin: 0;
  flex: 1;
  margin-right: 10px;
}

.hero-dots {
  display: flex;
  gap: 6px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
  }

  .dot.active {
    background: #fff;
  }
}

.feature-grid {
  margin: 16px 0 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.feature-item {
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 46px;
    height: 46px;
  }

  span {
    color: #3f3f3f;
    font-size: 14px;
    white-space: nowrap;
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    margin: 0;
    font-size: 24px;
    color: #1f1f1f;
  }
}

.section-mark {
  color: #d82c27;
  font-size: 28px;
}

.more-btn {
  width: 84px;
  height: 38px;
  border: 0;
  border-radius: 19px;
  background: #f6eded;
  color: #d82c27;
  font-size: 18px;
}

.teach-card {
  background: #fff;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 14px;
}

.teach-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    object-fit: cover;
  }

  h4 {
    margin: 0;
    font-size: 22px;
    color: #232323;
  }

  p {
    margin: 2px 0 0;
    font-size: 16px;
    color: #8a8a8a;
  }
}

.view-all {
  width: 108px;
  height: 42px;
  border: 1px solid #d7d7d7;
  border-radius: 22px;
  background: #fff;
  color: #777;
  font-size: 18px;
}

.mini-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.mini-item {
  p {
    margin: 8px 0 0;
    font-size: 14px;
    color: #333;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}

.mini-cover-wrap {
  position: relative;
  height: 76px;
  border-radius: 8px;
  overflow: hidden;
}

.mini-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 12px;
  row-gap: 20px;
}

.video-card {
  .cover-wrap {
    position: relative;
    height: 108px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    right: 6px;
    bottom: 6px;
    min-width: 48px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.45);
  }

  h3 {
    margin: 0;
    color: #333;
    font-size: 18px;
    line-height: 1.45;
    min-height: 52px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .meta {
    margin: 8px 0 0;
    color: #9a9a9a;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;

    .eye {
      font-size: 14px;
      margin-right: 2px;
    }

    .source {
      margin-left: auto;
    }
  }
}
</style>
