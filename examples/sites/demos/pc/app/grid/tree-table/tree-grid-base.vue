<template>
  <div>
    <tiny-grid :data="tableData" :tree-config="{ children: 'children', renderIcon }">
      <tiny-grid-column field="id" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'
import { iconRightO, iconDeltaDownO } from '@opentiny/vue-icon'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  methods: {
    renderIcon(h, { active }) {
      const IconRightO = iconRightO()
      const IconDeltaDownO = iconDeltaDownO()
      return active ? <IconDeltaDownO /> : <IconRightO />
    }
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          pid: '0',
          name: 'GFD 科技 YX 公司',
          area: '华东区',
          employees: '800',
          children: [
            {
              id: '15',
              pid: '1',
              name: 'GFD 科技股份有限子公司',
              area: '华东区',
              employees: '700'
            }
          ]
        },
        {
          id: '2',
          pid: '0',
          name: 'WWWW 科技 YX 公司',
          area: '华南区',
          employees: '500',
          children: [
            {
              id: '22',
              pid: '2',
              name: 'WWWW 科技股份有限子公司',
              area: '华南区',
              employees: '720'
            }
          ]
        },
        {
          id: '4',
          pid: '0',
          name: 'TGBYX 公司',
          area: '华南区',
          employees: '360',
          children: [
            {
              id: '3',
              pid: '4',
              name: 'RFV 有限责任公司',
              area: '华南区',
              employees: '300'
            },
            {
              id: '5',
              pid: '4',
              name: 'YHN 科技 YX 公司',
              area: '华南区',
              employees: '810',
              children: [
                {
                  id: '6',
                  pid: '5',
                  name: 'WSX 科技 YX 公司',
                  area: '华南区',
                  employees: '800'
                },
                {
                  id: '9',
                  pid: '5',
                  name: 'UJM 有限责任公司',
                  area: '华南区',
                  employees: '750'
                }
              ]
            }
          ]
        },
        {
          id: '7',
          pid: '0',
          name: '康康物业 YX 公司',
          area: '华南区',
          employees: '400',
          children: [
            {
              id: '8',
              pid: '7',
              name: '深圳市福德宝网络技术 YX 公司',
              area: '华南区',
              employees: '540'
            },
            {
              id: '10',
              pid: '7',
              name: 'IK 有限责任公司',
              area: '华南区',
              employees: '400',
              children: [
                {
                  id: '23',
                  pid: '10',
                  name: 'IK 有限责任股份 YX 公司',
                  area: '华南区',
                  employees: '455'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
