<template>
  <div>
    <div class="title">普通</div>
    <tiny-table :columns="columns" :data="tableData"></tiny-table>
    <div class="title">固定列</div>
    <tiny-table :columns="columns2" :data="tableData" width="300px"></tiny-table>
    <div class="title">其它样式</div>
    <tiny-table :columns="columns3" :data="tableData" width="300px"></tiny-table>
    <div class="title">无数据</div>
    <tiny-table :columns="[]" :data="[]" width="200px"></tiny-table>
  </div>
</template>

<script lang="jsx">
import { Table } from '@opentiny/vue'

export default {
  components: {
    TinyTable: Table
  },
  data() {
    return {
      columns: [
        {
          width: 100,
          title: '业务',
          field: 'business'
        },
        {
          width: 90,
          title: '空间（万/年）',
          field: 'space'
        },
        {
          width: 60,
          title: 'IDC',
          field: 'idc'
        },
        {
          width: 60,
          title: '阿里云',
          field: 'aliy'
        },
        {
          width: 60,
          title: '腾讯云',
          field: 'txy'
        }
      ],
      columns2: [
        {
          width: 100,
          title: '业务',
          field: 'business',
          fixed: true
        },
        {
          width: 110,
          title: '空间（万/年）',
          field: 'space',
          fixed: true
        },
        {
          width: 60,
          title: 'IDC',
          field: 'idc'
        },
        {
          width: 60,
          title: '阿里云',
          field: 'aliy'
        },
        {
          width: 60,
          title: '腾讯云',
          field: 'txy'
        }
      ],
      columns3: [
        {
          width: 30,
          title: '业务',
          field: 'business',
          type: 'index'
        },
        {
          width: 50,
          title: '空间（万/年）',
          field: 'space',
          type: 'selection'
        },
        {
          width: 50,
          title: 'IDC',
          field: 'idc',
          type: 'radio'
        },
        {
          width: 60,
          title: '阿里云',
          field: 'aliy'
        },
        {
          width: 60,
          title: '腾讯云',
          field: 'txy'
        }
      ],
      tableData: [
        {
          id: '1',
          business: '直播/点播源站',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        },
        {
          id: '1',
          business: '大数据',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        },
        {
          id: '1',
          business: 'web业务',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        },
        {
          id: '1',
          business: '应用加速',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        },
        {
          id: '1',
          business: '边缘计算',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        },
        {
          id: '1',
          business: 'Live/点播源站',
          space: 80,
          idc: 80,
          aliy: '99',
          txy: '11'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  margin: 20px 0 10px 0;
}
</style>
