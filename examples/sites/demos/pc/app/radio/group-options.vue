<template>
  <div>
    <tiny-radio-group v-model="value" :options="options"></tiny-radio-group>
    <div class="mt-20">
      <tiny-radio-group v-model="value" type="button" :options="burronOptions"></tiny-radio-group>
    </div>
  </div>
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
      ],
      burronOptions: [
        { label: 'A', text: '公交', events: { click: this.handleClick } },
        { label: 'B', text: '地铁' }
      ]
    }
  },
  methods: {
    handleClick() {
      Modal.message({
        message: 'click',
        status: 'info'
      })
    }
  }
}
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
