<template>
  <div>
    <tiny-drop-roles size="medium" v-model="value" @change="change"></tiny-drop-roles>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { DropRoles } from '@opentiny/vue'
import Notify from '@opentiny/vue-notify'

export default {
  components: {
    TinyDropRoles: DropRoles
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(role) {
      // 下拉角色组件需要触发 change 事件去发送请求，role 为要切换的角色
      this.$service.common.getChangeRoleUrl(role).then((url) => {
        // window.location.href = url
        Notify({
          title: '切换后的角色是：' + role + '，根据角色发送请求的 URL 如下：',
          message: url,
          offset: 0
        })
      })
    }
  }
}
</script>
