<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" editable />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";
import { data } from './editable-data'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      tags: [
        {
          field: 'testName',
          label: '名称(有操作符)',
          value: 'ecs-1',
          type: 'radio',
          operator: '='
        },
        {
          field: 'tiKeyword',
          label: '关键字',
          value: '1231212',
          type: 'radio'
        },
        {
          field: 'size',
          label: '大小',
          type: 'numRange',
          start: 4,
          end: 6,
          value: '4-6'
        },
        {
          field: 'testRegion1',
          label: '可用地区1',
          type: 'checkbox',
          value: '华南区1',
          operator: '->'
        },
        {
          field: 'date',
          label: '日期',
          start: '2020-06-09T16:00:00.000Z',
          end: '2020-06-25T15:59:59.999Z',
          type: 'dateRange',
          value: '2020/06/10-2020/06/25'
        },
        {
          field: 'datetime',
          label: '时间日期',
          start: '2020-06-10T02:23:45.000Z',
          end: '2020-06-25T02:25:46.999Z',
          type: 'datetimeRange',
          value: '2020/06/10 10:23:45-2020/06/25 10:25:46'
        },
        {
          field: 'size2',
          label: '数字',
          type: 'numRange',
          start: 1,
          end: 2,
          value: '1-2'
        }
      ],
      items: data
    }
  }
}
</script>
