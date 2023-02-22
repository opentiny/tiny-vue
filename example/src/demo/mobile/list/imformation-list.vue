<template>
  <div class="demo">
    <div class="page__hd">
      <h1 class="page__title">List</h1>
      <p class="page__desc">资讯类列表</p>
    </div>
    <div class="list">
      <p class="demo-title">上图下文无辅助文本</p>
      <tiny-list v-for="item of dataList" :key="item.id">
        <template #prefix>
          <img :src="item.img" class="widthAll" />
        </template>
        <template #default>
          <div class="demo-content">{{ item.content }}</div>
        </template>
      </tiny-list>
    </div>
    <div class="list">
      <p class="demo-title">上图下文 - 辅助文本</p>
      <tiny-list v-for="item of dataList1" :key="item.id">
        <template #prefix>
          <img :src="item.img" class="widthAll" />
        </template>
        <template #default>
          <div class="demo-content">{{ item.content }}</div>
        </template>
        <template #description>
          <div class="demo-description">{{ item.contentdes }}</div>
        </template>
      </tiny-list>
    </div>
    <div class="list">
      <p class="demo-title">上图下文 - 图标+辅助文本</p>
      <tiny-list v-for="item of dataList2" :key="item.id">
        <template #prefix>
          <img :src="item.img" class="widthAll" />
        </template>
        <template #default>
          <div class="demo-content">
            {{ item.content }}
          </div>
        </template>
        <template #description>
          <div class="demo-description"><icon-dialog class="demo-icon"></icon-dialog> {{ item.contentdes }}</div>
        </template>
      </tiny-list>
    </div>
    <div class="list">
      <p class="demo-title">上图下文(小图) - 图标+辅助文本</p>
      <div class="demo-wrap">
        <tiny-list v-for="(item, index) in dataList3" :key="index">
          <template #prefix>
            <img :src="item.img" class="widthAll" />
          </template>
          <template #default>
            <div class="demo-content demo-content-item">
              {{ item.content }}
            </div>
          </template>
          <template #description>
            <div class="demo-description"><icon-dialog></icon-dialog> {{ item.contentdes }}</div>
          </template>
        </tiny-list>
      </div>
    </div>
    <div class="list">
      <p class="demo-title">上图下文(小图)</p>
      <div class="demo-wrap">
        <tiny-list v-for="(item, index) in dataList4" :key="index">
          <template #prefix>
            <img :src="item.img" class="widthAll" />
          </template>
          <template #default>
            <div class="demo-content demo-content-item">
              {{ item.content }}
            </div>
          </template>
        </tiny-list>
      </div>
    </div>
  </div>
</template>
<script>
import { List } from '@opentiny/vue'
import { iconDialog } from '@opentiny/vue-icon'
export default {
  components: {
    TinyList: List,
    IconDialog: iconDialog()
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: 'AI系列培训-Introduction to AI & ML-分布式',
          subtext: '',
          contentdes: '',
          img: 'static/images/px.png'
        }
      ],
      dataList1: [
        {
          id: 1,
          content:
            'AI系列培训-Introduction to AI & ML-分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流',
          subtext: '',
          contentdes: '01-14 00:00',
          img: 'static/images/zh.png'
        }
      ],
      dataList2: [
        {
          id: 1,
          content:
            'AI系列培训-Introduction to AI & ML-分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流',
          subtext: '',
          contentdes: '1235评论',
          img: 'static/images/dsj.png'
        }
      ],
      dataList3: [
        {
          id: 1,
          content:
            'AI系列培训-Introduction to AI & ML-分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流',
          subtext: '',
          contentdes: '1235播放',
          img: 'static/images/ry.png'
        },
        {
          id: 2,
          content: 'AI系列培训',
          subtext: '',
          contentdes: '1235播放',
          img: 'static/images/ld.png'
        }
      ],
      dataList4: [
        {
          id: 1,
          content:
            'AI系列培训-Introduction to AI & ML-分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流,分布式与并行与交流，分布式与并行与交流',
          subtext: '',
          contentdes: '1235播放',
          img: 'static/images/jz.png'
        },
        {
          id: 2,
          content: 'AI系列培训',
          subtext: '',
          contentdes: '1235播放',
          img: 'static/images/dh.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.demo {
  background: #eeeeee;
  height: 100%;
  overflow-y: scroll;
}
.widthAll {
  width: 100%;
}
.demo-title {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0.77em;
  margin-bottom: 0.3em;
  color: #666;
  font-size: 14px;
}
.demo-content {
  display: -webkit-box;
  max-height: 44px;
  margin-top: 8px;
  color: #333;
  overflow: hidden;
  font-size: 16px;
  line-height: 22px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.demo-description {
  display: table-cell;
  box-sizing: content-box;
  padding-top: 8px;
  color: #999;
  vertical-align: middle;
  font-size: 12px;
  line-height: 16px;
}
.demo-icon {
  width: 16px;
  height: 16px;
  background-position: 0 -96px;
  fill: #999;
}
.demo-wrap {
  display: flex;
}
.demo-content-item {
  height: 38px;
  font-size: 14px;
  line-height: 19px;
}
</style>
