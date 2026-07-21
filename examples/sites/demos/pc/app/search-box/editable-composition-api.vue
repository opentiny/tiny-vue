<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" editable />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TinySearchBox from '@opentiny/vue-search-box'

const tags = ref([
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
])
const items = ref([
  {
    groupKey: '前端搜索',
    label: '名称(有操作符)',
    field: 'testName',
    options: [
      {
        label: 'ecs-1'
      },
      {
        label: 'obs-2'
      },
      {
        label: 'vpc-1'
      },
      {
        label: 'evs-2'
      },
      {
        label: 'tms-1'
      }
    ],
    operators: ['=', '!=', ':', '!:']
  },
  {
    // 该种单选情况没有可选项。
    groupKey: '前端搜索',
    label: '名称1(有操作符顺序不同)',
    field: 'testName1',
    operators: [':', '!:', '=', '!='],
    options: []
  },
  {
    groupKey: '前端搜索',
    label: '名称2(有操作符但不相同)',
    field: 'testName2',
    operators: [':', '!:']
  },
  {
    groupKey: '前端搜索',
    label: '可用地区(有操作符类型不同)',
    field: 'testRegion',
    type: 'checkbox',
    options: [
      {
        label: '华南区',
        id: '2-1'
      },
      {
        label: '华北区',
        id: '2-2'
      },
      {
        label: '西北区',
        id: '2-3'
      }
    ],
    operators: ['=', '!=', ':', '!:']
  },
  {
    groupKey: '后端搜索',
    label: '可用地区1',
    field: 'testRegion1',
    type: 'checkbox',
    options: [
      {
        label: '华南区1',
        id: '2-11'
      },
      {
        label: '华北区1',
        id: '2-21'
      },
      {
        label: '西北区1',
        id: '2-31'
      }
    ],
    operators: ['*', '#', '@', '~']
  },
  {
    groupKey: '后端搜索',
    label: '状态',
    type: 'checkbox',
    field: 'status',
    options: [
      {
        label: '运行中'
      },
      {
        label: '已关机'
      },
      {
        label: '已注销'
      }
    ]
  },
  {
    groupKey: '后端搜索',
    label: '规格/镜像/磁盘',
    field: 'testMirror',
    options: [
      {
        label: '1vCPUs'
      },
      {
        label: '2vCPUs'
      },
      {
        label: '3vCPUs'
      },
      {
        label: '2vGPUs'
      }
    ]
  },
  {
    groupKey: '前端搜索',
    label: '私有IP地址(有操作符)',
    field: 'testIp',
    // 单选可以设置此参数，设置false
    replace: false,
    options: [
      {
        label: '110.110.110.1'
      },
      {
        label: '110.110.110.2'
      },
      {
        label: '110.110.110.3'
      },
      {
        label: '110.110.110.4'
      }
    ],
    operators: ['=', '!=', ':', '!:']
  },
  {
    groupKey: '后端搜索',
    label: '标签',
    field: 'testTag',
    type: 'map',
    options: [
      {
        label: 'aaa',
        allValues: false,
        options: [
          {
            label: 'ddd'
          },
          {
            label: 'eee'
          },
          {
            label: 'fff'
          }
        ]
      },
      {
        label: 'bbb',
        options: [
          {
            label: 'hhh'
          },
          {
            label: 'iii'
          },
          {
            label: 'jjj'
          }
        ]
      },
      {
        label: 'ccc',
        options: [
          {
            label: 'kkk'
          },
          {
            label: 'lll'
          },
          {
            label: 'mmm'
          }
        ]
      }
    ]
  },
  {
    groupKey: '前端搜索',
    label: '大小',
    field: 'size',
    type: 'numRange',
    unit: 'GB',
    replace: false,
    start: 4,
    end: 11,
    min: 3,
    max: 20
  },
  {
    groupKey: '前端搜索',
    label: '大小1',
    replace: false,
    field: 'size1',
    type: 'numRange',
    unit: 'GB'
  },
  {
    groupKey: '前端搜索',
    label: '数字',
    replace: false,
    field: 'size2',
    type: 'numRange'
  },
  {
    groupKey: '后端搜索',
    label: '日期',
    field: 'date',
    type: 'dateRange',
    replace: false,
    // 默认开始时间
    start: new Date(2020, 5, 10),
    // 默认结束时间
    end: new Date(2020, 5, 25),
    // 最小时间
    min: new Date(2020, 5, 5),
    max: undefined,
    operators: ['*', '#', '@']
  },
  {
    groupKey: '后端搜索',
    label: '时间日期',
    field: 'datetime',
    type: 'datetimeRange',
    replace: false,
    // 默认开始时间
    start: new Date(2020, 5, 10, 10, 23, 45),
    // 默认结束时间
    end: new Date(2020, 5, 25, 18, 25, 45),
    // 最小时间
    min: new Date(2020, 5, 5, 10, 5, 5),
    max: undefined
  }
])
</script>
