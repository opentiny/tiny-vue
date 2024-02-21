<template>
  <div class="flex flex-col">
    <div class="flex justify-between w-1/2 h-full">
      <div class="mt-1.5">
        <tiny-user-head-group @click="handleClick" horizontal :group-size="30" :list="imageList1">
        </tiny-user-head-group>
      </div>
      <div class="mt-1.5">
        <tiny-popover width="200" trigger="hover" append-to-body content="这是一段文字" placement="top">
          <template #reference>
            <tiny-user-head-group @mouseenter="mouseEnter" horizontal :group-size="30" :list="imageList1">
            </tiny-user-head-group>
          </template>
        </tiny-popover>
      </div>
      <div class="mt-1.5">
        <tiny-user-head-group horizontal show-max :group-size="30" :list="imageList1"> </tiny-user-head-group>
      </div>
    </div>
  </div>
</template>

<script>
import { UserHeadGroup, Popover, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyUserHeadGroup: UserHeadGroup,
    TinyPopover: Popover
  },
  data() {
    return {
      imageList1: [
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        },
        {
          type: 'image',
          modelValue: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          round: true
        }
      ]
    }
  },
  methods: {
    handleClick() {
      Modal.message('click')
    },
    mouseEnter() {
      Modal.message('mouseEnter')
    }
  }
}
</script>
