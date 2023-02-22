<template>
  <tiny-checkbox-group v-model="checkList" type="checkbox" :options="options"></tiny-checkbox-group>
</template>

<script>
import { CheckboxGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checkList: ['A'],
      options: [
        { label: 'A', text: '很好', events: { click: this.handleClick } },
        { label: 'B', text: '一般' }
      ]
    }
  },
  methods: {
    handleClick() {
      Modal.message({ message: 'click' })
    }
  }
}
</script>
