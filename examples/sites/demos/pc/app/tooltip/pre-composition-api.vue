<template>
  <tiny-tooltip pre :content="content" placement="bottom" effect="light">
    <tiny-button class="tiny-button tiny-button--primary">文本预格式化</tiny-button>
  </tiny-tooltip>
</template>

<script setup>
import { ref } from 'vue'
import { Tooltip as TinyTooltip, Button as TinyButton } from '@opentiny/vue'

const content = ref(
  [
    '空山新雨后，天气晚来秋。',
    '  明月松间照，清泉石上流。',
    '竹喧归浣女，莲动下渔舟。',
    '  随意春芳歇，王孙自可留。'
  ].join('\n')
)
</script>

<style lang="css" scoped>
.box {
  margin: auto;
}

.box .top {
  text-align: center;
}

.box .left {
  float: left;
  width: 90px;
}

.box .right {
  float: right;
  width: 90px;
}

.box .bottom {
  clear: both;
  text-align: center;
}

.box .item {
  margin: 4px;
  display: inline-block;
}
</style>
