export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic usage' },
      'desc': {
        'zh-CN': `<p>
            通过在<code>Layout </code> 组件嵌套使用 <code>Row</code> , <code>Col</code> 组件, 来实现对一个区域进行 12/24 栅格布局。<br>
            通过<code>Layout </code> 组件的<code> cols </code> 属性来指定布局的总栅格栏数，该系统默认为12栅格栏；<br>
            通过 <code>Col</code> 组件的 <code>span</code> 属性指定每栏所占栅格数。当一行的栅格数之和大于总栅格栏数时，布局会自动换行显示。<br>
          </p>`,
        'en-US':
          '<p>The grid system layout is implemented by using the <code>span</code> attribute of the <code>Row</code>, <code>Col</code> component. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'responsive-layout',
      'name': { 'zh-CN': '响应式布局', 'en-US': 'Responsive Layout' },
      'desc': {
        'zh-CN': `<p>在<code>Col</code> 组件预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>，来指定在每一个屏幕查询尺寸时，该列应该占用的栅格数。<br>
              请改变浏览器窗口的大小，观察下面示例中，各列所占栅格的变化。
          </p>`,
        'en-US':
          '<p><code>Col</code> has five response sizes are preset: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>. </p>\n'
      },
      'codeFiles': ['responsive-layout.vue']
    },
    {
      'demoId': 'alignment',
      'name': { 'zh-CN': '对齐方式', 'en-US': 'Alignment' },
      'desc': {
        'zh-CN': `<p>通过<code>Row</code> 组件的 <code>flex</code> 属性设置为 <code>true</code> 来启用 flex 布局，并通过 <code>justify</code> 来指定主轴方向的对齐方式，通过 <code>align</code> 属性指定副轴的对齐方式。<br>

          </p>`,
        'en-US':
          '<p>Enable the flex layout by setting the <code>flex</code> property to <code>true</code>. The <code>justify</code> and <code>align</code> attributes are used to adjust the alignment of the child elements. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Prompt</p>\n<p>The flex layout has Internet Explorer compatibility issues and can only run on Internet Explorer 10 or later. </p>\n</div>\n'
      },
      'codeFiles': ['alignment.vue']
    },
    {
      'demoId': 'order',
      'name': { 'zh-CN': 'Col 排序', 'en-US': 'Sort' },
      'desc': {
        'zh-CN':
          '<p>在启用<code>Row</code> 组件的 <code>flex</code> 布局时，可通过设置它的 <code>order</code> 属性，给<code>Col</code> 组件排序,<code>order</code>可选值为: <code>asc / desc</code>。<br>待排序的列需指定 <code>no</code> 属性为数字值，属性的默认值为0。</p>\n',
        'en-US':
          '<p>When enabling the <code>flex</code> layout, you can set the <code>order</code> attribute of the <code>Row</code> component. Sorts the <code>col</code> with the <code>no</code> attribute. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Prompt</p>\n<p>The flex layout has Internet Explorer compatibility issues and can only run on Internet Explorer 10 or later. </p>\n</div>\n'
      },
      'codeFiles': ['order.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '偏移', 'en-US': 'Offset' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>Col</code> 组件的 <code>offset</code> 属性来指定当前列偏移的栏数。</p>\n',
        'en-US':
          '<p>Specifies the number of columns offset by setting the <code>offset</code> property of the <code>Col</code> component. </p>\n'
      },
      'codeFiles': ['offset.vue']
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
      'demoId': 'tag',
      'name': { 'zh-CN': '自定义元素标签', 'en-US': 'Custom Element Label' },
      'desc': {
        'zh-CN':
          '<p>通过使用 <code>Layout / Row / Col </code> 组件的 <code>tag</code> 属性实现自定义元素标签，可选任意标签。默认使用 <code>div</code> </p>\n',
        'en-US':
          '<p>The <code>tag</code> attribute of the <code>Row</code> component is used to customize element tags. Any tag is optional. </p>\n'
      },
      'codeFiles': ['tag.vue']
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
          'name': 'cols',
          'type': 'number',
          'defaultValue': '12',
          'desc': { 'zh-CN': '总栅格数;该属性的可选值为 12 /24 ', 'en-US': '' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': { 'zh-CN': '标签', 'en-US': '' },
          'demoId': 'tag'
        }
      ],
      'row-attrs': [
        {
          'name': 'align',
          'type': 'string',
          'defaultValue': 'top',
          'desc': { 'zh-CN': "子项的副轴对齐方向，可取值：'top', 'middle', 'bottom'", 'en-US': '' },
          'demoId': 'alignment'
        },
        {
          'name': 'flex',
          'type': 'boolean',
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
          'type': 'string',
          'defaultValue': 'start',
          'desc': {
            'zh-CN': "子项的主轴对齐方向，可取值：'start', 'center', 'end', 'space-between', 'space-around'",
            'en-US': ''
          },
          'demoId': 'alignment'
        },
        {
          'name': 'noSpace',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '子项没有间隔，相当于gutter=0的时候', 'en-US': '' },
          'demoId': 'gutter'
        },
        {
          'name': 'order',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': "子项的排序方式，可取值：'asc', 'des'。 不设置时，保留子项在模板中的顺序。", 'en-US': '' },
          'demoId': 'order'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': { 'zh-CN': '定义 Row 元素的渲染后的标签，默认为div', 'en-US': '' },
          'demoId': 'tag'
        }
      ],
      'col-attrs': [
        {
          'name': 'move',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项的右偏移量,是通过 left 属性实现偏移,建议使用 offset 代替', 'en-US': '' },
          'demoId': 'offset'
        },
        {
          'name': 'no',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项排序编号', 'en-US': '' },
          'demoId': 'order'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项的向右偏移量,是通过 margin-left 属性实现偏移,', 'en-US': '' },
          'demoId': 'offset'
        },
        {
          'name': 'span',
          'type': 'number',
          'defaultValue': '12',
          'desc': { 'zh-CN': '子项占据的列数', 'en-US': '' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': { 'zh-CN': '子项渲染后的标签', 'en-US': '' },
          'demoId': 'tag'
        },
        {
          'name': 'xs/sm/md/lg/xl',
          'type': 'number, object',
          'defaultValue': '',
          'desc': { 'zh-CN': '响应式栅格数或者栅格属性对象', 'en-US': '' },
          'demoId': 'responsive-layout'
        }
      ]
    }
  ]
}
