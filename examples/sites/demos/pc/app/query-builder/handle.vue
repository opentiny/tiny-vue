<template>
  <div>
    <tiny-query-builder ref="queryBuilder" max-height="400" :config="config" :query="query"></tiny-query-builder>
  </div>
</template>

<script>
import { TinyQueryBuilder } from '@opentiny/vue'
import { random } from '@opentiny/utils'

export default {
  components: {
    TinyQueryBuilder
  },
  data() {
    return {
      config,
      query: this.getInitialQuery()
    }
  },
  methods: {
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
            field: 'lastName',
            value: 'Vai, Vaughan',
            operator: 'in'
          },
          {
            id: generateID(),
            field: 'age',
            operator: '>',
            value: '28'
          },
          {
            id: generateID(),
            combinator: 'or',
            rules: [
              {
                id: generateID(),
                field: 'isMusician',
                operator: '=',
                value: true
              },
              {
                id: generateID(),
                field: 'instrument',
                operator: '=',
                value: 'Guitar'
              }
            ]
          },
          {
            id: generateID(),
            rules: [
              {
                id: generateID(),
                field: 'isMusician',
                value: true,
                operator: '='
              },
              {
                id: generateID(),
                field: 'instrument',
                value: 'Guitar',
                operator: '='
              }
            ],
            combinator: 'or'
          },
          {
            id: generateID(),
            field: 'groupedField1',
            operator: '=',
            value: 'groupedField4',
            valueSource: 'field'
          },
          {
            id: generateID(),
            field: 'birthdate',
            operator: 'between',
            value: '1954-10-03,1960-06-06'
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
  { name: 'in', label: 'in' },
  { name: 'notIn', label: 'not in' }
]

const config = {
  operators,
  showNewGroup: true,
  showNewRule: true,
  isGroupDisable: true,
  isRuleDisable: false,
  disabled: false,
  showLockButtons: false,
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
      name: 'firstName',
      label: 'First Name',
      placeholder: '请输入',
      validator: (r) => !!r.value
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter last name',
      defaultOperator: 'beginsWith',
      validator: (r) => !!r.value
    },
    {
      name: 'age',
      label: 'Age',
      inputType: 'number',
      validator: (r) => !!r.value
    },
    {
      name: 'isMusician',
      label: 'Is a musician',
      valueEditorType: 'checkbox',
      operators: [
        {
          name: '=',
          label: '='
        }
      ],
      defaultValue: false,
      validator: (r) => !!r.value
    },
    {
      name: 'instrument',
      label: 'Primary instrument',
      valueEditorType: 'select',
      values: [
        {
          label: 'Percussion instruments',
          options: [
            {
              name: 'Tambourine',
              label: 'Tambourine'
            },
            {
              name: 'Triangle',
              label: 'Triangle'
            },
            {
              name: 'Vibraphone',
              label: 'Vibraphone'
            },
            {
              name: 'Washboard',
              label: 'Washboard'
            },
            {
              name: 'Wood block',
              label: 'Wood block'
            },
            {
              name: 'Wooden fish',
              label: 'Wooden fish'
            },
            {
              name: 'Xylophone',
              label: 'Xylophone'
            }
          ]
        },
        {
          label: 'Membranophones',
          options: [
            {
              name: 'Drum',
              label: 'Drum'
            },
            {
              name: 'Drum kit',
              label: 'Drum kit'
            },
            {
              name: "Jew's harp",
              label: "Jew's harp"
            },
            {
              name: 'Octaban',
              label: 'Octaban'
            },
            {
              name: 'Samphor',
              label: 'Samphor'
            },
            {
              name: 'Snare drum',
              label: 'Snare drum'
            },
            {
              name: 'Timpani',
              label: 'Timpani'
            },
            {
              name: 'Tom-tom',
              label: 'Tom-tom'
            }
          ]
        },
        {
          label: 'Wind instruments',
          options: [
            {
              name: 'Slide whistle',
              label: 'Slide whistle'
            },
            {
              name: 'Sousaphone',
              label: 'Sousaphone'
            },
            {
              name: 'Trombone',
              label: 'Trombone'
            },
            {
              name: 'Trumpet',
              label: 'Trumpet'
            },
            {
              name: 'Tuba',
              label: 'Tuba'
            },
            {
              name: 'Whistle',
              label: 'Whistle'
            }
          ]
        },
        {
          label: 'Stringed instruments',
          options: [
            {
              name: 'Ukulele',
              label: 'Ukulele'
            },
            {
              name: 'Viol',
              label: 'Viol'
            },
            {
              name: 'Violin',
              label: 'Violin'
            },
            {
              name: 'Washtub bass',
              label: 'Washtub bass'
            }
          ]
        },
        {
          label: 'Electronic instruments',
          options: [
            {
              name: 'Teleharmonium',
              label: 'Teleharmonium'
            },
            {
              name: 'Tenori-on',
              label: 'Tenori-on'
            },
            {
              name: 'Theremin',
              label: 'Theremin'
            },
            {
              name: 'trautonium',
              label: 'trautonium'
            },
            {
              name: 'Turntablism',
              label: 'Turntablism'
            },
            {
              name: 'Turntable',
              label: 'Turntable'
            }
          ]
        }
      ],
      defaultValue: 'Cowbell',
      operators: [
        {
          name: '=',
          label: '='
        },
        {
          name: 'in',
          label: 'in'
        }
      ]
    },
    {
      name: 'alsoPlays',
      label: 'Also plays',
      valueEditorType: 'multiselect',
      values: [
        {
          label: 'Percussion instruments',
          options: [
            {
              name: 'Tambourine',
              label: 'Tambourine'
            },
            {
              name: 'Triangle',
              label: 'Triangle'
            },
            {
              name: 'Vibraphone',
              label: 'Vibraphone'
            },
            {
              name: 'Washboard',
              label: 'Washboard'
            },
            {
              name: 'Wood block',
              label: 'Wood block'
            },
            {
              name: 'Wooden fish',
              label: 'Wooden fish'
            },
            {
              name: 'Xylophone',
              label: 'Xylophone'
            }
          ]
        },
        {
          label: 'Membranophones',
          options: [
            {
              name: 'Drum',
              label: 'Drum'
            },
            {
              name: 'Drum kit',
              label: 'Drum kit'
            },
            {
              name: "Jew's harp",
              label: "Jew's harp"
            },
            {
              name: 'Octaban',
              label: 'Octaban'
            },
            {
              name: 'Samphor',
              label: 'Samphor'
            },
            {
              name: 'Snare drum',
              label: 'Snare drum'
            },
            {
              name: 'Timpani',
              label: 'Timpani'
            },
            {
              name: 'Tom-tom',
              label: 'Tom-tom'
            }
          ]
        },
        {
          label: 'Wind instruments',
          options: [
            {
              name: 'Slide whistle',
              label: 'Slide whistle'
            },
            {
              name: 'Sousaphone',
              label: 'Sousaphone'
            },
            {
              name: 'Trombone',
              label: 'Trombone'
            },
            {
              name: 'Trumpet',
              label: 'Trumpet'
            },
            {
              name: 'Tuba',
              label: 'Tuba'
            },
            {
              name: 'Whistle',
              label: 'Whistle'
            }
          ]
        },
        {
          label: 'Stringed instruments',
          options: [
            {
              name: 'Ukulele',
              label: 'Ukulele'
            },
            {
              name: 'Viol',
              label: 'Viol'
            },
            {
              name: 'Violin',
              label: 'Violin'
            },
            {
              name: 'Washtub bass',
              label: 'Washtub bass'
            }
          ]
        },
        {
          label: 'Electronic instruments',
          options: [
            {
              name: 'trautonium',
              label: 'trautonium'
            },
            {
              name: 'Turntablism',
              label: 'Turntablism'
            },
            {
              name: 'Turntable',
              label: 'Turntable'
            }
          ]
        }
      ],
      defaultValue: 'More cowbell',
      operators: [
        {
          name: 'in',
          label: 'in'
        }
      ]
    },
    {
      name: 'gender',
      label: 'Gender',
      operators: [
        {
          name: '=',
          label: '='
        }
      ],
      valueEditorType: 'radio',
      values: [
        {
          name: 'M',
          label: 'Male'
        },
        {
          name: 'F',
          label: 'Female'
        },
        {
          name: 'O',
          label: 'Other'
        }
      ]
    },
    {
      name: 'datetime',
      label: 'Show Time',
      inputType: 'datetime-local'
    },
    {
      name: 'alarm',
      label: 'Daily Alarm',
      inputType: 'time'
    },
    {
      name: 'groupedField1',
      label: 'Grouped Field 1',
      comparator: 'groupNumber',
      groupNumber: 'group1',
      valueSources: ['field', 'value']
    },
    {
      name: 'groupedField2',
      label: 'Grouped Field 2',
      comparator: 'groupNumber',
      groupNumber: 'group1',
      valueSources: ['field', 'value']
    },
    {
      name: 'groupedField3',
      label: 'Grouped Field 3',
      comparator: 'groupNumber',
      groupNumber: 'group1',
      valueSources: ['field', 'value']
    },
    {
      name: 'groupedField4',
      label: 'Grouped Field 4',
      comparator: 'groupNumber',
      groupNumber: 'group1',
      valueSources: ['field', 'value']
    }
  ]
}
</script>
