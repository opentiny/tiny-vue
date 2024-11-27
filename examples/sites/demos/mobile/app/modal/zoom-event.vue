<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">窗口缩放时触发事件</tiny-button>
    <tiny-modal v-model="value1" type="confirm" resize show-footer @zoom="zoomClick">
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
    zoomClick() {
      TinyModal.message({ message: '窗口缩放时触发事件', tiny_mode: 'mobile' })
    }
  }
}
</script>
