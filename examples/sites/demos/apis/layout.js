export default {
  mode: ['pc'],
  apis: [
    {
      name: 'layout',
      type: 'component',
      props: [
        {
          name: 'cols',
          type: 'number',
          defaultValue: '12',
          desc: {
            'zh-CN': '总栅格数;该属性的可选值为 12 /24 ',
            'en-US': 'Total number of grids; The optional value for this attribute is 12/24'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'tag',
          type: 'string',
          defaultValue: '"div"',
          desc: {
            'zh-CN': '定义 Layout 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Layout element, which defaults to div'
          },
          mode: ['pc'],
          pcDemo: 'tag'
        }
      ],
      events: [],
      methods: [],
      slots: []
    },
    {
      name: 'row',
      type: 'component',
      props: [
        {
          name: 'align',
          type: 'string',
          defaultValue: '"top"',
          desc: {
            'zh-CN': "子项的副轴对齐方向，可取值：'top', 'middle', 'bottom'",
            'en-US': "Alignment of minor axes for child items; values: 'top', 'middle', 'bottom'"
          },
          mode: ['pc'],
          pcDemo: 'alignment'
        },
        {
          name: 'flex',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为flex容器',
            'en-US': 'Whether it is a flex container'
          },
          mode: ['pc'],
          pcDemo: 'alignment'
        },
        {
          name: 'gutter',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '子项的间隔的像素',
            'en-US': 'The spacing of the child items in pixels'
          },
          mode: ['pc'],
          pcDemo: 'gutter'
        },
        {
          name: 'justify',
          type: 'string',
          defaultValue: '"start"',
          desc: {
            'zh-CN': "子项的主轴对齐方向，可取值：'start', 'center', 'end', 'space-between', 'space-around'",
            'en-US':
              "Main axis alignment direction for child items; values: 'start', 'center', 'end', 'space-between', 'space-around'"
          },
          mode: ['pc'],
          pcDemo: 'alignment'
        },
        {
          name: 'noSpace',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '子项没有间隔，相当于强制gutter=0的情况',
            'en-US': 'Child entries have no spacing, equivalent to forcing gutter=0'
          },
          mode: ['pc'],
          pcDemo: 'gutter'
        },
        {
          name: 'order',
          type: 'string',
          defaultValue: '"asc" | "des"',
          desc: {
            'zh-CN': '子项的排序方式。 不设置时，保留子项在模板中的顺序。',
            'en-US':
              "Ordering of the child items; values: 'asc', 'des'. When not set, the order of the child items in the template is preserved."
          },
          mode: ['pc'],
          pcDemo: 'order'
        },
        {
          name: 'tag',
          type: 'string',
          defaultValue: '"div"',
          desc: {
            'zh-CN': '定义 Row 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Row element, which defaults to div'
          },
          mode: ['pc'],
          pcDemo: 'tag'
        }
      ],
      events: [],
      methods: [],
      slots: []
    },
    {
      name: 'col',
      type: 'component',
      props: [
        {
          name: 'lg',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '在响应式宽度 <code> < 1920px <code> 时，该列占用的栅格数',
            'en-US': 'The number of grids occupied by the column at the response width <code> < 1920px <code>'
          },
          mode: ['pc'],
          pcDemo: 'responsive-layout'
        },
        {
          name: 'md',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '在响应式宽度 <code> < 1200px <code> 时，该列占用的栅格数',
            'en-US': 'The number of grids occupied by the column at the response width <code> < 1200px <code>'
          },
          mode: ['pc'],
          pcDemo: 'responsive-layout'
        },
        {
          name: 'move',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '子项的右偏移量,是通过 left 属性实现偏移,建议使用 offset 代替',
            'en-US':
              'The right offset of the child item is offset via the left property; it is recommended to use offset instead'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'no',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '子项排序编号',
            'en-US': 'Subitems are sorted by number'
          },
          mode: ['pc'],
          pcDemo: 'order'
        },
        {
          name: 'offset',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '子项的向右偏移量,是通过 margin-left 属性实现偏移',
            'en-US': 'The offset to the right of the child item is achieved using the margin-left property'
          },
          mode: ['pc'],
          pcDemo: 'offset'
        },
        {
          name: 'sm',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '在响应式宽度 <code> < 992px <code> 时，该列占用的栅格数',
            'en-US': 'The number of grids occupied by the column at the response width <code> < 992px <code>'
          },
          mode: ['pc'],
          pcDemo: 'responsive-layout'
        },
        {
          name: 'span',
          type: 'number',
          defaultValue: '12',
          desc: {
            'zh-CN': '子项占据的列数',
            'en-US': 'Number of columns occupied by the child'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'tag',
          type: 'string',
          defaultValue: '"div"',
          desc: {
            'zh-CN': '定义 Col 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Col element, which defaults to div'
          },
          mode: ['pc'],
          pcDemo: 'tag'
        },
        {
          name: 'xl',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '在响应式宽度 <code> >= 1920px <code> 时，该列占用的栅格数',
            'en-US': 'The number of grids occupied by the column at the response width <code> >= 1920px <code>'
          },
          mode: ['pc'],
          pcDemo: 'responsive-layout'
        },
        {
          name: 'xs',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '在响应式宽度 <code> < 768px <code> 时，该列占用的栅格数',
            'en-US': 'The number of grids occupied by the column at the response width <code> < 768px <code>'
          },
          mode: ['pc'],
          pcDemo: 'responsive-layout'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
