<template>
  <div class="mobile-list-demo">
    <div class="demo-item">
      <p>主文本+次文本</p>
      <tiny-list :content="content" :sub-text="text"></tiny-list>
    </div>
    <div class="demo-item">
      <p>主文本+次文本(可选)+提示性图标</p>
      <tiny-list
        v-for="item of dataList"
        :key="item.id"
        :content="content"
        :sub-text="text"
      >
        <template #suffix>
          <icon-chevron-right />
        </template>
      </tiny-list>
    </div>
    <div class="demo-item">
      <p>操作性图标+主文本</p>
      <tiny-list v-for="item of dataList" :key="item.id" :content="content">
        <template #prefix>
          <icon-help />
        </template>
      </tiny-list>
    </div>
    <div class="demo-item">
      <p>主文本+次文本(可选)+提示性图标</p>
      <tiny-list v-for="item of dataList" :key="item.id" :content="content">
        <template #prefix>
          <icon-help />
        </template>
        <template #suffix>
          <icon-chevron-right />
        </template>
      </tiny-list>
    </div>
    <div class="demo-item img-list">
      <p>图文列表</p>
      <tiny-list
        v-for="item of dataList"
        :key="item.id"
        :content="item.content"
      >
        <template #prefix>
          <img
            :src="item.img"
            alt="list des"
            style="display: block; width: 100px"
          />
        </template>
        <template #suffix>
          <icon-chevron-right />
        </template>
      </tiny-list>
    </div>
    <div class="demo-item item-no-title">
      <tiny-list :content="content" :sub-text="text" :content-des="des">
        <template #prefix>
          <img
            :src="imgsrc"
            alt="list des"
            style="display: block; width: 40px; border-radius: 20px"
          />
        </template>
      </tiny-list>
    </div>
    <div class="demo-item item-no-title">
      <tiny-list :content="content" :content-des="des">
        <template #prefix>
          <img
            :src="imgsrc"
            alt="list des"
            style="display: block; width: 48px"
          />
        </template>
      </tiny-list>
    </div>
  </div>
</template>

<script>
import { List } from '@opentiny/vue'
import { iconHelp, iconChevronRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyList: List,
    IconHelp: iconHelp(),
    IconChevronRight: iconChevronRight()
  },
  data() {
    return {
      content: '主文本',
      text: '次文本',
      des: '辅助说明文字',
      imgsrc: 'static/images/icon.png',
      dataList: [
        {
          id: 1,
          content: '相机胶卷（2023）',
          img: 'static/images/dog1.png'
        },
        {
          id: 2,
          content: '相机胶卷（2023）',
          img: 'static/images/dog2.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mobile-list-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}
.mobile-list-demo::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.mobile-list-demo .demo-item p {
  font-size: 12px;
  padding: 12px;
}
.img-list .tiny-mobile-list.is-show-prefix:not(:last-child)::after {
  left: 16px;
}
.item-no-title {
  margin-top: 24px;
}
.mobile-list-demo .item-no-title p {
  padding: 0;
}
</style>
