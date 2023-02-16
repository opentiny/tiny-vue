<template>
  <tiny-user-contact :data="data"></tiny-user-contact>
</template>

<script>
import { UserContact } from '@opentiny/vue'

export default {
  components: {
    TinyUserContact: UserContact
  },
  setup() {
    return {
      data: {
        imgUrl: 'static/images/fruit.jpg',
        userName: 'test1',
        userDescription: 'test1',
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
