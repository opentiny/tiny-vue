<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div ref="item" class="tiny-card-template">
    <div v-if="slots.header || header || (tools && tools.length)" :class="{ 'is-line': headerLine }" class="tiny-card-template__header">
      <slot name="header">
        <span class="tiny-card-template__title">{{ header }}</span>
      </slot>
      <div v-if="tools && tools.length" class="tiny-card-template__tools">
        <ul class="tiny-card-template__list">
          <li v-for="(item, index) in state.currentTools" :key="index" :title="item.title" @click.stop="item.click">
            <component class="tiny-svg-size" :is="item.icon" />
          </li>
        </ul>
        <div
          v-show="state.moreTools && state.moreTools.length && state.showMoreTools"
          ref="selector"
          class="tiny-selector tiny-card-template__more"
          @mouseleave="state.showMoreTools = false"
        >
          <ul class="tiny-poplist">
            <li
              v-for="(item, index) in state.moreTools"
              :key="index"
              :title="item.title"
              :class="{ 'select-pre': state.isEnter }"
              @click="toolClick(item.click)"
            >
              <component class="tiny-svg-size" :is="item.icon" />
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :style="bodyStyle" class="tiny-card-template__body">
      <slot />
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/card-template/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconEdit, iconClose, iconExcel, iconHelp, iconMore } from '@opentiny/vue-icon'

export default {
  props: [...props, 'tools', 'header', 'bodyStyle', 'headerLine'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  components: {
    IconEdit: iconEdit(),
    IconHelp: iconHelp(),
    IconMore: iconMore(),
    IconClose: iconClose(),
    IconExcel: iconExcel()
  }
}
</script>
