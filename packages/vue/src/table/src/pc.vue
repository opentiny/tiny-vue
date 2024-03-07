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
  <div class="tiny-table simple">
    <table :width="width">
      <colgroup>
        <col v-for="(col, rowIndex) in columns" :key="rowIndex" :width="col.width" />
      </colgroup>
      <thead class="tiny-table-header">
        <tr>
          <th v-for="(col, colIndex) in columns" :key="colIndex" :class="{ overflow: col.showOverflow }">
            <div class="tiny-table-cell">
              <component
                v-if="col.type === 'selection'"
                :is="`icon-${state.selectCls}`"
                :class="['tiny-svg-size', { 'is-check': state.selectCls !== 'check' }]"
                @click="togeSelectAll"
              />
              <template v-if="!col.type">
                <div v-if="colIndex !== columns.length - 1" class="tiny-table-header__line"></div>
                {{ col.title }}
              </template>
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
          <td v-for="(col, colIndex) in columns" :key="colIndex">
            <div
              :class="['tiny-table-cell', { overflow: col.showOverflow }]"
              :title="col.showOverflow ? row[col.field] : ''"
              :style="{ width: col.width ? col.width + 'px' : '' }"
            >
              <div v-if="col.type === 'index'">{{ rowIndex + 1 }}</div>
              <component
                v-else-if="col.type === 'radio'"
                :is="state.selectedRow === row ? 'icon-radioselected' : 'icon-radio'"
                class="tiny-svg-size"
                @click="selectRow(row)"
              />
              <component
                v-else-if="col.type === 'selection'"
                :is="state.selected.indexOf(row) === -1 ? 'icon-check' : 'icon-checked-sur'"
                :class="[
                  'tiny-svg-size',
                  { 'is-check': state.selected.indexOf(row) > -1 },
                  { 'is-disabled': state.selectedKeys.indexOf(keys) > -1 }
                ]"
                @click="togeSelected(row)"
              />
              <template v-else>{{ row[col.field] }}</template>
            </div>
          </td>
        </tr>
        <tr v-if="data && data.length === 0" class="noData">
          <td :colspan="columns.length">
            {{ t('ui.transfer.noData') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/table/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { iconRadioselected, iconRadio, iconCheck, iconCheckedSur, iconHalfselect } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/table/index.less'

export default defineComponent({
  components: {
    IconRadioselected: iconRadioselected(),
    IconRadio: iconRadio(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconHalfselect: iconHalfselect()
  },
  props: [...props, 'columns', 'data', 'width', 'defaultChecked', 'keys'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
