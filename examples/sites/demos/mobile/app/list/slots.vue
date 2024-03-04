<template>
  <div>
    <tiny-list v-for="item of dataList" :key="item.id">
      <b>{{ item.content }}</b>
      <template #description>
        <span style="color: blue">{{ item.subtext }}</span>
      </template>
      <template #prefix>
        <img :src="item.img" style="height: 40px; width: 40px" />
      </template>
      <template #suffix>
        <icon-rightward></icon-rightward>
      </template>
    </tiny-list>
  </div>
</template>

<script lang="jsx">
import { List } from '@opentiny/vue'
import { iconRightward } from '@opentiny/vue-icon'

export default {
  components: {
    TinyList: List,
    IconRightward: iconRightward()
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: '主文本1',
          subtext: '次文本1',
          contentdes: '这是描述文本1',
          img: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`
        },
        {
          id: 2,
          content: '主文本2',
          subtext: '次文本2',
          contentdes: '这是描述文本2',
          img: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`
        },
        {
          id: 3,
          content: '主文本3',
          subtext: '次文本3',
          contentdes: '这是描述文本3',
          img: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog3.png`
        }
      ]
    }
  }
}
</script>
