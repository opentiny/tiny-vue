<template>
  <tiny-user-contact :data="data" :espace="espace"></tiny-user-contact>
</template>

<script setup>
import { UserContact as TinyUserContact } from '@opentiny/vue'
import { reactive } from 'vue'

const data = reactive({
  imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
  userName: '张三',
  roleNumber: 'z00100001',
  values: [
    { text: '部门', value: '某部门' },
    { text: '邮件', value: 'example@example.com' },
    { text: '手机', value: '1234567890' }
  ],
  espace: [
    { type: 'im', value: 'z00100001', icon: 'icon-dialog' },
    { type: 'sip', value: 'z00100001', icon: 'icon-telephone' },
    {
      type: 'mailto',
      value: 'zhangsan@xxx.com',
      icon: 'icon-email-add'
    }
  ]
})
</script>
