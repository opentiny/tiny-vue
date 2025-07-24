<template>
  <tiny-radio-group v-model="value" :options="options"></tiny-radio-group>
</template>

<script>
import { TinyRadioGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRadioGroup
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
      TinyModal.message({ message: 'click' })
    }
  }
}
</script>
