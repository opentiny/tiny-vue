<template>
  <tiny-grid
    :data="tableData"
    resizable
    :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    height="300"
  >
    <tiny-grid-column title="操作" header-align="center">
      <tiny-grid-column title="分组1" header-align="center" fixed="left">
        <tiny-grid-column type="index" width="40"></tiny-grid-column>
        <tiny-grid-column type="selection" width="40"></tiny-grid-column>
      </tiny-grid-column>
      <tiny-grid-column title="分组2" header-align="center">
        <tiny-grid-column :renderer="rendererCellOperate" width="100"></tiny-grid-column>
      </tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="描述" header-align="center">
      <tiny-grid-column field="name" title="名称" show-tip sortable width="600"></tiny-grid-column>
      <tiny-grid-column
        field="area"
        title="分区"
        :editor="{ component: 'select', options }"
        sortable
        width="600"
      ></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column :title="renderHeaderRelation" header-align="center">
      <tiny-grid-column
        field="address"
        title="地区"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        width="600"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        show-overflow="title"
        width="600"
      ></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="右冻结分组" header-align="center" fixed="right">
      <tiny-grid-column
        field="address"
        title="地区"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        width="150"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        sortable
        show-overflow="title"
        width="150"
      ></tiny-grid-column>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'
import {
  IconAdministrator,
  IconVersiontree,
  IconMarkOn,
  IconUser,
  IconAssociation,
  IconHelpful
} from '@opentiny/vue-icon'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      IconVersiontree: IconVersiontree(),
      IconAdministrator: IconAdministrator(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser(),
      IconAssociation: IconAssociation(),
      IconHelpful: IconHelpful(),
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '8',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '9',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '10',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '11',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ],
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ]
    }
  },
  methods: {
    renderHeaderRelation(h) {
      const IconVersiontree = this.IconVersiontree

      return (
        <span>
          <IconVersiontree />
        </span>
      )
    },

    rendererCellOperate(h) {
      const IconAssociation = this.IconAssociation
      const IconHelpful = this.IconHelpful

      return (
        <div style="text-align: center; font-size: 16px;">
          <IconHelpful />
          &nbsp;&nbsp;
          <IconAssociation />
        </div>
      )
    }
  }
}
</script>
