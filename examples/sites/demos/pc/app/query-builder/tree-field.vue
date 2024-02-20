<template>
  <div>
    <tiny-query-builder
      ref="queryBuilder"
      :config="config"
      :query="query"
      :on-query-change="getFormateData"
    ></tiny-query-builder>

    <div v-for="(item, key) in formatData" :key="key" class="formatBox">
      <code>{{ item[0] }}</code>
      <br />
      <pre>{{ item[1] }}</pre>
    </div>
  </div>
</template>

<script>
import { QueryBuilder } from '@opentiny/vue'
import { random } from '@opentiny/vue-renderless/common/string'

export default {
  components: {
    TinyQueryBuilder: QueryBuilder
  },
  data() {
    return {
      formatData: '',
      config,
      optionOrder: {},
      query: this.getInitialQuery()
    }
  },
  methods: {
    getFormateData() {
      this.formatData = ['json_without_ids', 'json'].map((format) => {
        const formatQueryOptions = {
          format,
          fields: this.optionOrder.validateQuery ? this.config.fields : undefined,
          parseNumbers: this.optionOrder.parseNumbers
        }

        return [format, this.$refs.queryBuilder?.getFormatQuery(this.query, formatQueryOptions)]
      })
    },
    getInitialQuery() {
      const initialQuery = {
        id: generateID(),
        combinator: 'and',
        not: false,
        rules: [
          {
            id: generateID(),
            field: 'firstName',
            value: 'Stev',
            operator: 'beginsWith'
          },
          {
            id: generateID(),
            field: 'user.lastName',
            value: 'Vai, Vaughan',
            operator: 'in'
          },
          {
            id: generateID(),
            field: 'age',
            operator: '>',
            value: '28'
          }
        ]
      }

      return initialQuery
    }
  }
}

const generateID = () =>
  '00-0-4-2-000'.replace(/[^-]/g, (s) => (((random() + ~~s) * 0x10000) >> s).toString(16).padStart(4, '0'))

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
  // { name: 'notBetween', label: 'not between' },
  // { name: 'doesNotBeginWith', label: 'does not begin with' },
  // { name: 'doesNotEndWith', label: 'does not end with' },
  { name: 'in', label: 'in' },
  { name: 'notIn', label: 'not in' }
]

const config = {
  operators,
  showLockButtons: false,
  combinators: [
    {
      'name': 'and',
      'label': '且'
    },
    {
      'name': 'or',
      'label': '或'
    }
  ],
  fields: [
    {
      'name': 'user',
      'label': 'User',
      'placeholder': '请输入',
      'children': [
        {
          'name': 'firstName',
          'label': 'First Name',
          'placeholder': '请输入',
          validator: (r) => !!r.value
        },
        {
          'name': 'user.lastName',
          'label': 'Last Name',
          'placeholder': 'Enter last name',
          'defaultOperator': 'beginsWith',
          validator: (r) => !!r.value
        }
      ]
    },
    {
      'name': 'age',
      'label': 'Age',
      'inputType': 'number',
      validator: (r) => !!r.value
    },
    {
      'name': 'gender',
      'label': 'Gender',
      'operators': [
        {
          'name': '=',
          'label': '='
        }
      ],
      'valueEditorType': 'radio',
      'values': [
        {
          'name': 'M',
          'label': 'Male'
        },
        {
          'name': 'F',
          'label': 'Female'
        },
        {
          'name': 'O',
          'label': 'Other'
        }
      ]
    },
    {
      'name': 'height',
      'label': 'Height'
    },
    {
      'name': 'job',
      'label': 'Job'
    },
    {
      'name': 'description',
      'label': 'Description',
      'valueEditorType': 'textarea'
    },
    {
      'name': 'birthdate',
      'label': 'Birth Date',
      'inputType': 'date'
    },
    {
      'name': 'datetime',
      'label': 'Show Time',
      'inputType': 'datetime-local'
    },
    {
      'name': 'alarm',
      'label': 'Daily Alarm',
      'inputType': 'time'
    },
    {
      'name': 'groupedField1',
      'label': 'Grouped Field 1',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField2',
      'label': 'Grouped Field 2',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField3',
      'label': 'Grouped Field 3',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField4',
      'label': 'Grouped Field 4',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    }
  ]
}
</script>

<style scoped>
.formatBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 15px 5px;
}

code {
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  width: 100%;
  padding: 5px;
}

pre {
  border: 1px solid gray;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  white-space: pre-wrap;
}
</style>
