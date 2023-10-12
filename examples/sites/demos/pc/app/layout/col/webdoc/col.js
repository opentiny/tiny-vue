export default {
  column: '2',
  owner: '',
  demos: [],
  apis: [
    {
      'name': 'col',
      'type': 'component',
      'properties': [
        {
          'name': 'lg',
          'type': 'Number , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '≥1200px 响应式栅格数或者栅格属性对象，例如： {span: 4, offset: 4} 。',
            'en-US':
              'Number of responsive grids or grid attribute objects greater than or equal to 1200px, for example, {span: 4, offset: 4}.'
          },
          'demoId': 'base'
        },
        {
          'name': 'md',
          'type': 'Number , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '≥992px 响应式栅格数或者栅格属性对象，例如： {span: 4, offset: 4} 。',
            'en-US':
              'Number of responsive grids or grid attribute objects greater than or equal to 992px, for example, {span: 4, offset: 4}.'
          },
          'demoId': 'base'
        },
        {
          'name': 'no',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '排序编号（row中启用order生效），默认值为 0 。',
            'en-US': 'Sort ID (valid when order is enabled in a row). The default value is 0.'
          },
          'demoId': 'base'
        },
        {
          'name': 'offset',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '栅格左侧的间隔格数，默认为 0 。',
            'en-US': 'Number of grids on the left of the grid. The default value is 0.'
          },
          'demoId': 'base'
        },
        {
          'name': 'sm',
          'type': 'Number , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '≥768px 响应式栅格数或者栅格属性对象，例如： {span: 4, offset: 4} 。',
            'en-US':
              'Number of responsive grids or grid attribute objects greater than or equal to 768 pixels, for example, {span: 4, offset: 4}.'
          },
          'demoId': 'base'
        },
        {
          'name': 'span',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 12',
          'desc': { 'zh-CN': '栅格占据的列数', 'en-US': 'Number of columns occupied by a grid' },
          'demoId': 'base'
        },
        {
          'name': 'tag',
          'type': 'String',
          'defaultValue': '该属性的默认值为 div',
          'desc': {
            'zh-CN': '自定义元素标签，可选任意标签;该属性的可选值为 *',
            'en-US': 'User-defined element label. Any label can be selected. The optional value of this attribute is *'
          },
          'demoId': 'base'
        },
        {
          'name': 'xl',
          'type': 'Number , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '≥1920px 响应式栅格数或者栅格属性对象，例如： {span: 4, offset: 4} 。',
            'en-US':
              'Number of responsive grids or grid attribute objects greater than or equal to 1920px, for example, {span: 4, offset: 4}.'
          },
          'demoId': 'base'
        },
        {
          'name': 'xs',
          'type': 'Number , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '<768px 响应式栅格数或者栅格属性对象，例如： {span: 4, offset: 4} 。',
            'en-US': '<768px responsive grids or grid attribute objects, for example, {span: 4, offset: 4}.'
          },
          'demoId': 'base'
        },
        {
          'name': 'move',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '栅格左右移动格数（正数向右，负数向左）',
            'en-US':
              'Number of grids that move left and right (positive numbers to the right, negative numbers to the left)'
          },
          'demoId': 'base'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'base'
        }
      ]
    }
  ]
}
