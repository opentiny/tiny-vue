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

<script>
import { TinySteps } from '@opentiny/vue'
import { iconPagelink, iconFileupload, iconVersiontree, iconCheckedTrue } from '@opentiny/vue-icon'

export default {
  components: {
    TinySteps,
    TinyIconPagelink: iconPagelink(),
    TinyIconFileupload: iconFileupload(),
    TinyIconVersiontree: iconVersiontree(),
    TinyIconCheckedTrue: iconCheckedTrue()
  },
  data() {
    return {
      active: 1,
      data: [
        {
          name: '网站搭建',
          status: 'done'
        },
        { name: '域名注册', status: 'doing' },
        { name: '网站备案', status: 'doing' },
        { name: '域名解析（可选填）', status: 'doing' },
        { name: 'SSL证书', status: 'disabled' }
      ]
    }
  }
}
</script>

<style scoped>
.link-svg {
  fill: #fff;
}
</style>
