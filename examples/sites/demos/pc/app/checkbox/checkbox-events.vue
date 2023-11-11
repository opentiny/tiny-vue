<template>
  <div>
    <tiny-checkbox-group v-model="checked" @change="valueChange">
      <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
      <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
    </tiny-checkbox-group>
    {{ logger }}
  </div>
</template>

<script>
import { CheckboxButton, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1'],
      logger: ''
    }
  },
  methods: {
    valueChange(val) {
      this.logger = `当前选择：${JSON.stringify(val)}`
    }
  }
}
</script>
