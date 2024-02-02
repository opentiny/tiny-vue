export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic usage'
      },
      desc: {
        'zh-CN':
          '\n            通过在<code>Layout </code> 组件嵌套使用 <code>Row</code> , <code>Col</code> 组件, 来实现对一个区域进行 12/24 栅格布局。<br>\n            通过<code>Layout </code> 组件的<code> cols </code> 属性来指定布局的总栅格栏数，组件库默认为12栅格栏；<br>\n            通过 <code>Col</code> 组件的 <code>span</code> 属性指定每栏所占栅格数。当一行的栅格数之和大于总栅格栏数时，布局会自动换行显示。<br>\n          ',
        'en-US':
          '\n          A 12/24 grid Layout of an area is implemented by nesting <code>Row</code>, <code>Col</code> components within <code>Layout </code> components. <br>\n          Use the <code> cols </code> property of the <code>Layout </code> component to specify the total number of grid columns for the layout. The component library defaults to 12 grid columns. <br>\n          The <code>span</code> property of the <code>Col</code> component specifies the number of grids per column. When the sum of the number of grids in a row is greater than the total number of grid columns, the layout is automatically wrapped. <br> \n        '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'responsive-layout',
      name: {
        'zh-CN': '响应式布局',
        'en-US': 'Responsive Layout'
      },
      desc: {
        'zh-CN':
          '\n            在<code>Col</code> 组件预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>，\n            来指定在每一个媒介查询尺寸时，该列应该占用的栅格数。组件库默认媒介查询的断点位置为<code>768 / 992 / 1200 / 1920</code><br>\n            请改变浏览器窗口的大小，观察下面示例中，各列所占栅格的变化。\n          ',
        'en-US':
          '\n            The <code>Col</code> component presets five response sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.\n            To specify the number of rasters that the column should occupy at each medium query size. The default media query is <code> 768/992/1200/1920 </code><br>\n            In the following example, resize the browser window to see how the columns are placed on the grid.\n           '
      },
      codeFiles: ['responsive-layout.vue']
    },
    {
      demoId: 'order',
      name: {
        'zh-CN': 'Col 排序',
        'en-US': 'Sort'
      },
      desc: {
        'zh-CN':
          '\n            在启用<code>Row</code> 组件的 <code>flex</code> 布局时，可通过设置它的 <code>order</code> 属性值为: <code>asc 或 desc</code>，给<code>Col</code> 组件排序。<br>\n            待排序的列需指定 <code>no</code> 属性为数字值，属性的默认值为0。\n          ',
        'en-US':
          '\n            When you enable the <code>flex</code> layout of the <code>Row</code> component, you can do this by setting its <code>order</code> property to: <code>asc or desc</code>, which sorts <code>Col</code> components. <br>\n            The column to be sorted requires the <code>no</code> attribute to be numeric, which defaults to 0.\n          '
      },
      codeFiles: ['order.vue']
    },
    {
      demoId: 'alignment',
      name: {
        'zh-CN': '对齐方式',
        'en-US': 'Alignment'
      },
      desc: {
        'zh-CN':
          '\n            通过<code>Row</code> 组件的 <code>flex</code> 属性设置为 <code>true</code> 来启用 flex 布局，\n            并通过 <code>justify</code> 来指定主轴方向的对齐方式，通过 <code>align</code> 属性指定副轴的对齐方式。<br>\n          ',
        'en-US':
          "\n            Enable the flex layout by setting the <code>Row</code> component's <code>flex</code> property to <code>true</code>.\n            Use <code>justify</code> to specify the main axis alignment and the <code>align</code> attribute to specify the secondary axis alignment. <br>\n          "
      },
      codeFiles: ['alignment.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '偏移',
        'en-US': 'Offset'
      },
      desc: {
        'zh-CN': '通过设置 <code>Col</code> 组件的 <code>offset</code> 属性来指定当前列偏移的栏数。',
        'en-US':
          'You specify the number of columns to offset by by setting the <code>offset</code> property of the <code>Col</code> component.Specifies the number of columns offset by setting the <code>offset</code> property of the <code>Col</code> component. '
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'gutter',
      name: {
        'zh-CN': '栅格间隔',
        'en-US': 'Gutter'
      },
      desc: {
        'zh-CN':
          '\n            通过使用 <code>Row</code> 组件的 <code>gutter</code> 属性实现栅格间隔。<br>\n            不设置 <code>gutter</code> 时，组件会默认为 <code>Col</code> 设置<code> 左右10px </code>的padding值<br>\n            通过 <code>noSpace</code> 属性，让子项间没有间距。\n          ',
        'en-US':
          '\n            This is done by using the <code>gutter</code> property of the <code>Row</code> component.\n            Without setting the <code>gutter</code>, the component will default to <code>Col</code> and set the padding value to 10px </code> around the <code>. \n          '
      },
      codeFiles: ['gutter.vue']
    },
    {
      demoId: 'tag',
      name: {
        'zh-CN': '自定义元素标签',
        'en-US': 'Custom Element Label'
      },
      desc: {
        'zh-CN':
          '\n            通过使用 <code>Layout / Row / Col </code> 组件的 <code>tag</code> 属性实现自定义元素标签，可选任意标签。默认使用 <code>div</code> \n          ',
        'en-US':
          '\n            Custom element tags can be created by using the <code>tag</code> attribute of the <code>Layout/Row/Col </code> component. Default <code>div</code>\n          '
      },
      codeFiles: ['tag.vue']
    }
  ]
}
