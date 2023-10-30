<template>
  <div class="h-56 flex flex-col justify-between">
    <div>
      <div>Small</div>
      <br />
      <tiny-switch size="small" types="word"></tiny-switch>
      <tiny-switch v-model="value1" size="small" types="word"></tiny-switch>
    </div>
    <div>
      <div>Mini</div>
      <br />
      <tiny-switch size="mini" types="word"></tiny-switch>
      <tiny-switch v-model="value1" size="mini" types="word"></tiny-switch>
    </div>
    <div>
      <div>Medium</div>
      <br />
      <tiny-switch size="medium" types="word"></tiny-switch>
      <tiny-switch v-model="value1" size="medium" types="word"></tiny-switch>
    </div>
  </div>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value1: true
    }
  }
}
</script>
