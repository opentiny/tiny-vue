<template>
  <div class="card-wrap">
    <tiny-card title="内容区为默认插槽">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="标题右侧插槽-title-right">
      <template #title-right>
        <tiny-tag type="success" size="mini" effect="light">大数据</tiny-tag>
      </template>
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="标题左侧插槽-title-left">
      <template #title-left>
        <div style="margin-right: 16px; cursor: pointer" @click="isOpen = !isOpen">
          <TinyIconChevronDown v-if="!isOpen" />
          <TinyIconChevronUp v-else />
        </div>
      </template>
      <p v-show="isOpen">
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="底部插槽-footer">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
      <template #footer>
        <div style="display: flex">
          <img :src="useHead" style="width: 36px; height: 36px" alt="user-head" />
          <div style="padding-left: 16px">
            <p style="font-size: 14px">刘小华</p>
            <p style="font-size: 14px; color: #777">2023-03-20 10:10:10</p>
          </div>
        </div>
      </template>
    </tiny-card>
  </div>
</template>

<script setup>
import { Card as TinyCard, Tag as TinyTag } from '@opentiny/vue'
import { IconChevronDown, IconChevronUp } from '@opentiny/vue-icon'
import { ref } from 'vue'

const userHead = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`)
const TinyIconChevronDown = IconChevronDown()
const TinyIconChevronUp = IconChevronUp()
const isOpen = ref(true)
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
