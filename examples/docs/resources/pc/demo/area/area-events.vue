<template>
  <tiny-area
    v-model="value"
    placeholder="请选择"
    @change-region="changeRegion"
    @change-rep="changeRep"
    @change-office="changeOffice"
  ></tiny-area>
</template>

<script lang="jsx">
import { Area } from '@opentiny/vue'

export default {
  components: {
    TinyArea: Area
  },
  data() {
    return {
      value: ['3623', '4199', '649991', '661414']
    }
  },
  methods: {
    changeRegion(value) {
      window.tinyLog('当前选择的 Region 为:', value)
    },
    changeRep(value) {
      window.tinyLog('当前选择的 Rep 为:', value)
    },
    changeOffice(value) {
      window.tinyLog('当前选择的 Office 为:', value)
    }
  }
}
</script>
