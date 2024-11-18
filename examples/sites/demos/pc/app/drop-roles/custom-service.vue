<template>
  <div class="demo-drop-roles-class">
    <tiny-drop-roles
      v-model="value"
      placeholder="选择角色"
      :fields="fields"
      :fetch-role="getRoleList"
      :fetch-current-role="getCurrentRole"
      @change="change"
    ></tiny-drop-roles>
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
      value: '',
      fields: {
        textField: 'name',
        valueField: 'id'
      }
    }
  },
  methods: {
    getRoleList() {
      return Promise.resolve([
        { name: 'Administrator', id: '001' },
        { name: 'Developer', id: '002' }
      ])
    },
    getCurrentRole() {
      return Promise.resolve({ name: 'Developer', id: '002' })
    },
    change(role) {
      // 下拉角色组件需要触发 change 事件去发送请求，role 为要切换的角色
      return Promise.resolve(
        TinyNotify({
          title: '切换后的角色是：' + role + '，根据角色发送请求的 URL 如下：',
          message: window.location.href,
          offset: 0
        })
      )
    }
  }
}
</script>

<style scoped>
.demo-drop-roles-class {
  width: 280px;
}
</style>
