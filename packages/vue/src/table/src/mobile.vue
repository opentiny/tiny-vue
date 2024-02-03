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
  <div class="tiny-mobile-table simple" :style="{ width }">
    <table :width="width">
      <colgroup>
        <col v-for="(col, rowIndex) in columns" :key="rowIndex" :width="col.width" />
      </colgroup>
      <thead class="tiny-mobile-table-header">
        <tr>
          <th
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :class="{ overflow: col.showOverflow, fixed: col.fixed }"
            :style="{ left: getLeft(colIndex) }"
          >
            <div class="tiny-mobile-table-cell">
              <component
                v-if="col.type === 'selection'"
                :is="`icon-${state.selectCls}`"
                :class="['tiny-mobile-svg-size', { 'is-check': state.selectCls !== 'check' }]"
                @click="togeSelectAll"
              />
              <div v-if="!col.type">
                {{ col.title }}
              </div>
              <div v-if="isLastFixed(colIndex, col)" class="shadow"></div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          :class="['handlerCls', state.selectedKeys.indexOf(row[keys]) > -1 ? '' : 'is-disabled']"
        >
          <td
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :class="{ fixed: col.fixed }"
            :style="{ left: getLeft(colIndex) }"
          >
            <div
              :class="['tiny-mobile-table-cell', { overflow: col.showOverflow }]"
              :title="col.showOverflow ? row[col.field] : ''"
            >
              <div v-if="col.type === 'index'">
                {{ rowIndex + 1 }}
              </div>
              <component
                v-else-if="col.type === 'radio'"
                :is="state.selectedRow === row ? 'icon-radioselected' : 'icon-radio'"
                class="tiny-mobile-svg-size"
                @click="selectRow(row)"
              />
              <component
                v-else-if="col.type === 'selection'"
                :is="state.selected.indexOf(row) === -1 ? 'icon-check' : 'icon-checked-sur'"
                :class="[
                  'tiny-mobile-svg-size',
                  { 'is-check': state.selected.indexOf(row) > -1 },
                  { 'is-disabled': state.selectedKeys.indexOf(keys) > -1 }
                ]"
                @click="togeSelected(row)"
              />
              <div v-else>
                {{ row[col.field] }}
              </div>
              <div v-if="isLastFixed(colIndex, col)" class="shadow"></div>
            </div>
          </td>
        </tr>
        <p v-if="data && data.length === 0" class="noData">
          {{ t('ui.transfer.noData') }}
        </p>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/table/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { iconRadioselected, iconRadio, iconCheck, iconCheckedSur, iconHalfselect } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/table/index.less'

export default defineComponent({
  components: {
    IconRadioselected: iconRadioselected(),
    IconRadio: iconRadio(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconHalfselect: iconHalfselect()
  },
  props: [...props, 'columns', 'data', 'width', 'defaultChecked', 'keys'],
  methods: {
    getLeft(index) {
      let left = 0
      for (let i = 0; i < index; i++) {
        left += this.columns[i].width
      }
      return `${left}px`
    },
    isLastFixed(index, item) {
      if (!item.fixed) {
        return false
      }
      if (index === this.columns.length - 1) {
        return true
      }
      return !this.columns[index + 1].fixed
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
