<template>
  <tiny-user-contact :data="data" :show-number="true" :show-name="true" :show-img="false"></tiny-user-contact>
</template>

<script>
import { UserContact } from '@opentiny/vue'

export default {
  components: {
    TinyUserContact: UserContact
  },
  data() {
    return {
      data: {
        imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
        userName: '小红',
        roleNumber: '1234567890',
        values: [
          { text: '部门', value: '某部门' },
          { text: '邮件', value: 'example@example.com' },
          { text: '手机', value: '1234567890' }
        ]
      }
    }
  }
}
</script>
