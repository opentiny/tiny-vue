<template>
  <div class="demo-steps-slot-item-footer">
    <tiny-button class="mb10" @click="handleChange"
      >点击{{ stepsData.length > 3 ? '减少' : '增加' }}一个节点</tiny-button
    >
    <tiny-steps :data="stepsData" line>
      <template #itemFooter="{ slotScope: { links } }">
        <div v-if="links">
          <tiny-link class="item-link" v-for="link in links" :key="link.title">
            <template v-if="link.icon" #icon>
              <component :is="link.icon" class="tiny-svg-size"></component>
            </template>
            {{ link.title }}
          </tiny-link>
        </div>
      </template>
    </tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Steps as TinySteps, Link as TinyLink } from '@opentiny/vue'
import { IconFilletExternalLink } from '@opentiny/vue-icon'

const stepsData = ref([
  {
    name: '创建桶（超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题）',
    status: 'done',
    description:
      '桶是存储对象的容器，用于存储您的数据，我这个描述要超出隐藏，我这个描述要超出隐藏，我这个描述要超出隐藏',
    links: [{ title: '前往创建' }, { title: '前往创建' }]
  },
  { name: '上传文件', status: 'doing', description: '上传您项目相关的文件至桶内存储' },
  {
    name: '购买资源包（可选）',
    description: '资源包是预付费的优惠套餐，可降低存储成本。',
    links: [{ title: '了解套餐详情', icon: IconFilletExternalLink() }]
  }
])
const handleChange = () => {
  if (stepsData.value.length > 3) {
    stepsData.value.pop()
  } else {
    stepsData.value.push({
      name: '域名解析',
      description: '域名解析的内容'
    })
  }
}
</script>

<style scoped>
.item-link + .item-link {
  margin-left: 16px;
}
</style>
