<template>
  <tiny-user-contact :data="data" popper-class="custom-user-contact" :popper-append-to-body="false">
    <div>自定义插槽内容</div>
  </tiny-user-contact>
</template>

<script setup lang="jsx">
import { UserContact as TinyUserContact } from '@opentiny/vue'
import { reactive } from 'vue'

const data = reactive({
  imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
  userName: '小红',
  userDescription: 'test1',
  values: [
    { text: '部门', value: '某部门' },
    { text: '邮件', value: 'example@example.com' },
    { text: '手机', value: '1234567890' }
  ]
})
</script>
