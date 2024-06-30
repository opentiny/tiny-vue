<template>
  <div>
    <div class="button-container">
      <tiny-radio v-model="size" label="">size为空</tiny-radio>
      <tiny-radio v-model="size" label="medium">size为medium</tiny-radio>
      <tiny-radio v-model="size" label="small">size为small</tiny-radio>
      <tiny-radio v-model="size" label="mini">size为mini</tiny-radio>
    </div>
    <tiny-grid
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :valid-config="{ message: 'inline' }"
      :edit-rules="validRules"
      :size="size"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :editor="{ component: Input }"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input' }"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Input, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyRadio: Radio
  },
  data() {
    return {
      Input,
      size: '',
      validRules: {
        name: [
          {
            required: true,
            message:
              '名称必填。Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.'
          },
          { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
        ],
        area: {
          type: 'string',
          required: true,
          validator: (rule, value) => ['华东区', '华南区', '华中区'].includes(value),
          message:
            '区域格式不正确。Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.'
        },
        address: {
          type: 'string',
          validator: (rule, value) => {
            return new Promise((resolve, reject) => {
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
      },
      tableData: [
        {
          id: '1',
          name: '',
          area: '',
          address: '',
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
.button-container {
  margin-bottom: 16px;
}
</style>
