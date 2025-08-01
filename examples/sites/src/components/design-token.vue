<template>
  <div class="tiny-token-list">
    <div class="tiny-token-title">
      <h2>{{ capName }} 主题变量</h2>
      <tiny-popover width="800" trigger="hover">
        <div>
          <div class="tiny-token-demo">
            <async-highlight :code="content"></async-highlight>
          </div>
          <tiny-link
            :icon="TinyIconViewFlowchart"
            :underline="false"
            href="https://opentiny.design/opentiny-design/guide/theme"
            target="_blank"
            >如何定制？</tiny-link
          >
        </div>
        <template #reference>
          <div class="tiny-design">
            <tiny-button type="text" :icon="TinyIconHelpCircle" text="如何定制"> </tiny-button>
          </div>
        </template>
      </tiny-popover>
    </div>
    <tiny-grid :data="tokenList" row-id="name">
      <tiny-grid-column field="token" title="Token名称"> </tiny-grid-column>
      <tiny-grid-column field="desc" title="描述"> </tiny-grid-column>
      <tiny-grid-column field="tokenValue" title="默认值"> </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { TinyGrid, TinyGridColumn, TinyPopover, TinyButton, TinyLink } from '@opentiny/vue'
import { camelize, capitalize } from '@vue/shared'
import { computed, ref } from 'vue'
import { iconHelpCircle, iconViewFlowchart } from '@opentiny/vue-icon'
import AsyncHighlight from './async-highlight.vue'

const props = defineProps({
  name: String,
  tokenList: Array
})

const TinyIconHelpCircle = iconHelpCircle()
const TinyIconViewFlowchart = iconViewFlowchart()
const capName = computed(() => capitalize(camelize(props.name)))
const theme = '`'
const content = ref(
  `
    <tiny-config-provider :theme="{css:${theme}.tiny-button{--tv-Button-bg-color-primary: red;}${theme}}">
      <tiny-button type="primary">主题色按钮</tiny-button>
    </tiny-config-provider>
  `
)
</script>

<style scoped lang="less">
.tiny-token-list {
  padding-bottom: 150px;
}
.tiny-token-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 26px;
}
h2 {
  display: inline-block;
}

.tiny-design {
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
  margin-left: 8px;
  line-height: 22px;
  span {
    color: #808808;
  }
}
.tiny-content-text {
  width: 270px;
  border: 1px solid #191919;
}
.tiny-token-demo {
  border: 1px solid #efeff4;
  margin-bottom: 12px;
}
</style>
