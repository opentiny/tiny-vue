<template>
  <tiny-radio-group v-model="value" :options="options"></tiny-radio-group>
</template>

<script>
import { RadioGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      value: 'A',
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
