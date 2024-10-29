<template>
  <div>
    <tiny-radio v-model="value" label="1" @change="change"> 选项一 </tiny-radio>
    <tiny-radio v-model="value" label="2" @change="change"> 选项二 </tiny-radio>
  </div>
</template>

<script>
import { TinyRadio, TinyRadioGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRadio,
    TinyRadioGroup
  },
  data() {
    return {
      value: '1',
      radio: '1'
    }
  },
  methods: {
    change(label) {
      TinyModal.message({
        message: 'change 事件，选中的 Radio label 值为：' + label,
        status: 'info'
      })
    }
  }
}
</script>
