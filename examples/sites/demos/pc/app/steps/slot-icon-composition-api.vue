<template>
  <tiny-steps line :data="data" :active="active">
    <template #icon="{ node, index }">
      <div v-if="index === 1" class="tiny-steps-icon active">
        <TinyIconPagelink class="link-svg"></TinyIconPagelink>
      </div>
      <div v-else-if="index === 3" class="tiny-steps-icon">
        <TinyIconVersiontree></TinyIconVersiontree>
      </div>
      <div v-else-if="index === 4" class="tiny-steps-icon">
        <TinyIconCheckedTrue></TinyIconCheckedTrue>
      </div>
      <div v-else-if="node.name === '网站备案'" class="tiny-steps-icon">
        <TinyIconFileupload></TinyIconFileupload>
      </div>
    </template>
  </tiny-steps>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { TinySteps } from '@opentiny/vue'
import { iconPagelink, iconFileupload, iconVersiontree, iconCheckedTrue } from '@opentiny/vue-icon'

const TinyIconPagelink = iconPagelink()
const TinyIconFileupload = iconFileupload()
const TinyIconVersiontree = iconVersiontree()
const TinyIconCheckedTrue = iconCheckedTrue()
const active = ref(1)
const data = reactive([
  {
    name: '网站搭建',
    status: 'done'
  },
  { name: '域名注册', status: 'doing' },
  { name: '网站备案', status: 'doing' },
  { name: '域名解析（可选填）', status: 'doing' },
  { name: 'SSL证书', status: 'disabled' }
])
</script>

<style scoped>
.link-svg {
  fill: #fff;
}
</style>
