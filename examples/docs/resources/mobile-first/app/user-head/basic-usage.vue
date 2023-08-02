<template>
  <div class="flex justify-between w-full">
    <div class="mt-1.5">
      <span class="text-center mb-2 block">中文</span>
      <tiny-user-head class="flex flex-col items-center" type="label" round v-model="text"></tiny-user-head>
    </div>
    <div class="mt-1.5">
      <span class="text-center mb-2 block">图标</span>
      <tiny-user-head class="flex flex-col items-center" type="icon"></tiny-user-head>
    </div>
    <div class="mt-1.5">
      <span class="text-center mb-2 block">英文</span>
      <tiny-user-head class="flex flex-col items-center" type="label" v-model="textEn">
      </tiny-user-head>
    </div>
    <div class="mt-1.5">
      <span class="text-center mb-2 block">图片</span>
      <tiny-user-head class="flex flex-col items-center" type="image" v-model="imgUrl"></tiny-user-head>
    </div>
  </div>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      text: '中文',
      textEn: 'Meta',
      imgUrl: 'https:/webnova/static/img/tiny3bg.b5dd307.jpg'
    }
  }
}
</script>
