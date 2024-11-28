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
  <table class="tiny-year-table" @mousemove="handleMouseMove" @click="handleYearTableClick">
    <tbody>
      <tr v-for="(row, trKey) in state.rows" :key="trKey">
        <td
          v-for="(cell, tdKey) in row"
          class="available"
          :key="tdKey"
          :class="[
            {
              'disabled': getIsDisabled(cell.text),
              'current': getIsCurrent(cell.text),
              'default': getIsDefault(cell.text),
              'today': state.currentYear === cell.text,
              'in-range': cell.inRange,
              'start-date': cell.start,
              'end-date': cell.end
            }
          ]"
        >
          <div>
            <a class="cell" :aria-disabled="getIsDisabled(cell.text) ? true : undefined">{{ cell.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/year-table/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/year-table/index.less'

export default defineComponent({
  emits: ['pick', 'changerange'],
  props: [
    ...props,
    'disabledDate',
    'value',
    'defaultValue',
    'date',
    'selectionMode',
    'startYear',
    'maxDate',
    'minDate',
    'rangeState'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
