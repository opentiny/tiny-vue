<template>
  <tiny-transfer
    ref="transfer"
    v-model="value"
    :render="render"
    :data="data"
    filter-placeholder="请输入城市拼音"
    filterable
    :right-default-checked="['5']"
    :left-default-checked="['1']"
    :props="{ key: 'id', disabled: 'disabled' }"
    :columns="columns"
    :pager-op="pagerOp"
    :show-pager="true"
    :filter-method="filterMethod"
  >
    <template #default="optionData">
      <div>
        <span>{{ optionData.option.key }} - {{ optionData.option.label }}</span>
      </div>
    </template>
  </tiny-transfer>
</template>

<script lang="jsx">
import { Transfer, Table } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer
  },
  data() {
    const getGridData = () => {
      const data = []

      for (let i = 1; i <= 20; i++) {
        data.push({
          id: i.toString(),
          name: 'GFD科技YX公司' + i,
          area: '华东区' + i,
          address: '福州' + i,
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。' + i,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      render: {
        plugin: Table
      },
      value: ['5', '6', '14', '10', '9', '11', '12'],
      data: getGridData(),
      columns: [
        {
          type: 'index',
          width: '50px'
        },
        {
          type: 'selection',
          width: '50px'
        },
        {
          field: 'name',
          title: '名称',
          sortable: true,
          editor: { component: 'input', autoselect: true },
          showOverflow: true
        },
        {
          field: 'area',
          title: '所属区域',
          sortable: true
        },
        {
          field: 'address',
          title: '地址',
          sortable: true,
          editor: { component: 'input', autoselect: true },
          showOverflow: true
        },
        {
          field: 'introduction',
          title: '公司简介',
          sortable: true,
          showOverflow: true,
          editor: { component: 'input', autoselect: true }
        }
      ],
      pagerOp: {
        pageVO: {
          pageSizes: [10, 20, 30],
          pageSize: 10
        }
      },
      filterMethod(query, item) {
        return item.name.includes(query)
      }
    }
  }
}
</script>
