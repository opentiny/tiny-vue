<template>
  <div>
    <tiny-grid
      ref="treeGridRef"
      :data="tableData"
      :tree-config="{ children: 'children' }"
      @toggle-tree-change="handTreeExpand"
    >
      <tiny-grid-column type="index" width="80" tree-node></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    pid: '0',
    name: 'GFD 科技 YX 公司',
    area: '华东区',
    employees: '800',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '15',
        pid: '1',
        name: 'GFD 科技股份有限子公司',
        area: '华东区',
        employees: '700',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
      }
    ]
  },
  {
    id: '2',
    pid: '0',
    name: 'WWWW 科技 YX 公司',
    area: '华南区',
    employees: '500',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '22',
        pid: '2',
        name: 'WWWW 科技股份有限子公司',
        area: '华南区',
        employees: '720',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
      }
    ]
  },
  {
    id: '4',
    pid: '0',
    name: 'TGBYX 公司',
    area: '华南区',
    employees: '360',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '3',
        pid: '4',
        name: 'RFV 有限责任公司',
        area: '华南区',
        employees: '300',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
      },
      {
        id: '5',
        pid: '4',
        name: 'YHN 科技 YX 公司',
        area: '华南区',
        employees: '810',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
        children: [
          {
            id: '6',
            pid: '5',
            name: 'WSX 科技 YX 公司',
            area: '华南区',
            employees: '800',
            introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
          },
          {
            id: '9',
            pid: '5',
            name: 'UJM 有限责任公司',
            area: '华南区',
            employees: '750',
            introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
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
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '8',
        pid: '7',
        name: '深圳市福德宝网络技术 YX 公司',
        area: '华南区',
        employees: '540',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
      },
      {
        id: '10',
        pid: '7',
        name: 'IK 有限责任公司',
        area: '华南区',
        employees: '400',
        introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
        children: [
          {
            id: '23',
            pid: '10',
            name: 'IK 有限责任股份 YX 公司',
            area: '华南区',
            employees: '455',
            introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
          }
        ]
      }
    ]
  }
])
const treeGridRef = ref()

function handTreeExpand() {
  let treeExpandeds = treeGridRef.value.getTreeExpandeds()

  TinyModal.message({
    message: `展开行数：${treeExpandeds.length}`,
    status: 'info'
  })
}
</script>
