<template>
  <div class="flex flex-col">
    <div class="flex justify-between w-1/2 h-full">
      <div class="mt-1.5">
        <span class="text-center mb-2 block">中文</span>
        <tiny-user-head-group :group-size="19" :list="labelList1"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">中文</span>
        <tiny-user-head-group :group-size="19" :list="labelList2"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">中文</span>
        <tiny-user-head-group :group-size="19" :list="labelList3"> </tiny-user-head-group>
      </div>
    </div>
    <div class="flex justify-between w-1/2 h-full">
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图标</span>
        <tiny-user-head-group :group-size="19" :list="iconList1"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图标</span>
        <tiny-user-head-group :group-size="19" :list="iconList2"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图标</span>
        <tiny-user-head-group :group-size="19" :list="iconList3"> </tiny-user-head-group>
      </div>
    </div>
    <div class="flex justify-between w-1/2 h-full">
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图片</span>
        <tiny-user-head-group :group-size="19" :list="imageList1"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图片</span>
        <tiny-user-head-group :group-size="19" :list="imageList2"> </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <span class="text-center mb-2 block">图片</span>
        <tiny-user-head-group :group-size="19" :list="imageList3"> </tiny-user-head-group>
      </div>
    </div>
    <div class="flex justify-between w-full h-full">
      <div class="mt-1.5 flex justify-around w-full items-end">
        <span class="text-center mb-2 block">中文</span>
        <tiny-user-head-group :group-size="24" :list="labelList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="32" :list="labelList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="40" :list="labelList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="48" :list="labelList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="64" :list="labelList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="80" :list="labelList3"> </tiny-user-head-group>
      </div>
    </div>
    <div class="flex justify-between w-full h-full">
      <div class="mt-1.5 flex justify-around w-full items-end">
        <span class="text-center mb-2 block">图标</span>
        <tiny-user-head-group :group-size="24" :list="iconList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="32" :list="iconList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="40" :list="iconList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="48" :list="iconList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="64" :list="iconList3"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="80" :list="iconList3"> </tiny-user-head-group>
      </div>
    </div>
    <div class="flex justify-between w-full h-full">
      <div class="mt-1.5 flex justify-around w-full items-end">
        <span class="text-center mb-2 block">图片</span>
        <tiny-user-head-group :group-size="24" :list="imageList2"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="32" :list="imageList2"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="40" :list="imageList2"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="48" :list="imageList2"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="64" :list="imageList2"> </tiny-user-head-group>
        <tiny-user-head-group :group-size="80" :list="imageList2"> </tiny-user-head-group>
      </div>
    </div>
  </div>
</template>

<script>
import { UserHeadGroup } from '@opentiny/vue'

export default {
  components: {
    TinyUserHeadGroup: UserHeadGroup
  },
  data() {
    return {
      labelList1: [
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' }
      ],
      labelList2: [
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' }
      ],
      labelList3: [
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' },
        { type: 'label', modelValue: '中文' }
      ],
      iconList1: [{ type: 'icon' }, { type: 'icon' }],
      iconList2: [{ type: 'icon' }, { type: 'icon' }, { type: 'icon' }],
      iconList3: [
        { type: 'icon' },
        { type: 'icon' },
        { type: 'icon' },
        { type: 'icon' },
        { type: 'icon' },
        { type: 'icon' }
      ],
      imageList1: [
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        }
      ],
      imageList2: [
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        }
      ],
      imageList3: [
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
          round: true
        }
      ],
      text: '中文',
      textEn: 'Meta',
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
    }
  }
}
</script>
