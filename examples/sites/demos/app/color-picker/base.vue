<template>
  <div>
    <tiny-color-picker v-model="color" />
  </div>
</template>

<script lang="jsx">
import {ColorPicker} from '@opentiny/vue';
export default {
  components: {
    TinyColorPicker: ColorPicker
  }
}
</script>