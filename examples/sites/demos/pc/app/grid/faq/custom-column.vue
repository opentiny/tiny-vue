<template>
  <tiny-grid :custom-column-names="['MyGridColumn']" show-overflow="tooltip" :data="tableData">
    <grid-column-wrapper title="父列1">
      <grid-column-wrapper title="子列1" field="name"></grid-column-wrapper>
      <grid-column-wrapper title="子列2">
        <grid-column-wrapper title="孙列1" field="date"></grid-column-wrapper>
        <grid-column-wrapper title="孙列2" field="city"></grid-column-wrapper>
      </grid-column-wrapper>
    </grid-column-wrapper>
    <grid-column-wrapper title="父列2">
      <grid-column-wrapper title="子列3" field="employees"></grid-column-wrapper>
      <grid-column-wrapper title="子列4" field="introduction">
        <template #header><span>HEADER</span></template>
        <template #default="{ row }">
          <span style="color: red">{{ row.introduction }}</span>
        </template>
      </grid-column-wrapper>
    </grid-column-wrapper>
  </tiny-grid>
</template>

<script>
import { h } from '@opentiny/vue-common'
import { Grid, GridColumn } from '@opentiny/vue'

const GridColumnWrapper = {
  name: 'MyGridColumn',
  props: ['title', 'field'],
  setup(props, { slots }) {
    return () => {
      const config = { props, scopedSlots: { ...slots } }

      return h(GridColumn, config)
    }
  }
}

export default {
  components: {
    TinyGrid: Grid,
    GridColumnWrapper
  },
  data() {
    return {
      tableData: [
        {
          name: 'GFD科技有限公司',
          date: '2024-05-23',
          city: '深圳福田区',
          employees: '500',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  }
}
</script>
