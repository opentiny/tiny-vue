<template>
  <div class="demo-body">
    <div class="demo-container">
      <div class="placeholder"></div>
      <tiny-grid
        :data="tableData"
        :tooltip-config="{ appendToBody: true, placement: 'right', popperOptions: { bubbling: true } }"
        :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
        :edit-rules="validRules"
        :valid-config="validConfig"
      >
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="名称" :editor="{ component: 'input' }"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input' }"></tiny-grid-column>
        <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

const validRules = {
  name: [
    { required: true, message: '名称必填' },
    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
  ],
  area: {
    type: 'string',
    required: true,
    validator: (rule, value) => ['华东区', '华南区', '华中区'].includes(value),
    message: '区域格式不正确'
  },
  address: {
    type: 'string',
    validator: (rule, value) =>
      new Promise((resolve, reject) => {
        if (!value) {
          reject(new Error('地址不能为空'))
        } else if (value.length > 10) {
          reject(new Error('地址过长'))
        } else {
          resolve()
        }
      })
  }
}

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  methods: {
    asteriskMethod({ column }) {
      // name 列不显示必填星号
      return column.property !== 'name'
    }
  },
  data() {
    return {
      validRules,
      validConfig: {
        asteriskMethod: this.asteriskMethod
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWW科技有限公司',
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
          name: 'TGB科技有限公司',
          area: '华东区',
          address: '龙岩',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-body {
  height: 400px;
  overflow: scroll;
  background: #e5edbc;
}
.demo-body > .demo-container {
  height: 3000px;
}
.placeholder {
  height: 300px;
}
</style>
