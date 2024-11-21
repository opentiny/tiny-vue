<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">点击确定按钮触发事件</tiny-button>
    <tiny-modal v-model="value1" type="confirm" show-footer @confirm="confirmClick">
      <template #default>
        <p>test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton,
    TinyModal
  },
  data() {
    return {
      value1: false
    }
  },
  methods: {
    confirmClick() {
      TinyModal.message({ message: '点击确定按钮时触发事件', tiny_mode: 'mobile' })
    }
  }
}
</script>
