export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>options</code> 属性指定选项数组即可渲染出一个级联选择器。</p>\n',
        'en-US':
          '<p>Renders a cascade selector by specifying an array of options with the <code>options</code> attribute. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'expand-trigger',
      name: {
        'zh-CN': 'hover 触发子菜单',
        'en-US': 'Hover Triggering Submenu'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>props.expandTrigger</code> 可以指定展开子级菜单的触发方式为 <code>hover</code>，默认为 <code>click</code> 。</p>\n',
        'en-US':
          '<p>You can use <code>props.expandTrigger</code> to specify the triggering mode of expanding a submenu as <code>hover</code>. The default triggering mode is <code>click</code>. </p>\n'
      },
      codeFiles: ['expand-trigger.vue']
    },
    {
      demoId: 'disabled-items',
      name: {
        'zh-CN': '禁用选项',
        'en-US': 'Disable Options'
      },
      desc: {
        'zh-CN':
          '<p>\n            <div>通过在数据源<code>option</code>中设置 <code>disabled</code> 字段来声明该选项是禁用的，在默认情况下，Cascader 会检查数据中每一项的 <code>disabled</code> 字段是否为 <code>true</code>。</div>\n            <div>也可以通过直接设置 <code>disabled</code> 可以禁用组件。</div>\n          </p>',
        'en-US':
          '<p>\n            <div>Declare that the option is disabled by setting the <code>disabled</code> field in the data source; by default, Cascader checks to see if the <code>disabled</code> field is <code>true</code> for each item in the data. </div>\n            <div> Components can also be disabled by setting <code>disabled</code> directly.</div>\n          </p>'
      },
      codeFiles: ['disabled-items.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清空',
        'en-US': 'Can be cleared'
      },
      desc: {
        'zh-CN': '<p>通过 <code>clearable</code> 属性设置输入框可清空。</p>\n',
        'en-US': '<p>You can clear the text box by setting the <code>clearable</code> attribute. </p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'clearable1',
      name: {
        'zh-CN': '分隔符',
        'en-US': 'Separator'
      },
      desc: {
        'zh-CN': '<p>通过 <code>separator</code> 属性设置分隔符。</p>\n',
        'en-US': '<p>Set the separator through the <code>separator</code> attribute. </p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Dimension'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置尺寸。</p>\n',
        'en-US': '<p>Sets the size through the <code>size</code> attribute. </p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'default-multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple Choices'
      },
      desc: {
        'zh-CN': '<p>通过 <code>props.multiple = true</code> 来开启多选模式。</p>\n',
        'en-US': '<p>Use <code>props.multiple = true</code> to enable the multi-selection mode. </p>\n'
      },
      codeFiles: ['default-multiple.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter Mode'
      },
      desc: {
        'zh-CN':
          "<p>\n          <p>通过 shape='filter' 属性切换至过滤器模式。</p>\n          <p>过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮，placeholder 显示占位符，blank 背景为透明。</p>\n        </p>",
        'en-US':
          "<p>\n          <p> Use the shape='filter' attribute to switch to filter mode. </p>\n          <p> In filter mode, label can be passed to show the title, tip can show the prompt message, clearable can show the clear button, placeholder can show the placeholder, blank background can be transparent. </p>\n        </p>"
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'auto-size',
      name: {
        'zh-CN': '自适应高度',
        'en-US': 'Adaptive height'
      },
      desc: {
        'zh-CN': '<p>通过 auto-size 属性指定下拉弹框是否根据内容自适应高度。 </p>',
        'en-US':
          '<p>Use the auto-size property to specify whether the drop-down box ADAPTS to the height based on the content.</p>'
      },
      codeFiles: ['auto-size.vue']
    },
    {
      demoId: 'collapse-tags',
      name: {
        'zh-CN': '折叠展示 Tag',
        'en-US': 'Fold Tag'
      },
      desc: {
        'zh-CN':
          '<p>在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，可以使用 <code>collapse-tags</code> 来折叠 Tag 。</p>',
        'en-US':
          '<p>After the multi-selection mode is enabled, tags of all selected options are displayed by default. You can use <code>collapse-tags</code> to collapse tags. </p>'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'check-strictly',
      name: {
        'zh-CN': '父子级不相关联',
        'en-US': 'The parent and child levels are not associated.'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p>The <code>props.checkStrictly = true</code> is used to set the association between the parent and child nodes. In this way, any level of options can be selected. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      codeFiles: ['check-strictly.vue']
    },
    {
      demoId: 'check-strictly-multiple',
      name: {
        'zh-CN': '多选选择任意一级选项',
        'en-US': 'Select any level of options from multiple options.'
      },
      desc: {
        'zh-CN': '<p>在多选模式下同时取消父子节点关联，选择任意一级选项。</p>\n',
        'en-US':
          '<p>In multi-selection mode, cancel the association between parent and child nodes and select any level of options. </p>\n'
      },
      codeFiles: ['check-strictly-multiple.vue']
    },
    {
      demoId: 'auto-load',
      name: {
        'zh-CN': '动态加载',
        'en-US': 'Dynamic loading'
      },
      desc: {
        'zh-CN':
          '\n          <p>\n            <div>当选中某一级时，动态加载该级下的选项。</dvi>\n            <div>通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。</div>\n            <div><code>lazyload</code> 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调(必须调用)。</div>\n            <p>\n              <div>为了更准确的显示节点的状态，默认地（默认指没有设置<code>props.leaf</code>）可以使用<code>leaf</code>字段。</div>\n              <div>表明此节点是否为叶子节点，否则会简单地以有无子节点来判断是否为叶子节点。</div>\n            </p>\n          </p>\n        ',
        'en-US':
          '\n          <p>\n            <div> When a level is selected, dynamically loads the options under that level. </dvi>\n            <div> enables dynamic loading with <code>lazy</code> in the <code>props</code> property, and sets the method of loading the data source with <code>lazyload</code>. </div>\n            <div>The<code>lazyload</code> method takes two arguments, node for the current clicked node, and resolve for the callback (which must be called) when the data is loaded. </div>\n            <p>\n            <div> In order to more accurately display the state of the node, the <code>leaf</code> field can be used by default (the default means that <code>props.leaf</code> is not set). </div>\n            <div> indicates whether this node is a leaf, otherwise it is simply determined by the presence or absence of child nodes. </div>\n            </p>\n          </p>\n        '
      },
      codeFiles: ['auto-load.vue']
    },
    {
      demoId: 'auto-load-checkStrictly',
      name: {
        'zh-CN': '动态加载且父子级不相关联',
        'en-US': 'Dynamic loading with no parent-child association'
      },
      desc: {
        'zh-CN':
          '<p>当选中某一级时，动态加载该级下的选项。通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。通过 <code>props</code> 属性中的 <code>checkStrictly</code> 开启父子级不相关联。</p>\n',
        'en-US':
          '<p>When a level is selected, the options under the level are dynamically loaded. Use <code>lazy</code> in the <code>props</code> attribute to enable dynamic loading, and use <code>lazyload</code> to set the method for loading data sources. Use <code>checkStrictly</code> in the <code>props</code> attribute to enable parent-child disassociation. </p>\n'
      },
      codeFiles: ['auto-load-checkStrictly.vue']
    },
    {
      demoId: 'props-children',
      name: {
        'zh-CN': '指定选项',
        'en-US': 'Specify Options'
      },
      desc: {
        'zh-CN':
          "<p>\n          <div>通过 <code>props.children</code> 指定选项的子选项，默认为 'children' 。</div>\n          <div>通过 <code>props.value</code> 指定指定选项的 value 值，默认为 'value' 。</div>\n          <div>通过 <code>props.label</code> 指定选项标签,默认为 'label' 。</div>\n        <p/>",
        'en-US':
          "<p>\n          <div> specifies the suboptions of the option via <code>props.children</code>, which defaults to 'children'. </div>\n          <div> Specifies the value of the given option via <code>props.value</code>, which defaults to 'value'. </div>\n          <div> Specifies the option label via <code>props.label</code>, which defaults to 'label'. </div>\n        <p/>"
      },
      codeFiles: ['props-children.vue']
    },
    {
      demoId: 'filterable',
      name: {
        'zh-CN': '可搜索',
        'en-US': 'Searchable'
      },
      desc: {
        'zh-CN':
          '<p>\n            将 <code>filterable</code> 赋值为 <code>true</code> 即可打开搜索功能，默认会匹配节点的 <code>label</code> 或所有父节点的 <code>label</code> (由 <code>show-all-levels</code> 决定)中包含输入值的选项。</br>\n            使用<code>empty</code> 插槽设置无匹配选项时显示的内容，使用<code>debounce</code>设置搜索延迟。\n          </p>',
        'en-US':
          '<p>\n            Set <code>filterable</code> to <code>true</code> to turn on the search function, By default, the <code>label</code> of the node or the <code>label</code> of all parent nodes (as determined by <code>show-all-levels</code>) will match the option containing the input value. </br>\n            Use the <code>empty</code> slot to set what will be displayed if there is no matching option, and use <code>debounce</code> to set the search delay.\n          </p>'
      },
      codeFiles: ['filterable.vue']
    },
    {
      demoId: 'filterable-multiple',
      name: {
        'zh-CN': '多选可搜索',
        'en-US': 'Multiple choices can be searched'
      },
      desc: {
        'zh-CN': '<p>多选模式下开启搜索功能。</p>\n',
        'en-US': '<p>Enable the search function in multi-choice mode. </p>\n'
      },
      codeFiles: ['filterable-multiple.vue']
    },
    {
      demoId: 'filter-method',
      name: {
        'zh-CN': '自定义搜索逻辑',
        'en-US': 'Customized search logic'
      },
      desc: {
        'zh-CN':
          '<p><code>filter-method</code> 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中,如果需要搜索到父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p><code>filter-method</code> customizes the search logic. The first parameter is node, and the second parameter is keyword. A boolean value is returned to indicate whether the search is hit. To select a parent, set props.checkStrictly = true to deselect the parent and child nodes. In this way, the purpose of selecting any level of option is achieved. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      codeFiles: ['filter-method.vue']
    },
    {
      demoId: 'show-all-levels',
      name: {
        'zh-CN': '仅显示最后一级',
        'en-US': 'Only the last level is displayed.'
      },
      desc: {
        'zh-CN':
          '<p>属性 <code>show-all-levels</code> 定义了是否显示完整的路径，将其赋值为 <code>false</code> 则仅显示最后一级，默认为 <code>true</code> ，显示选中项所在的完整路径。</p>\n',
        'en-US':
          '<p>The <code>show-all-levels</code> attribute defines whether to display the complete path. If it is set to <code>false</code>, only the last level is displayed. The default value is <code>true</code>, indicating that the full path of the selected item is displayed. </p>\n'
      },
      codeFiles: ['show-all-levels.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p>\n            Cascader 级联选择器的事件有：<code>change</code>、<code>expand-change</code>、<code>blur</code>、<code>focus</code>、<code>visible-change</code>。\n            <div>使用 <code>props.emitPath</code> 能设置节点的返回类型。</div>\n          </p>',
        'en-US':
          '<p>\n            Cascader cascade selector events include: <code>change</code>, <code>expand-change</code>, <code>blur</code>, <code>focus</code>, < code>visible-change</code>. \n            Use <code>props.emitPath</code> to set the return type of the node.\n          </p>'
      },
      codeFiles: ['events.vue']
    }
  ]
}
