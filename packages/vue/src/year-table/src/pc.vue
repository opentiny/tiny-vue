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
      <tr v-for="(row, key) in state.rows" :key="key">
        <td v-for="(cell, key) in row" class="available" :class="getCellStyle(cell)" :key="key">
          <div>
            <a class="cell">{{ cell.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/year-table/vue'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'
import { $prefix, setup } from '@opentiny/vue-common'

import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'YearTable',
  emits: ['pick'],
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator(val) {
        // null or valid Date Object
        return val === null || (val instanceof Date && isDate(val))
      }
    },
    date: [Date, Array],
    selectionMode: String,
    startYear: Number,
    maxDate: {},
    minDate: {},
    rangeState: {
      default: () => ({ endDate: null, selecting: false })
    }
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>

