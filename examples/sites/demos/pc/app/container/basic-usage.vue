<template>
  <div class="demo-container">
    <div class="option-row">
      <span class="tip">选择版型：</span>
      <tiny-radio-group v-model="pattern">
        <tiny-radio label="default">默认：default</tiny-radio>
        <tiny-radio label="classic">经典：classic</tiny-radio>
        <tiny-radio label="simple">简约：simple</tiny-radio>
        <tiny-radio label="fashion">时尚：fashion</tiny-radio>
        <tiny-radio label="legend">传奇：legend</tiny-radio>
      </tiny-radio-group>
    </div>
    <tiny-container :pattern="pattern">
      <div class="demo-center">Main</div>
      <template #header>
        <div class="demo-center">Header</div>
      </template>
      <template #aside>
        <div class="demo-center">Aside</div>
      </template>
      <template #footer>
        <div class="demo-center">Footer</div>
      </template>
    </tiny-container>
  </div>
</template>

<script lang="jsx">
import { TinyContainer, TinyRadio, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyContainer,
    TinyRadio,
    TinyRadioGroup
  },
  data() {
    return {
      pattern: 'default'
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
  background-color: var(--tv-color-info-bg-light, #0067d1);
  border: 3px solid var(--tv-color-border-container, #fff);
  color: var(--tv-color-info-text, #fff);
  line-height: 48px;
}

.demo-container .tiny-container :deep(.tiny-container__aside) {
  background-color: var(--tv-color-error-bg-light, #0067d180);
  border: 3px solid var(--tv-color-border-container, #fff);
  color: var(--tv-color-error-text, #fff);
}

.demo-container .tiny-container :deep(.tiny-container__main) {
  background-color: var(--tv-color-warn-bg-light, #0067d133);
  border: 3px solid var(--tv-color-border-container, #fff);
  color: var(--tv-color-warn-text);
}

.demo-container .tiny-container :deep(.tiny-container__footer) {
  background-color: var(--tv-color-success-bg-light, #f0f7ff);
  border: 3px solid var(--tv-color-border-container, #fff);
  color: var(--tv-color-success-text);
}
.demo-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
