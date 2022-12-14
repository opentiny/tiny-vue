<template>
  <div class="tiny-table simple">
    <table :width="width">
      <colgroup>
        <col
          v-for="(col, rowIndex) in columns"
          :key="rowIndex"
          :width="col.width"
        />
      </colgroup>
      <thead class="tiny-table-header">
        <tr>
          <th
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :class="{ overflow: col.showOverflow }"
          >
            <div class="tiny-table-cell">
              <component
                v-if="col.type === 'selection'"
                :is="`icon-${state.selectCls}`"
                :class="[
                  'tiny-svg-size',
                  { 'is-check': state.selectCls !== 'check' }
                ]"
                @click="togeSelectAll"
              />
              <template v-if="!col.type">
                <div
                  v-if="colIndex !== columns.length - 1"
                  class="tiny-table-header__line"
                ></div>
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
          :class="[
            'handlerCls',
            state.selectedKeys.indexOf(row[keys]) > -1 ? '' : 'is-disabled'
          ]"
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
                :is="
                  state.selectedRow === row
                    ? 'icon-radioselected'
                    : 'icon-radio'
                "
                class="tiny-svg-size"
                @click="selectRow(row)"
              />
              <component
                v-else-if="col.type === 'selection'"
                :is="
                  state.selected.indexOf(row) === -1
                    ? 'icon-check'
                    : 'icon-checked-sur'
                "
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
        <p v-if="data && data.length === 0" class="noData">
          {{ t('ui.transfer.noData') }}
        </p>
      </tbody>
    </table>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/table/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import {
  iconRadioselected,
  iconRadio,
  iconCheck,
  iconCheckedSur,
  iconHalfselect
} from '@opentiny/vue-icon'

export default {
  name: $prefix + 'Table',
  components: {
    IconRadioselected: iconRadioselected(),
    IconRadio: iconRadio(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconHalfselect: iconHalfselect()
  },
  props: {
    columns: Array,
    data: Array,
    width: String,
    defaultChecked: Array,
    keys: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
