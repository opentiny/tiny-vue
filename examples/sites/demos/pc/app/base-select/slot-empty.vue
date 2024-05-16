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
import { BaseSelect, Button } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
    TinyButton: Button
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.custom-empty {
  padding: 87px 0;
  text-align: center;

  p {
    font-size: 12px;
    color: #595959;
    line-height: 1.5;
  }
  .tiny-button {
    margin-top: 8px;
  }
}
</style>
