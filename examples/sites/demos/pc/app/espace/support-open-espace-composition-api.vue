<template>
  <tiny-user-contact :data="data" :espace="espace"></tiny-user-contact>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { UserContact as TinyUserContact } from '@opentiny/vue'

const data = ref({
  imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
  userName: '小红',
  userDescription: 'test1',
  values: [
    { text: '部门', value: '某部门' },
    { text: '邮件', value: 'example@example.com' },
    { text: '手机', value: '1234567890' }
  ]
})
const espace = ref([
  { type: 'im', value: 'test1', icon: 'icon-message-circle' },
  { type: 'sip', value: 'test1', icon: 'icon-telephone-circle' },
  {
    type: 'mailto',
    value: 'example@example.com',
    icon: 'icon-email-circle'
  }
])
</script>
