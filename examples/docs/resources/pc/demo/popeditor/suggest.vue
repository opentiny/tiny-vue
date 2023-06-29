<template>
  value值：{{ value }}
  <tiny-popeditor
    v-model="value"
    :show-clear-btn="true"
    :grid-op="gridOp"
    text-field="name"
    value-field="name"
    :remote-search="remoteSearch"
    suggest
    :conditions="conditions"
  ></tiny-popeditor>
</template>

<script lang="jsx">
import { Popeditor } from '@opentiny/vue'
const dataset = [
  {
    id: '1',
    name: 'GFD科技YX公司',
    city: '福州',
    province: '福建'
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    city: '深圳',
    province: '广东'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    city: '中山',
    province: '广东'
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    city: '龙岩',
    province: '福建'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    city: '韶关',
    province: '广东'
  },
  {
    id: '6',
    name: 'WSX科技YX公司',
    city: '黄冈',
    province: '武汉'
  },
  {
    id: '7',
    name: 'KBG物业YX公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术YX公司',
    province: '广东',
    city: '深圳'
  },
  {
    id: '9',
    name: 'KBG物业YX公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '10',
    name: '深圳市福德宝网络技术YX公司',
    province: '广东',
    city: '深圳'
  }
]

export default {
  components: {
    TinyPopeditor: Popeditor
  },
  data() {
    return {
      value: '',
      conditions: [
        { label: '公司名', field: 'name' },
        { label: '城市', field: 'city' }
      ],
      gridOp: {
        columns: [
          {
            field: 'id',
            title: 'ID',
            width: 40
          },
          {
            field: 'name',
            title: '名称'
          },
          {
            field: 'province',
            title: '省份',
            width: 80
          },
          {
            field: 'city',
            title: '城市',
            width: 80
          }
        ],
        data: []
      }
    }
  },
  methods: {
    remoteSearch({ page, conditions, query }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!conditions) {
            // 联想查询
            resolve({
              data: dataset.filter((i) => i.name.indexOf(query) > -1).slice(0, 20)
            })
          } else {
            // 表单查询
            const data = dataset.filter(
              (i) => i.name.indexOf(conditions.name) > -1 && i.city.indexOf(conditions.city) > -1
            )
            resolve({
              data: data.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize),
              total: data.length
            })
          }
        }, 500)
      })
    }
  }
}
</script>
