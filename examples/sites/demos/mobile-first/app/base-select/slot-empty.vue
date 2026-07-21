<template>
  <tiny-base-select v-model="value">
    <template #empty>
      <div class="custom-empty">
        <p>APIG 网关异常</p>
        <tiny-button size="small">重新加载</tiny-button>
      </div>
    </template>
  </tiny-base-select>
</template>

<script>
import { TinyBaseSelect, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect,
    TinyButton
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
[data-tag='tiny-base-select'] {
  width: 280px;
}

.custom-empty {
  text-align: center;
  padding: 20px;

  .tiny-button {
    margin-top: 8px;
  }
}
</style>
