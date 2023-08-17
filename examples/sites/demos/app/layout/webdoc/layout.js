export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '栅格布局', 'en-US': 'Grid Layout' },
      'desc': {
        'zh-CN':
          '<p>通过使用 <code>Row</code> , <code>Col</code> 组件的 <code>span</code> 属性实现栅格系统布局。\n 该系统默认为12栅格，<code>Col</code> 组件的 <code>span</code>之和大于12时，布局会自动换行显示。</p>\n',
        'en-US':
          '<p>The grid system layout is implemented by using the <code>span</code> attribute of the <code>Row</code>, <code>Col</code> component. </p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'alignment',
      'name': { 'zh-CN': '对齐方式', 'en-US': 'Alignment' },
      'desc': {
        'zh-CN':
          '<p>通过设置<code>Row</code> 的 <code>flex</code> 属性为 <code>true</code> 来启用 flex 布局，并通过 <code>justify</code> 与 <code>align</code> 属性调整子元素的对齐方式。</p>\n<div class="tip custom-block"><p class="custom-block-title">提示</p>\n<p>flex 布局存在 IE 兼容性问题，只能在 IE 10 以上运行。</p>\n</div>\n',
        'en-US':
          '<p>Enable the flex layout by setting the <code>flex</code> property to <code>true</code>. The <code>justify</code> and <code>align</code> attributes are used to adjust the alignment of the child elements. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Prompt</p>\n<p>The flex layout has Internet Explorer compatibility issues and can only run on Internet Explorer 10 or later. </p>\n</div>\n'
      },
      'codeFiles': ['alignment.vue']
    },
    {
      'demoId': 'order',
      'name': { 'zh-CN': '排序', 'en-US': 'Sort' },
      'desc': {
        'zh-CN':
          '<p>在启用 <code>flex</code> 布局时，可通过设置 <code>Row</code> 组件的 <code>order</code> 属性，给带 <code>no</code> 属性的 <code>col</code>排序。</p>\n<div class="tip custom-block"><p class="custom-block-title">提示</p>\n<p>flex 布局存在 IE 兼容性问题，只能在 IE 10 以上运行。</p>\n</div>\n',
        'en-US':
          '<p>When enabling the <code>flex</code> layout, you can set the <code>order</code> attribute of the <code>Row</code> component. Sorts the <code>col</code> with the <code>no</code> attribute. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Prompt</p>\n<p>The flex layout has Internet Explorer compatibility issues and can only run on Internet Explorer 10 or later. </p>\n</div>\n'
      },
      'codeFiles': ['order.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '偏移', 'en-US': 'Offset' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>Col</code> 组件的 <code>offset</code> 属性来指定分栏偏移的栏数。</p>\n',
        'en-US':
          '<p>Specifies the number of columns offset by setting the <code>offset</code> property of the <code>Col</code> component. </p>\n'
      },
      'codeFiles': ['offset.vue']
    },
    {
      'demoId': 'align',
      'name': { 'zh-CN': '垂直排列方式', 'en-US': 'vertical arrangement' },
      'desc': {
        'zh-CN': '<p>通过使用 <code>Row</code> 组件的 <code>align</code> 属性实现\tflex 布局下的垂直排列方式。</p>\n',
        'en-US':
          '<p>Use the <code>align</code> attribute of the <code>Row</code> component to implement the vertical arrangement in \tflex layout. </p>\n'
      },
      'codeFiles': ['row/align.vue']
    },
    {
      'demoId': 'gutter',
      'name': { 'zh-CN': '栅格间隔', 'en-US': 'Grid Interval' },
      'desc': {
        'zh-CN': '<p>通过使用 <code>Row</code> 组件的 <code>gutter</code> 属性实现栅格间隔。</p>\n',
        'en-US':
          '<p>The grid spacing is implemented by using the <code>gutter</code> attribute of the <code>Row</code> component. </p>\n'
      },
      'codeFiles': ['gutter.vue']
    },
    {
      'demoId': 'justify',
      'name': { 'zh-CN': '水平排列方式', 'en-US': 'horizontal arrangement' },
      'desc': {
        'zh-CN': '<p>通过使用 <code>Row</code> 组件的 <code>justify</code> 属性实现 flex 布局下的水平排列方式。</p>\n',
        'en-US':
          '<p>The <code>justify</code> attribute of the <code>Row</code> component is used to implement horizontal arrangement in the flex layout. </p>\n'
      },
      'codeFiles': ['row/justify.vue']
    },
    {
      'demoId': 'order1',
      'name': { 'zh-CN': '排序方式', 'en-US': 'Sort by' },
      'desc': {
        'zh-CN': '<p>通过使用 <code>Row</code> 组件的 <code>order</code> 属性实现 flex 布局下排序方式。</p>\n',
        'en-US':
          '<p>The <code>order</code> attribute of the <code>Row</code> component is used to implement the sorting mode in the flex layout. </p>\n'
      },
      'codeFiles': ['row/order.vue']
    },
    {
      'demoId': 'tag1',
      'name': { 'zh-CN': '自定义元素标签', 'en-US': 'Custom Element Label' },
      'desc': {
        'zh-CN': '<p>通过使用 <code>Row</code> 组件的 <code>tag</code> 属性实现自定义元素标签，可选任意标签。</p>\n',
        'en-US':
          '<p>The <code>tag</code> attribute of the <code>Row</code> component is used to customize element tags. Any tag is optional. </p>\n'
      },
      'codeFiles': ['row/tag1.vue']
    },
    {
      'demoId': 'col-move',
      'name': { 'zh-CN': '移动', 'en-US': 'Move' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>Col</code> 组件的 <code>move</code> 属性来指定分栏偏移的栏数。</p>\n',
        'en-US':
          '<p>Specifies the number of columns offset by setting the <code>move</code> property of the <code>Col</code> component. </p>\n'
      },
      'codeFiles': ['col/col-move.vue']
    },
    {
      'demoId': 'responsive-layout',
      'name': { 'zh-CN': '响应式布局', 'en-US': 'Responsive Layout' },
      'desc': {
        'zh-CN':
          '<p>参照了 Bootstrap 的响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>\n',
        'en-US':
          '<p>Referring to the responsive design of Bootstrap, five response sizes are preset: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>. </p>\n'
      },
      'codeFiles': ['responsive-layout.vue']
    },
    {
      'demoId': 'tag',
      'name': { 'zh-CN': '自定义元素标签', 'en-US': 'Custom Element Label' },
      'desc': { 'zh-CN': '<p>可选任意标签。</p>\n', 'en-US': '<p>The value can be any tag. </p>\n' },
      'codeFiles': ['col/tag.vue']
    }
  ],
  apis: [
    {
      'name': 'layout',
      'type': 'component',
      'properties': [],
      'events': [],
      'slots': [],
      'layout-attrs': [
        {
          'name': 'tag',
          'type': 'String',
          'defaultValue': '该属性的默认值为 div',
          'desc': { 'zh-CN': '标签', 'en-US': '' },
          'demoId': 'tag1'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '该属性的默认值为 medium',
          'desc': { 'zh-CN': '大小;该属性的可选值为 medium / small / mini', 'en-US': '' },
          'demoId': ''
        }
      ],
      'layout-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': '' },
          'demoId': 'base'
        }
      ],
      'row-attrs': [
        {
          'name': 'flex',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否为flex容器', 'en-US': '' },
          'demoId': 'alignment'
        },
        {
          'name': 'gutter',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项的间隔的像素', 'en-US': '' },
          'demoId': 'gutter'
        },
        {
          'name': 'justify',
          'type': 'String',
          'defaultValue': 'start',
          'desc': {
            'zh-CN': "子项的主轴对齐方向，可取值：'start', 'center', 'end', 'space-between', 'space-around'",
            'en-US': ''
          },
          'demoId': 'alignment'
        },
        {
          'name': 'align',
          'type': 'String',
          'defaultValue': 'top',
          'desc': { 'zh-CN': "子项的副轴对齐方向，可取值：'top', 'middle', 'bottom'", 'en-US': '' },
          'demoId': 'alignment'
        },
        {
          'name': 'order',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': "子项的排序方式，可取值：'asc', 'des'。 不设置时，保留子项在模板中的顺序。", 'en-US': '' },
          'demoId': 'order1'
        },
        {
          'name': 'tag',
          'type': 'String',
          'defaultValue': 'div',
          'desc': { 'zh-CN': '定义 Row 元素的渲染后的标签，默认为div', 'en-US': '' },
          'demoId': 'tag1'
        },
        {
          'name': 'noSpace',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '子项没有间隔，相当于gutter=0的时候', 'en-US': '' },
          'demoId': ''
        }
      ],
      'col-attrs': [
        {
          'name': 'span',
          'type': 'Number',
          'defaultValue': '12',
          'desc': { 'zh-CN': '子项占据的列数', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'offset',
          'type': 'Number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项的左偏移量', 'en-US': '' },
          'demoId': 'offset'
        },
        {
          'name': 'no',
          'type': 'Number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项排序编号', 'en-US': '' },
          'demoId': 'order1'
        },
        {
          'name': 'move',
          'type': 'Number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项的右偏移量', 'en-US': '' },
          'demoId': 'col-move'
        },
        {
          'name': 'xs/sm/md/lg/xl',
          'type': 'Number, Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '响应式栅格数或者栅格属性对象', 'en-US': '' },
          'demoId': 'responsive-layout'
        },
        {
          'name': 'tag',
          'type': 'String',
          'defaultValue': 'div',
          'desc': { 'zh-CN': '子项渲染后的标签', 'en-US': '' },
          'demoId': ''
        }
      ]
    }
  ]
}
