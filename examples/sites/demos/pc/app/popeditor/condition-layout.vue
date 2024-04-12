<template>
  <tiny-popeditor
    multi
    :remote-search="remoteSearch"
    v-model="value"
    show-pager
    :grid-op="gridOp"
    text-field="name"
    value-field="id"
    :conditions="conditions"
  ></tiny-popeditor>
</template>

<script>
import { Popeditor, Select, Numeric } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

export default {
  components: {
    TinyPopeditor: Popeditor
  },
  data() {
    return {
      value: 5,
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
            field: 'city',
            title: '城市',
            width: 80
          },
          {
            field: 'employees',
            title: '员工',
            width: 80
          }
        ],
        data: [],
        pagerOp: {
          pageSizes: [5, 10, 15]
        }
      },
      conditions: [
        {
          label: '公司名',
          field: 'name',
          span: 12,
          labelWidth: '160px',
          attrs: { clearable: true }
        },
        {
          label: '城市',
          field: 'city',
          component: hooks.markRaw(Select),
          attrs: {
            options: [
              { label: '福州', value: 'fz' },
              { label: '深圳', value: 'sz' }
            ]
          },
          span: 6
        },
        { label: '员工', field: 'employees', component: hooks.markRaw(Numeric) }
      ]
    }
  },
  methods: {
    remoteSearch({ page }) {
      // 此处为用户自定义的远程搜索逻辑
      const randomAlphabets = () => {
        return Array.from({ length: 5 })
          .map(() => String.fromCharCode(65 + Math.floor(26 * Math.random())))
          .join('')
      }
      const { currentPage, pageSize } = page
      const data = Array.from({ length: page.pageSize }).map((item, i) => {
        return {
          id: pageSize * (currentPage - 1) + i + 1,
          name: randomAlphabets() + 'YX公司',
          city: ['福州', '深圳', '中山', '龙岩', '韶关', '黄冈', '赤壁', '厦门'][Math.floor(Math.random() * 8)],
          employees: Math.ceil(Math.random() * 10000)
        }
      })

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data, total: 200 })
        }, 500)
      })
    }
  }
}
</script>
