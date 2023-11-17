<template>
  <div class="h-56 flex flex-col justify-between">
    <div>
      <div>Small</div>
      <br />
      <tiny-switch size="small"></tiny-switch>
      <tiny-switch v-model="value1" size="small"></tiny-switch>
    </div>
    <div>
      <div>Mini</div>
      <br />
      <tiny-switch size="mini"></tiny-switch>
      <tiny-switch v-model="value1" size="mini"></tiny-switch>
    </div>
    <div>
      <div>Medium</div>
      <br />
      <tiny-switch size="medium"></tiny-switch>
      <tiny-switch v-model="value1" size="medium"></tiny-switch>
    </div>
  </div>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  }
}
</script>
