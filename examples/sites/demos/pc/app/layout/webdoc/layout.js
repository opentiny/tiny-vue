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
            通过<code>Layout </code> 组件的<code> cols </code> 属性来指定布局的总栅格栏数，组件库默认为12栅格栏；<br>
            通过 <code>Col</code> 组件的 <code>span</code> 属性指定每栏所占栅格数。当一行的栅格数之和大于总栅格栏数时，布局会自动换行显示。<br>
          </p>`,
        'en-US': `<p>
          A 12/24 grid Layout of an area is implemented by nesting <code>Row</code>, <code>Col</code> components within <code>Layout </code> components. <br>
          Use the <code> cols </code> property of the <code>Layout </code> component to specify the total number of grid columns for the layout. The component library defaults to 12 grid columns. <br>
          The <code>span</code> property of the <code>Col</code> component specifies the number of grids per column. When the sum of the number of grids in a row is greater than the total number of grid columns, the layout is automatically wrapped. <br> 
        </p>`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'responsive-layout',
      'name': { 'zh-CN': '响应式布局', 'en-US': 'Responsive Layout' },
      'desc': {
        'zh-CN': `<p>
            在<code>Col</code> 组件预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>，
            来指定在每一个媒介查询尺寸时，该列应该占用的栅格数。组件库默认媒介查询的断点位置为<code>768 / 992 / 1200 / 1920</code><br>
            请改变浏览器窗口的大小，观察下面示例中，各列所占栅格的变化。
          </p>`,
        'en-US': `<p>
            The <code>Col</code> component presets five response sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
            To specify the number of rasters that the column should occupy at each medium query size. The default media query is <code> 768/992/1200/1920 </code><br>
            In the following example, resize the browser window to see how the columns are placed on the grid.
           </p>`
      },
      'codeFiles': ['responsive-layout.vue']
    },
    {
      'demoId': 'order',
      'name': { 'zh-CN': 'Col 排序', 'en-US': 'Sort' },
      'desc': {
        'zh-CN': `<p>
            在启用<code>Row</code> 组件的 <code>flex</code> 布局时，可通过设置它的 <code>order</code> 属性值为: <code>asc 或 desc</code>，给<code>Col</code> 组件排序。<br>
            待排序的列需指定 <code>no</code> 属性为数字值，属性的默认值为0。
          </p>`,
        'en-US': `<p>
            When you enable the <code>flex</code> layout of the <code>Row</code> component, you can do this by setting its <code>order</code> property to: <code>asc or desc</code>, which sorts <code>Col</code> components. <br>
            The column to be sorted requires the <code>no</code> attribute to be numeric, which defaults to 0.
          </p>`
      },
      'codeFiles': ['order.vue']
    },
    {
      'demoId': 'alignment',
      'name': { 'zh-CN': '对齐方式', 'en-US': 'Alignment' },
      'desc': {
        'zh-CN': `<p>
            通过<code>Row</code> 组件的 <code>flex</code> 属性设置为 <code>true</code> 来启用 flex 布局，
            并通过 <code>justify</code> 来指定主轴方向的对齐方式，通过 <code>align</code> 属性指定副轴的对齐方式。<br>
          </p>`,
        'en-US': `<p>
            Enable the flex layout by setting the <code>Row</code> component's <code>flex</code> property to <code>true</code>.
            Use <code>justify</code> to specify the main axis alignment and the <code>align</code> attribute to specify the secondary axis alignment. <br>
          </p>`
      },
      'codeFiles': ['alignment.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '偏移', 'en-US': 'Offset' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>Col</code> 组件的 <code>offset</code> 属性来指定当前列偏移的栏数。</p>',
        'en-US':
          '<p>You specify the number of columns to offset by by setting the <code>offset</code> property of the <code>Col</code> component.Specifies the number of columns offset by setting the <code>offset</code> property of the <code>Col</code> component. </p>'
      },
      'codeFiles': ['offset.vue']
    },
    {
      'demoId': 'gutter',
      'name': { 'zh-CN': '栅格间隔', 'en-US': 'Gutter' },
      'desc': {
        'zh-CN': `<p>
            通过使用 <code>Row</code> 组件的 <code>gutter</code> 属性实现栅格间隔。
            不设置 <code>gutter</code> 时，组件会默认为 <code>Col</code> 设置<code> 左右10px </code>的padding值。
          </p>`,
        'en-US': `<p>
            This is done by using the <code>gutter</code> property of the <code>Row</code> component.
            Without setting the <code>gutter</code>, the component will default to <code>Col</code> and set the padding value to 10px </code> around the <code>. 
          </p>`
      },
      'codeFiles': ['gutter.vue']
    },
    {
      'demoId': 'tag',
      'name': { 'zh-CN': '自定义元素标签', 'en-US': 'Custom Element Label' },
      'desc': {
        'zh-CN': `<p>
            通过使用 <code>Layout / Row / Col </code> 组件的 <code>tag</code> 属性实现自定义元素标签，可选任意标签。默认使用 <code>div</code> 
          </p>`,
        'en-US': `<p>
            Custom element tags can be created by using the <code>tag</code> attribute of the <code>Layout/Row/Col </code> component. Default <code>div</code>
          </p>`
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
          'desc': {
            'zh-CN': '总栅格数;该属性的可选值为 12 /24 ',
            'en-US': 'Total number of grids; The optional value for this attribute is 12/24'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': {
            'zh-CN': '定义 Layout 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Layout element, which defaults to div'
          },
          'demoId': 'tag'
        }
      ],
      'row-attrs': [
        {
          'name': 'align',
          'type': 'string',
          'defaultValue': 'top',
          'desc': {
            'zh-CN': "子项的副轴对齐方向，可取值：'top', 'middle', 'bottom'",
            'en-US': `Alignment of minor axes for child items; values: 'top', 'middle', 'bottom'`
          },
          'demoId': 'alignment'
        },
        {
          'name': 'flex',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否为flex容器', 'en-US': 'Whether it is a flex container' },
          'demoId': 'alignment'
        },
        {
          'name': 'gutter',
          'type': 'number',
          'defaultValue': '20',
          'desc': { 'zh-CN': '子项的间隔的像素', 'en-US': 'The spacing of the child items in pixels' },
          'demoId': 'gutter'
        },
        {
          'name': 'justify',
          'type': 'string',
          'defaultValue': 'start',
          'desc': {
            'zh-CN': "子项的主轴对齐方向，可取值：'start', 'center', 'end', 'space-between', 'space-around'",
            'en-US': `Main axis alignment direction for child items; values: 'start', 'center', 'end', 'space-between', 'space-around'`
          },
          'demoId': 'alignment'
        },
        {
          'name': 'order',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "子项的排序方式，可取值：'asc', 'des'。 不设置时，保留子项在模板中的顺序。",
            'en-US': `Ordering of the child items; values: 'asc', 'des'. When not set, the order of the child items in the template is preserved.`
          },
          'demoId': 'order'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': {
            'zh-CN': '定义 Row 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Row element, which defaults to div'
          },
          'demoId': 'tag'
        }
      ],
      'col-attrs': [
        {
          'name': 'move',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '子项的右偏移量,是通过 left 属性实现偏移,建议使用 offset 代替',
            'en-US':
              'The right offset of the child item is offset via the left property; it is recommended to use offset instead'
          },
          'demoId': 'offset'
        },
        {
          'name': 'no',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '子项排序编号', 'en-US': 'Subitems are sorted by number' },
          'demoId': 'order'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '子项的向右偏移量,是通过 margin-left 属性实现偏移',
            'en-US': 'The offset to the right of the child item is achieved using the margin-left property'
          },
          'demoId': 'offset'
        },
        {
          'name': 'span',
          'type': 'number',
          'defaultValue': '12',
          'desc': { 'zh-CN': '子项占据的列数', 'en-US': 'Number of columns occupied by the child' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': 'div',
          'desc': {
            'zh-CN': '定义 Col 元素的渲染后的标签，默认为div',
            'en-US': 'Defines the rendered tag of a Col element, which defaults to div'
          },
          'demoId': 'tag'
        },
        {
          'name': 'xs/sm/md/lg/xl',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '指定列占用响应式栅格数，响应式断点的位置为：768 / 992 / 1200 / 1920',
            'en-US':
              'Specifies the number of reactive grids occupied by the column and the location of the reactive breakpoint: 768/992/1200/1920'
          },
          'demoId': 'responsive-layout'
        }
      ]
    }
  ]
}
