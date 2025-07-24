<template>
  <tiny-area
    v-model="value"
    placeholder="请选择"
    @change-region="changeRegion"
    @change-rep="changeRep"
    @change-office="changeOffice"
  ></tiny-area>
</template>

<script>
import { TinyArea, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyArea
  },
  data() {
    return {
      value: ['3623', '4199', '649991', '661414']
    }
  },
  methods: {
    changeRegion(value) {
      TinyNotify({
        message: '当前选择的 Region 为：' + value,
        position: 'top-right'
      })
    },
    changeRep(value) {
      TinyNotify({
        message: '当前选择的 Rep 为：' + value,
        position: 'top-right'
      })
    },
    changeOffice(value) {
      TinyNotify({
        message: '当前选择的 Office 为：' + value,
        position: 'top-right'
      })
    }
  }
}
</script>
