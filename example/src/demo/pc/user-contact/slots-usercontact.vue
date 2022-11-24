<template>
  <tiny-user-contact :data="data" popper-class="custom-user-contact" :popper-append-to-body="false">
    <div>自定义插槽内容</div>
  </tiny-user-contact>
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
        imgUrl: 'images/user-head.png',
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
