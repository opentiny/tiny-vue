export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>options</code> 属性指定选项数组即可渲染出一个级联选择器。</p>\n',
        'en-US':
          '<p>Renders a cascade selector by specifying an array of options with the <code>options</code> attribute. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'expand-trigger',
      'name': { 'zh-CN': 'hover 触发子菜单', 'en-US': 'Hover Triggering Submenu' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>props.expandTrigger</code> 可以指定展开子级菜单的触发方式为 <code>hover</code>，默认为 <code>click</code> 。</p>\n',
        'en-US':
          '<p>You can use <code>props.expandTrigger</code> to specify the triggering mode of expanding a submenu as <code>hover</code>. The default triggering mode is <code>click</code>. </p>\n'
      },
      'codeFiles': ['expand-trigger.vue']
    },
    {
      'demoId': 'disabled-items',
      'name': { 'zh-CN': '禁用选项', 'en-US': 'Disable Options' },
      'desc': {
        'zh-CN':
          '<p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的，本例中，<code>options</code> 指定的数组中的第一个元素含有 <code>disabled: true</code> 键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 <code>disabled</code> 字段是否为 <code>true</code>，如果你的数据中表示禁用含义的字段名不为 <code>disabled</code>，可以通过 <code>props.disabled</code> 属性来指定（详见 Cascader Props 的 API 表格）。当然，<code>value</code>、<code>label</code> 和 <code>children</code> 这三个字段名也可以通过同样的方式指定。</p>\n',
        'en-US':
          '<p>declares that this option is disabled by setting the <code>disabled</code> field in the data source, in this case, The first element in the array specified by <code>options</code> contains a <code>disabled: true</code> key-value pair and is therefore disabled. By default, Cascader checks whether the <code>disabled</code> field of each item in the data is <code>true</code>. If the name of the field that indicates the disabled meaning in your data is not <code>disabled</code>, you can use the <code>props.disabled</code> property to specify it. For details, see the API table of Cascader Props. Certainly, <code>value</code>, <code>label</code>, and <code>children</code> may also be specified in the same way. </p>\n'
      },
      'codeFiles': ['disabled-items.vue']
    },
    {
      'demoId': 'disabled-items1',
      'name': { 'zh-CN': '指定属性值', 'en-US': 'Specify Attribute Value' },
      'desc': {
        'zh-CN': '<p>通过 <code>props</code> 属性设置属性值映射。</p>\n',
        'en-US': '<p>Sets the attribute value mapping through the <code>props</code> attribute. </p>\n'
      },
      'codeFiles': ['disabled-items.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清空', 'en-US': 'Can be cleared' },
      'desc': {
        'zh-CN': '<p>通过 <code>clearable</code> 属性设置输入框可清空。</p>\n',
        'en-US': '<p>You can clear the text box by setting the <code>clearable</code> attribute. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'clearable1',
      'name': { 'zh-CN': '分隔符', 'en-US': 'Separator' },
      'desc': {
        'zh-CN': '<p>通过 <code>separator</code> 属性设置分隔符。</p>\n',
        'en-US': '<p>Set the separator through the <code>separator</code> attribute. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'clearable2',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性设置尺寸。</p>\n',
        'en-US': '<p>Sets the size through the <code>size</code> attribute. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'default-multiple',
      'name': { 'zh-CN': '多选', 'en-US': 'Multiple Choices' },
      'desc': {
        'zh-CN': '<p>通过 <code>props.multiple = true</code> 来开启多选模式。</p>\n',
        'en-US': '<p>Use <code>props.multiple = true</code> to enable the multi-selection mode. </p>\n'
      },
      'codeFiles': ['default-multiple.vue']
    },
    {
      'demoId': 'collapse-tags',
      'name': { 'zh-CN': '折叠展示 Tag', 'en-US': 'Fold Tag' },
      'desc': {
        'zh-CN':
          '<p>在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，可以使用 <code>collapse-tags</code> 来折叠 Tag 。\n通过 <code>disabled</code> 设置组件是否禁用，默认值为 false 。</p>\n',
        'en-US':
          '<p>After the multi-selection mode is enabled, tags of all selected options are displayed by default. You can use <code>collapse-tags</code> to collapse tags. \n Use <code>disabled</code> to set whether to disable the component. The default value is false. </p>\n'
      },
      'codeFiles': ['collapse-tags.vue']
    },
    {
      'demoId': 'check-strictly',
      'name': { 'zh-CN': '父子级不相关联', 'en-US': 'The parent and child levels are not associated.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p>The <code>props.checkStrictly = true</code> is used to set the association between the parent and child nodes. In this way, any level of options can be selected. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      'codeFiles': ['check-strictly.vue']
    },
    {
      'demoId': 'check-strictly-multiple',
      'name': { 'zh-CN': '多选选择任意一级选项', 'en-US': 'Select any level of options from multiple options.' },
      'desc': {
        'zh-CN': '<p>在多选模式下同时取消父子节点关联，选择任意一级选项。</p>\n',
        'en-US':
          '<p>In multi-selection mode, cancel the association between parent and child nodes and select any level of options. </p>\n'
      },
      'codeFiles': ['check-strictly-multiple.vue']
    },
    {
      'demoId': 'auto-load',
      'name': { 'zh-CN': '动态加载', 'en-US': 'Dynamic loading' },
      'desc': {
        'zh-CN':
          '<p>当选中某一级时，动态加载该级下的选项。通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。<code>lazyload</code> 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为 leaf，可通过 props.leaf 修改)，否则会简单的以有无子节点来判断是否为叶子节点。</p>\n',
        'en-US':
          '<p>When a level is selected, the options under the level are dynamically loaded. Use <code>lazy</code> in the <code>props</code> attribute to enable dynamic loading, and use <code>lazyload</code> to set the method for loading data sources. The <code>lazyload</code> method has two parameters. The first parameter node is the node that is clicked currently, and the second parameter resolve is the callback for data loading completion (mandatory). To display the status of a node more accurately, a flag bit indicating whether the node is a leaf node may be added to the node data. (The default field is leaf, which can be modified using props.leaf.) Otherwise, the system determines whether a node is a leaf node based on whether there are subnodes. </p>\n'
      },
      'codeFiles': ['auto-load.vue']
    },
    {
      'demoId': 'auto-load-checkStrictly',
      'name': { 'zh-CN': '动态加载且父子级不相关联', 'en-US': 'Dynamic loading with no parent-child association' },
      'desc': {
        'zh-CN':
          '<p>当选中某一级时，动态加载该级下的选项。通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。通过 <code>props</code> 属性中的 <code>checkStrictly</code> 开启父子级不相关联。</p>\n',
        'en-US':
          '<p>When a level is selected, the options under the level are dynamically loaded. Use <code>lazy</code> in the <code>props</code> attribute to enable dynamic loading, and use <code>lazyload</code> to set the method for loading data sources. Use <code>checkStrictly</code> in the <code>props</code> attribute to enable parent-child disassociation. </p>\n'
      },
      'codeFiles': ['auto-load-checkStrictly.vue']
    },
    {
      'demoId': 'props-children',
      'name': { 'zh-CN': '指定选项', 'en-US': 'Specify Options' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">Props</p>\n<p>通过 <code>children</code> 指定选项的子选项，默认为 children 。\n通过 <code>value</code> 指定指定选项的 value 值，默认为 value 。\n通过 <code>label</code> 指定选项标签,默认为 label 。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">Props</p>\n<p> uses <code>children</code> to specify the sub-option of the option. The default value is children. \n Use <code>value</code> to specify the value of a specified option. The default value is value. \nUse <code>label</code> to specify the option label. The default value is label. </p>\n</div>\n'
      },
      'codeFiles': ['props-children.vue']
    },
    {
      'demoId': 'filterable',
      'name': { 'zh-CN': '可搜索', 'en-US': 'Searchable' },
      'desc': {
        'zh-CN':
          '<p>将 <code>filterable</code> 赋值为 <code>true</code> 即可打开搜索功能，默认会匹配节点的 <code>label</code> 或所有父节点的 <code>label</code> (由 <code>show-all-levels</code> 决定)中包含输入值的选项。 <code>empty</code> 无匹配选项时显示的内容</p>\n',
        'en-US':
          '<p>Set <code>filterable</code> to <code>true</code> to enable the search function. By default, the <code>label</code> of the node or the options containing the input value in <code>label</code> of all parent nodes (determined by <code>show-all-levels</code>). <code>empty</code>Content displayed when no matching option</p>\n'
      },
      'codeFiles': ['filterable.vue']
    },
    {
      'demoId': 'filterable2',
      'name': { 'zh-CN': '搜索延时', 'en-US': 'Search Delay' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['filterable.vue']
    },
    {
      'demoId': 'filterable-multiple',
      'name': { 'zh-CN': '多选可搜索', 'en-US': 'Multiple choices can be searched' },
      'desc': {
        'zh-CN': '<p>多选模式下开启搜索功能。</p>\n',
        'en-US': '<p>Enable the search function in multi-choice mode. </p>\n'
      },
      'codeFiles': ['filterable-multiple.vue']
    },
    {
      'demoId': 'filter-method',
      'name': { 'zh-CN': '自定义搜索逻辑', 'en-US': 'Customized search logic' },
      'desc': {
        'zh-CN':
          '<p><code>filter-method</code> 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中,如果需要选择父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p><code>filter-method</code> customizes the search logic. The first parameter is node, and the second parameter is keyword. A Boolean value is returned to indicate whether the search is hit. To select a parent, set props.checkStrictly = true to deselect the parent and child nodes. In this way, the purpose of selecting any level of option is achieved. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      'codeFiles': ['filter-method.vue']
    },
    {
      'demoId': 'filterable-multiple1',
      'name': { 'zh-CN': '占位文本', 'en-US': 'Placeholder Text' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['filterable-multiple.vue']
    },
    {
      'demoId': 'show-all-levels',
      'name': { 'zh-CN': '仅显示最后一级', 'en-US': 'Only the last level is displayed.' },
      'desc': {
        'zh-CN':
          '<p>属性 <code>show-all-levels</code> 定义了是否显示完整的路径，将其赋值为 <code>false</code> 则仅显示最后一级，默认为 <code>true</code> ，显示选中项所在的完整路径。</p>\n',
        'en-US':
          '<p>The <code>show-all-levels</code> attribute defines whether to display the complete path. If it is set to <code>false</code>, only the last level is displayed. The default value is <code>true</code>, indicating that the full path of the selected item is displayed. </p>\n'
      },
      'codeFiles': ['show-all-levels.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p>Cascader 级联选择器的事件有：<code>change</code>、<code>expand-change</code>、<code>blur</code>、<code>focus</code>、<code>visible-change</code>。</p>\n',
        'en-US':
          '<p>Cascader cascade selector events include: <code>change</code>, <code>expand-change</code>, <code>blur</code>, <code>focus</code>, < code>visible-change</code>. </p>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'events1',
      'name': { 'zh-CN': '节点返回的数据类型', 'en-US': 'Data type returned by a node' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['events.vue']
    }
  ],
  apis: [
    {
      'name': 'cascader',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中项绑定值', 'en-US': 'Bound value of the selected item' },
          'demoId': 'clearable'
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选项数据源，键名可通过 Props 属性配置',
            'en-US': 'Optional data source. The key name can be configured through the Props attribute.'
          },
          'demoId': 'disabled-items'
        },
        {
          'name': 'props',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置选项，具体见 Cascader Props 表',
            'en-US': 'Configuration options. For details, see the Cascader Props table.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '尺寸;该属性的可选值为 medium / small / mini',
            'en-US': 'Dimension; The optional values of this attribute are medium / small / mini'
          },
          'demoId': 'clearable2'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '请选择',
          'desc': { 'zh-CN': '输入框占位文本', 'en-US': 'Placeholder text in the text box' },
          'demoId': 'filterable-multiple1'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'disabled-items'
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否支持清空选项', 'en-US': 'Whether to support the clear option' },
          'demoId': 'clearable'
        },
        {
          'name': 'show-all-levels',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '输入框中是否显示选中值的完整路径',
            'en-US': 'Whether to display the full path of the selected value in the text box'
          },
          'demoId': 'show-all-levels'
        },
        {
          'name': 'collapse-tags',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '多选模式下是否折叠Tag', 'en-US': 'Whether to collapse tags in multi-choice mode' },
          'demoId': 'collapse-tags'
        },
        {
          'name': 'separator',
          'type': 'String',
          'defaultValue': '/',
          'desc': { 'zh-CN': '选项分隔符', 'en-US': 'Option separator' },
          'demoId': 'clearable1'
        },
        {
          'name': 'filterable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否可搜索选项', 'en-US': 'Whether to search for options' },
          'demoId': 'filterable'
        },
        {
          'name': 'filter-method',
          'type': 'Function(node, keyword)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中',
            'en-US':
              'Customize the search logic. The first parameter is node, and the second parameter is keyword. A Boolean value is returned to indicate whether the search is hit.'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'debounce',
          'type': 'Number',
          'defaultValue': '300',
          'desc': {
            'zh-CN': '搜索关键词输入的去抖延迟，单位毫秒',
            'en-US': 'Dejitter delay of the search keyword, in milliseconds.'
          },
          'demoId': 'filterable'
        },
        {
          'name': 'before-filter',
          'type': 'Function(value)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
            'en-US':
              'Hook before filtering. The parameter is the input value. If false is returned or Promise is returned and rejected, the filtering stops.'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义浮层类名', 'en-US': 'Customized floating layer class name' },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中节点变化时触发;arg:回调参数为 选中节点的值(Array类型)',
            'en-US':
              'This event is triggered when the selected node changes. arg: The callback parameter is the value of the selected node (array type).'
          },
          'demoId': 'events'
        },
        {
          'name': 'expand-change',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当展开节点发生变化时触发;arg:回调参数为 各父级选项值组成的数组(Array类型)',
            'en-US':
              'This event is triggered when the expanded node changes. arg: The callback parameter is an array (Array type) consisting of parent option values.'
          },
          'demoId': 'events'
        },
        {
          'name': 'blur',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当失去焦点时触发;arg:回调参数为 (event: Event, 类型:Object)',
            'en-US':
              'This event is triggered when the focus is lost. arg: The callback parameter is (event: Event, type: Object).'
          },
          'demoId': 'events'
        },
        {
          'name': 'focus',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当获得焦点时触发;arg:回调参数为 (event: Event, 类型:Object)',
            'en-US':
              'This event is triggered when the focus is obtained. arg: The callback parameter is (event: Event, type: Object).'
          },
          'demoId': 'events'
        },
        {
          'name': 'visible-change',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉框出现/隐藏时触发;arg:回调参数为 出现则为 true，隐藏则为 false(布尔类型)',
            'en-US':
              'This event is triggered when the drop-down list box is displayed or hidden. arg: true if the callback parameter is present; false if the callback parameter is hidden (Boolean)'
          },
          'demoId': 'events'
        },
        {
          'name': 'remove-tag',
          'type': 'Fuction(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在多选模式下，移除Tag时触发;arg:回调参数为 移除的Tag对应的节点的值(Array类型)',
            'en-US':
              'In multi-choice mode, this event is triggered when a tag is removed. arg: The callback parameter is the value of the node corresponding to the removed tag (array type).'
          },
          'demoId': 'default-multiple'
        }
      ],
      'slots': [
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '无匹配选项时的内容', 'en-US': 'Content when no matching option is found' },
          'demoId': 'filterable'
        }
      ],
      'methods': [
        {
          'name': 'getCheckedNodes',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取选中的节点;参数为 (leafOnly) 是否只是获取子节点，默认值为 false',
            'en-US':
              'Obtain the selected node. The parameter (leafOnly) indicates whether to obtain only subnodes.  The default value is false'
          },
          'demoId': 'events'
        }
      ],
      'casprops': [
        {
          'name': 'expandTrigger',
          'type': 'String',
          'defaultValue': 'click',
          'desc': {
            'zh-CN': '次级菜单的展开方式;该属性的可选值为 click / hover',
            'en-US': 'The expansion mode of the secondary menu; The optional values of this attribute are click / hover'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'multiple',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否多选', 'en-US': 'Whether to select multiple options' },
          'demoId': 'default-multiple'
        },
        {
          'name': 'checkStrictly',
          'type': 'Boolean',
          'defaultValue': ' false',
          'desc': {
            'zh-CN': '是否严格的遵守父子节点不互相关联',
            'en-US':
              'Whether to strictly comply with the principle that parent and child nodes are not associated with each other'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'emitPath',
          'type': 'Boolean',
          'defaultValue': ' true',
          'desc': {
            'zh-CN':
              '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            'en-US':
              'Indicates whether to return an array consisting of the values of menus at different levels of the selected node when the selected node is changed. If this parameter is set to false, only the value of the selected node is returned.'
          },
          'demoId': 'events'
        },
        {
          'name': 'lazy',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否动态加载子节点，需与 lazyLoad 方法结合使用',
            'en-US':
              'Whether to dynamically load subnodes. This parameter must be used together with the lazyLoad method.'
          },
          'demoId': 'auto-load'
        },
        {
          'name': 'lazyLoad',
          'type': 'Function(node, resolve)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '加载动态数据的方法，仅在 lazy 为 true 时有效;参数说明： node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
            'en-US':
              'Method for loading dynamic data. This parameter is valid only when lazy is set to true. Parameter description: node indicates the currently clicked node. resolve indicates the callback after data loading is complete (mandatory).'
          },
          'demoId': 'auto-load'
        },
        {
          'name': 'value',
          'type': 'String',
          'defaultValue': "'value'",
          'desc': {
            'zh-CN': '指定选项的值为选项对象的某个属性值',
            'en-US': 'The value of an option is the value of an attribute of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': "'label'",
          'desc': {
            'zh-CN': '指定选项标签为选项对象的某个属性值',
            'en-US': 'Specify that the option label is an attribute value of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'children',
          'type': 'String',
          'defaultValue': "'children'",
          'desc': {
            'zh-CN': '指定选项的子选项为选项对象的某个属性值',
            'en-US': 'Specifies that the sub-option of an option is an attribute value of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'disabled',
          'type': 'String',
          'defaultValue': "'disabled'",
          'desc': {
            'zh-CN': '指定选项的禁用为选项对象的某个属性值',
            'en-US': 'Specify that an option is disabled as an attribute value of the option object.'
          },
          'demoId': 'disabled-items'
        },
        {
          'name': 'leaf',
          'type': 'String',
          'defaultValue': "'leaf'",
          'desc': {
            'zh-CN': '指定选项的叶子节点的标志位为选项对象的某个属性值',
            'en-US': 'The flag bit of the leaf node of the specified option is an attribute value of the option object.'
          },
          'demoId': 'check-strictly'
        }
      ]
    }
  ]
}
