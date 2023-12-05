<template>
  <div class="demo-container">
    <div class="option-row">
      <span class="tip">选择版型：</span>
      <tiny-radio-group v-model="pattern">
        <tiny-radio label="default">默认:default</tiny-radio>
        <tiny-radio label="classic">经典:classic</tiny-radio>
      </tiny-radio-group>
    </div>
    <tiny-container :pattern="pattern" :left-width="leftWidth" :right-width="rightWidth">
      <template #left>
        <div>标题标题标题标题标题</div>
      </template>
      <template #center>
        <div>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
      </template>
      <template #right>
        <div>状态状态状态状态状态</div>
      </template>
    </tiny-container>
  </div>
</template>

<script>
import { Container, Radio, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      pattern: 'default',
      leftWidth: 80,
      rightWidth: 80
    }
  }
}
</script>

<style scoped>
.option-row {
  display: flex;
  align-items: center;
}
.option-row > span {
  display: inline-block;
  flex-shrink: 0;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
}
.option-row .tiny-radio-group {
  flex-wrap: wrap;
  height: 60px;
}
.demo-container .tiny-container {
  height: 300px;
  color: #5f6774;
  text-align: center;
  font-size: 18px;
  position: relative;
  margin-top: 24px;
}

.demo-container .tiny-container :deep(.tiny-container__header) {
  background-color: #ecf8ff;
  border: 3px solid #ffffff;
  color: #5b90af;
}

.demo-container .tiny-container :deep(.tiny-container__aside) {
  background-color: #fff0f0;
  border: 3px solid #ffffff;
  color: #d27070;
}

.demo-container .tiny-container :deep(.tiny-container__main) {
  background-color: #fffdec;
  border: 3px solid #ffffff;
  color: #b1a859;
}

.demo-container .tiny-container :deep(.tiny-container__footer) {
  background-color: #e8ffed;
  border: 3px solid #ffffff;
  color: #84a18a;
}
</style>
