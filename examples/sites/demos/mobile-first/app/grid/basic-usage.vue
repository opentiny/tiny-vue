<template>
  <div>
    <div class="mb-3">
      <tiny-radio v-model="viewType" label="mf">表格视图</tiny-radio>
      <tiny-radio v-model="viewType" label="card">卡片视图</tiny-radio>
      <tiny-radio v-model="viewType" label="list">列表视图</tiny-radio>
      <tiny-radio v-model="viewType" label="gantt">甘特视图</tiny-radio>
      <tiny-radio v-model="viewType" label="custom">custom视图</tiny-radio>
    </div>
    <tiny-grid
      highlight-current-row
      :fetch-data="fetchData"
      seq-serial
      :pager="pagerConfig"
      auto-resize
      :select-config="selectConfig"
      :view-type="viewType"
      :mf-show="mfShow"
      :card-config="cardConfig"
      @card-click="onCardClick"
      height="480"
      show-overflow
    >
      <template #link>
        <icon-chevron-right class="mf-table-more cursor-pointer fill-color-brand"></icon-chevron-right>
      </template>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column
        type="operation"
        title="操作"
        :operation-config="operationConfig"
        width="120"
      ></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      <template #list="{ rows }">
        <div>
          <tiny-column-list-item
            v-for="(row, index) in rows"
            :data="row"
            :key="index"
            :image="row.logo"
            :flex-grow="[0, 0]"
            :flex-basis="['50%', '50%']"
            operate-flex-basis="80px"
            :options="listOptions"
            class="mb-3"
          >
            <template #column1>
              <ul class="[&_li]:mb-1.5">
                <li class="text-sm line-clamp-1">名称：{{ row.name }}</li>
                <li class="text-color-text-secondary line-clamp-1">所属区域：{{ row.area }}</li>
                <li class="text-color-text-secondary">地址：{{ row.address }}</li>
              </ul>
            </template>
            <template #column2>
              <ul class="[&_li]:mb-1.5">
                <li>
                  <tiny-tag v-if="row.tag1" size="mini">{{ row.tag1 }}</tiny-tag>
                  <tiny-tag v-if="row.tag2" size="mini">{{ row.tag2 }}</tiny-tag>
                  <tiny-tag v-if="row.tag3" size="mini">{{ row.tag3 }}</tiny-tag>
                </li>
                <li class="text-color-text-secondary line-clamp-1">公司简介：{{ row.introduction }}</li>
              </ul>
            </template>
          </tiny-column-list-item>
        </div>
      </template>
      <template #gantt="{ rows }">
        <div class="gantt-container">gantt视图，表格行数{{ rows.length }}</div>
      </template>
      <template #custom="{ rows }">
        <div class="custom-container">custom视图，表格行数{{ rows.length }}</div>
      </template>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Modal, Tag, Radio, ColumnListItem, Pager } from '@opentiny/vue'
import {
  IconChevronRight,
  IconAreaChart,
  IconBarChart,
  IconDotChart,
  IconLineChart,
  IconPieChart
} from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag: Tag,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyRadio: Radio,
    TinyColumnListItem: ColumnListItem,
    IconChevronRight: IconChevronRight()
  },
  methods: {
    clickHandler(e, { row, buttonConfig }) {
      Modal.message(`点击按钮 - ${row.name} - ${buttonConfig.name}`)
    },
    onCardClick(row, e) {
      Modal.message('onCardClick')
    },
    getData({ page }) {
      let curPage = page.currentPage
      let pageSize = page.pageSize
      let offset = (curPage - 1) * pageSize

      return new Promise((resolve) => {
        resolve({
          result: this.tableData.slice(offset, offset + pageSize),
          page: { total: this.tableData.length }
        })
      })
    }
  },
  computed: {
    listOptions() {
      return this.operationConfig.buttons.map((item) => {
        return {
          text: item.name,
          icon: item.icon,
          disabled: item.disabled,
          hidden: item.hidden
        }
      })
    }
  },
  data() {
    return {
      viewType: 'list',
      mfShow: 'card', // 可选值为list, card
      selectConfig: {
        checkMethod({ rowIndex }) {
          return rowIndex !== 5
        }
      },
      pagerConfig: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 5,
          pageSizes: [5, 10],
          total: 0,
          layout: 'total, prev, pager, next, jumper, sizes'
        }
      },
      fetchData: {
        api: this.getData
      },
      cardConfig: {
        cardSize: 'small',
        primaryField: 'name',
        contentFields: ['area', 'address', 'introduction'],
        logoField: [
          'logo',
          { render: ({ h, row, field, value, config }) => h('img', { class: 'w-full h-full', attrs: { src: value } }) }
        ],
        tagFields: [
          'tag1',
          'tag2',
          [
            'tag3',
            {
              render: ({ h, row, field, value, config, color }) =>
                h(
                  Tag,
                  {
                    props: { size: 'mini', type: color, customClass: 'inline-block truncate max-w-[6.25rem] h-[18px]' }
                  },
                  value
                )
            }
          ]
        ],
        tagColorFields: ['tagColor1', 'tagColor2', 'tagColor3']
      },
      operationConfig: {
        buttons: [
          {
            name: '操作',
            icon: IconAreaChart(),
            click: this.clickHandler,
            disabled: true
          },
          { name: '操作2', icon: IconBarChart(), click: this.clickHandler, disabled: (row) => row.id === '1' },
          { name: '操作3', icon: IconDotChart(), click: this.clickHandler, hidden: true },
          { name: '操作4', icon: IconLineChart(), click: this.clickHandler, hidden: (row) => row.id === '2' },
          { name: '操作5', icon: IconPieChart(), click: this.clickHandler }
        ]
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司',
          area: '华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '交通',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        },
        {
          id: '2',
          name: 'WWWW科技有限公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '交通',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '交通',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        },
        {
          id: '4',
          name: 'TGB有限公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '交通',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '交通',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        },
        {
          id: '6',
          name: '康康物业有限公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          logo: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/9.jpg`,
          tag1: 'NA',
          tag2: '如果内容超过100px',
          tag3: '总集',
          tagColor1: '',
          tagColor2: '',
          tagColor3: ''
        }
      ]
    }
  }
}
</script>
