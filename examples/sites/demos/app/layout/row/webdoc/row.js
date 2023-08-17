export default {
  column: '2',
  owner: '',
  demos: [],
  apis: [
    {
      'name': 'row',
      'type': 'component',
      'properties': [
        {
          'name': 'align',
          'type': 'String',
          'defaultValue': '该属性的默认值为 top',
          'desc': {
            'zh-CN': 'flex 布局下的垂直排列方式;该属性的可选值为 top / middle / bottom',
            'en-US':
              'vertical arrangement mode in the flex layout; The value of this attribute can be top / middle / bottom'
          },
          'demoId': 'align'
        },
        {
          'name': 'flex',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '启用 flex 布局模式，现代浏览器下有效',
            'en-US': 'Enable the flex layout mode. This parameter is valid in modern browsers.'
          },
          'demoId': ''
        },
        {
          'name': 'gutter',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': { 'zh-CN': '栅格间隔', 'en-US': 'Grid Interval' },
          'demoId': 'align'
        },
        {
          'name': 'justify',
          'type': 'String',
          'defaultValue': '该属性的默认值为 start',
          'desc': {
            'zh-CN': 'flex 布局下的水平排列方式;该属性的可选值为 start / end / center / space-around / space-between',
            'en-US':
              'horizontal arrangement mode in flex layout; The optional value of this attribute is start / end / center / space-around / space-between'
          },
          'demoId': 'align'
        },
        {
          'name': 'order',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'flex 布局下排序方式;该属性的可选值为 asc / des',
            'en-US': 'Flex layout sorting mode; The optional value of this attribute is asc / des'
          },
          'demoId': 'align'
        },
        {
          'name': 'tag',
          'type': 'String',
          'defaultValue': '该属性的默认值为 div',
          'desc': {
            'zh-CN': '自定义元素标签，可选任意标签;该属性的可选值为 *',
            'en-US': 'User-defined element label. Any label can be selected. The optional value of this attribute is *'
          },
          'demoId': 'align'
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
