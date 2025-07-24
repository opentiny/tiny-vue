<template>
  <div class="demo-drop-roles-class">
    <tiny-drop-roles v-model="value" @change="change"></tiny-drop-roles>
  </div>
</template>

<script lang="jsx">
import { TinyDropRoles, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyDropRoles
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
        TinyNotify({
          title: '切换后的角色是：' + role + '，根据角色发送请求的 URL 如下：',
          message: url,
          offset: 0
        })
      })
    }
  }
}
</script>

<style scoped>
.demo-drop-roles-class {
  width: 280px;
}
</style>
