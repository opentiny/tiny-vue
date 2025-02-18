<template>
  <div>
    <tiny-query-builder
      :query="modelValue"
      :config="queryBuildConfig"
      :onQueryChange="formChange"
      ref="queryBuildRef"
    />
    <div class="view">
      <div class="preview">
        <pre>{{ JSON.stringify(modelValue, null, 2) }}</pre>
      </div>
      <div class="preview">
        <pre>{{ JSON.stringify(queryBuildConfig, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  TinyQueryBuilder,
  TinyAmount,
  TinyIpAddress,
  TinyRate,
  TinyDatePicker,
  TinySlider,
  TinyNumeric,
  TinyTimeSelect
} from '@opentiny/vue'

function toJson() {
  return this.name
}
TinyAmount.toJSON = toJson
TinyIpAddress.toJSON = toJson
TinyRate.toJSON = toJson
TinyDatePicker.toJSON = toJson
TinySlider.toJSON = toJson
TinyNumeric.toJSON = toJson
TinyTimeSelect.toJSON = toJson

const operators = [
  { name: '=', label: '等于' },
  { name: '!=', label: '不等于' },
  { name: '<', label: '小于' },
  { name: '>', label: '大于' },
  { name: '<=', label: '小于等于' },
  { name: '>=', label: '大于等于' },
  { name: 'contains', label: '包含' },
  { name: 'beginsWith', label: '开头为' },
  { name: 'endsWith', label: '结束为' },
  { name: 'doesNotContain', label: '不包含' },
  { name: 'null', label: '为空' },
  { name: 'notNull', label: '不为空' },
  { name: 'between', label: '介于' },
  { name: 'notBetween', label: 'not between' },
  { name: 'doesNotBeginWith', label: 'does not begin with' },
  { name: 'doesNotEndWith', label: 'does not end with' },
  { name: 'in', label: 'in' },
  { name: 'notIn', label: 'not in' }
]

export default {
  components: {
    TinyQueryBuilder
  },
  data: () => {
    return {
      modelValue: {
        'combinator': 'and',
        'not': false,
        'rules': [
          {
            'id': 'b0b0d636-3063-400a-99b0-f0ac87cc722f',
            'field': 'amount',
            'operator': '=',
            'valueSource': 'value',
            'value': {
              'amount': 23,
              'currency': 'CNY'
            }
          },
          {
            'id': 'a2f35cc3-49e1-413f-bf14-c7c5626d62d3',
            'rules': [
              {
                'id': '646ad890-caa0-46e2-a81b-d1045bd30ac7',
                'field': 'silder',
                'operator': '=',
                'valueSource': 'value',
                'value': 33
              },
              {
                'id': '3a34d067-3bd8-4b9c-909e-3bee219ee7d4',
                'field': 'number',
                'operator': '>',
                'valueSource': 'value',
                'value': 5656
              }
            ],
            'combinator': 'and',
            'not': false
          }
        ]
      },
      queryBuildConfig: {
        operators,
        showLockButtons: false,
        addRuleToNewGroups: true,
        showCloneButtons: true,
        showNotToggle: true,
        validateQuery: true,
        combinators: [
          {
            name: 'and',
            label: '且'
          },
          {
            name: 'or',
            label: '或'
          }
        ],
        fields: [
          {
            name: 'amount',
            label: '金额',
            valueEditorType: 'custom',
            component: TinyAmount
          },
          {
            name: 'ip',
            label: 'IP',
            valueEditorType: 'custom',
            component: TinyIpAddress
          },
          {
            name: 'rate',
            label: '评分',
            valueEditorType: 'custom',
            component: TinyRate
          },
          {
            name: 'lastName2',
            label: 'Last Name2',
            placeholder: 'Enter last name'
          },
          {
            name: 'date',
            label: '日期',
            valueEditorType: 'custom',
            component: TinyDatePicker,
            props: {
              type: 'month'
            }
          },
          {
            name: 'silder',
            label: '滑块',
            valueEditorType: 'custom',
            component: TinySlider
          },
          {
            name: 'number',
            label: '数字',
            valueEditorType: 'custom',
            component: TinyNumeric
          },
          {
            name: 'time',
            label: '时间',
            valueEditorType: 'custom',
            component: TinyTimeSelect
          }
        ]
      }
    }
  },
  methods: {
    formChange(value: any) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.view {
  display: flex;
  width: 100%;
}
.preview {
  width: 50%;
  border: 1px solid black;
  margin: 5px;
}
</style>
