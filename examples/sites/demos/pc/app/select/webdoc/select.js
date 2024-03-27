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
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置被选中的 <code>tiny-option</code> 的 <code>value</code> 属性值。</p>\n',
        'en-US':
          '<p>Set the <code>value</code> attribute value of the selected <code>tiny-option</code> by <code>v-model</code>.</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组。默认选中值会以标签（Tag 组件）展示。</p>\n<p>通过 <code>multiple-limit</code> 属性限制最多可选择的个数，默认为 0 不限制。</p>\n<p>多选时，通过给 option 标签配置 <code>required</code> 或者在 options 配置项中添加 <code>required</code> 属性，来设置必选选项。</p>\n<p>通过 <code>dropdown-icon</code> 属性可自定义下拉图标，<code>drop-style</code> 属性可自定义下拉选项样式。<p>',
        'en-US':
          '<p>Enable the multi-selection function through the <code>multiple</code> attribute, where the value of the <code>v-model</code> is an array composed of the currently selected values. The default selected value will be displayed as a tag component. </p>\n<p>Limit the maximum number of choices through the <code>multiple-limit</code> attribute, with a default value of 0 and no limit.</p>\n<p>If you select multiple options, you can configure the <code>required</code> attribute for the option tag or add the <code>required</code> attribute to the options configuration item to set the mandatory options. </p><p>You can use the <code>dropdown-icon</code> attribute to customize the drop-down icon, and the <code>drop-style</code> attribute to customize the drop-down option style.<p>'
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'collapse-tags',
      name: {
        'zh-CN': '折叠标签',
        'en-US': 'Collapse tags'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>collapse-tags</code> 属性设置选中多个选项时，多个标签缩略展示。多选时通过设置 <code>hover-expand</code> 为 <code>true</code> ，默认折叠标签, hover 时展示所有标签。标签内容超长时超出省略，hover 标签时展示 tooltip。</p>\n',
        'en-US':
          '<p>When multiple options are selected through the <code>collapse-tags</code> attribute settings, multiple tags will be abbreviated and displayed.</p>\n'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'multiple-mix',
      name: {
        'zh-CN': '仅显示',
        'en-US': 'Display only'
      },
      desc: {
        'zh-CN':
          '<p>Form 表单内 Select 组件不同尺寸设置 <code>hover-expand</code> 和 <code>display-only</code> 属性的综合应用。</p>\n',
        'en-US':
          '<p>Comprehensive application of the <code>hover-expand</code> and <code>display-only</code> attributes of the Select component in the form. </p>\n'
      },
      codeFiles: ['multiple-mix.vue']
    },
    {
      demoId: 'tag-type',
      name: {
        'zh-CN': '标签类型',
        'en-US': 'Tag type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tag-type</code> 属性设置标签类型，同 Tag 组件的 type 属性。可选值：success / info / warning / danger 。</p>\n',
        'en-US':
          '<p>Set the label type through the <code>tag-type</code> attribute, which is the same as the type attribute of the Tag component. Optional values: success/info/warning/danger.</p>\n'
      },
      codeFiles: ['tag-type.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置输入框尺寸，可选值：medium / small / mini 。</p>',
        'en-US':
          '<p>Set the input box size through the <code>size</code> attribute, with optional values of medium / small / mini.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置下拉或者下拉项的禁用状态。</p>\n',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清除',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '<p>通过 <code>clearable</code> 属性启用一键清除选中值的功能。仅适用于单选。</p>\n',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'filter-method',
      name: {
        'zh-CN': '可搜索',
        'en-US': 'Filterable'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filterable</code> 属性启用搜索功能。<code>filter-method</code> 自定义过滤方法。 <code>no-match-text</code> 属性自定义与搜索条件无匹配项时显示的文字。</p>\n',
        'en-US':
          '<p>Enable search functionality through the <code>filterable</code> attribute <code>filter-method</code> customize the filtering method <code>no-match-text</code> the text displayed when there is no match between attribute customization and search criteria.</p>\n'
      },
      codeFiles: ['filter-method.vue']
    },
    {
      demoId: 'remote-method',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'Remote search'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filterable</code> 和 <code>remote</code> 和 <code>remote-method</code> 这三个属性同时使用设置远程搜索。通过 <code>reserve-keyword</code> 属性设置多选可搜索时，可以在选中一个选项后保留当前的搜索关键词。</p>\n<p>通过 <code>trim</code> 属性去除双向数据绑定值空格。</p>',
        'en-US':
          '<p>Set remote search through the use of three attributes:<code>filterable</code>,<code>remote</code>, and <code>remote-method</code>. When setting multiple searchable options through the <code>reserve-keyword</code> attribute, the current search keyword can be retained after selecting an option.</p>\n<p> Removes spaces from bidirectional data binding values through the <code>trim</code> attribute. </p>'
      },
      codeFiles: ['remote-method.vue']
    },
    {
      demoId: 'searchable',
      name: {
        'zh-CN': '下拉面板可搜索',
        'en-US': 'Panel search'
      },
      desc: {
        'zh-CN': '<p>通过 <code>searchable</code> 属性设置下拉面板显示搜索框，默认不显示。</p>\n',
        'en-US':
          '<p>The search box is displayed through the <code>searchable</code> attribute setting drop-down panel, which is not displayed by default. </p>\n'
      },
      codeFiles: ['searchable.vue']
    },
    {
      demoId: 'allow-create',
      name: {
        'zh-CN': '创建条目',
        'en-US': 'Create Entry'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>allow-create</code> 和 <code>filterable</code> 属性，设置当搜索字段不在已有选项中时，可创建为新的条目。结合 <code>default-first-option</code> 属性，可以按 Enter 键选中第一个匹配项。</p>\n<p>设置 <code>top-create</code> 属性后，Select 下拉框中会显示新增按钮，点击按钮会抛出一个 <code>top-create-click</code> 事件，可以在事件中自定义一些行为。</p>',
        'en-US':
          '<p>By using the <code>allow-create</code> and <code>filterable</code> attributes, the search field can be created as a new entry when it is not in an existing option. By combining the <code>default-first-option</code> attribute, you can press the Enter key to select the first matching option.</p>\n'
      },
      codeFiles: ['allow-create.vue']
    },
    {
      demoId: 'map-field',
      name: {
        'zh-CN': '映射字段',
        'en-US': 'Map Fields'
      },
      desc: {
        'zh-CN': '通过 <code>text-field</code> 设置显示文本字段，<code>value-field</code>设置绑定值字段。',
        'en-US':
          '<p>Set the display text field by <code>text-field</code>, and set the binding value field by <code>value-field</code>. </p>\n'
      },
      codeFiles: ['map-field.vue']
    },
    {
      demoId: 'popup-style-position',
      name: {
        'zh-CN': '弹框样式与定位',
        'en-US': 'Bullet Box Style and Positioning'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-class</code> 属性设置下拉弹框的类名，可自定义样式。<code>placement</code>设置弹出位置。<code>popper-append-to-body</code> 设置是否将弹框 dom 元素插入至 body 元素，默认为 true。</p>\n',
        'en-US':
          '<p>You can customize the style by setting the class name of the dropdown pop-up box through the <code>popper-class</code> attribute <code>placement</code> set the pop-up position <code>popper-append-to-body</code> set whether to insert the pop-up dom element into the body element, default to true. </p>\n'
      },
      codeFiles: ['popup-style-position.vue']
    },
    {
      demoId: 'input-box-type',
      name: {
        'zh-CN': '输入框类型',
        'en-US': 'Input box type'
      },
      desc: {
        'zh-CN': '<p>通过 <code>input-box-type</code> 属性设置输入框类型。可选值：input / underline。</p>\n',
        'en-US':
          'The <p>Set the input box type through the <code>input-box-type</code> attribute. Optional values: input / underline. </p>\n'
      },
      codeFiles: ['input-box-type.vue']
    },
    {
      demoId: 'show-alloption',
      name: {
        'zh-CN': '不展示全选',
        'en-US': 'Hide Select All'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-alloption</code> 属性设置多选时不展示 <code>全选</code> 选项，默认展示 。</p>\n',
        'en-US':
          '<p>By setting the <code>show-allocation</code> attribute, do not display the <code>select all</code> option when multiple selections are made, and display by default.</p>\n'
      },
      codeFiles: ['show-alloption.vue']
    },
    {
      demoId: 'clear-no-match-value',
      name: {
        'zh-CN': '自动清除不匹配的值',
        'en-US': 'Clear mismatch value'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>clear-no-match-value</code> 属性设置 v-model 的值在 options 中无法找到匹配项的值会被自动清除，默认不清除。 </p>\n',
        'en-US':
          '<p>By setting the value of the v-model through the <code>clear-no-match-value</code>attribute, if a matching value cannot be found in the options, it will be automatically cleared and will not be cleared by default.</p>\n'
      },
      codeFiles: ['clear-no-match-value.vue']
    },
    {
      demoId: 'optimization',
      name: {
        'zh-CN': '虚拟滚动',
        'en-US': 'Virtual scrolling'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>optimization</code> 开启大数据虚拟滚动功能。仅配置式（使用 options 属性）时支持。\n多选模式下，最大选中项数 <code>multiple-limit</code> 默认值为 20，如果选中项比较多，建议开启 <code>collapse-tags</code> 进行折叠显示。</p>\n',
        'en-US':
          '<p>Enable the big data virtual scrolling function through <code>optimization</code>. Supported only when configuring (using the options attribute). In n multiple selection mode, the maximum number of selected items is <code>multiple-limit</code> with a default value of 20. If there are many selected items, it is recommended to turn on <code>collapse-tags</code> for collapsed display. </p>\n'
      },
      codeFiles: ['optimization.vue']
    },
    {
      demoId: 'option-group',
      name: {
        'zh-CN': '分组',
        'en-US': 'Group'
      },
      desc: {
        'zh-CN':
          '<p>使用 <code>tiny-option-group</code> 组件对备选项进行分组。通过 <code>label</code> 属性设置分组名，<code>disabled</code> 属性设置该分组下所有选项为禁用。</p>\n',
        'en-US':
          '<p>Use the <code>tiny-option-group</code> component to group alternative options. Set the group name through the <code>label</code> attribute, and set all options under the group to disabled through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['option-group.vue']
    },
    {
      demoId: 'copy-single',
      name: {
        'zh-CN': '单选可复制',
        'en-US': 'Single choice replicable'
      },
      desc: {
        'zh-CN': '<p>通过 <code>allow-copy</code> 属性设置单选可搜索时，鼠标可滑动选中并复制输入框的内容。</p>\n',
        'en-US':
          '<p>When setting radio searchable through the <code>allow-copy</code> attribute, the mouse can slide to select and copy the content of the input box. </p>\n'
      },
      codeFiles: ['copy-single.vue']
    },
    {
      demoId: 'copy-multi',
      name: {
        'zh-CN': '多选可复制',
        'en-US': 'Multiple choices can be copied'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tag-selectable</code> 属性设置输入框中标签可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。<code>copyable</code> 属性设置启用一键复制所有标签的文本内容并以逗号分隔。</p>\n',
        'en-US':
          '<p>By setting the <code>tag-selectable</code> attribute in the input box, the label can be selected with the mouse, and then copied by pressing Ctrl+C or right-click <code>copyable</code> attribute settings enable one click copying of all label text content separated by commas.</p>\n'
      },
      codeFiles: ['copy-multi.vue']
    },
    {
      demoId: 'native-properties',
      name: {
        'zh-CN': '原生属性',
        'en-US': 'Native properties'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> 属性设置下拉组件内置 Input 的原生属性。</p>\n',
        'en-US':
          '<p>Set the native properties of the built-in Input in the dropdown component through the <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> attribute settings.</p>\n'
      },
      codeFiles: ['native-properties.vue']
    },
    {
      demoId: 'binding-obj',
      name: {
        'zh-CN': '绑定值为对象',
        'en-US': 'Bind value as object'
      },
      desc: {
        'zh-CN': '<p>通过 <code>value-key</code> 属性设置 value 唯一标识的键名，绑定值可以设置为对象。</p>\n',
        'en-US':
          '<p>By using the <code>value-key</code> attribute to set the key name uniquely identified by value, the binding value can be set as an object. </p>\n'
      },
      codeFiles: ['binding-obj.vue']
    },
    {
      demoId: 'no-data-text',
      name: {
        'zh-CN': '空数据文本',
        'en-US': 'Empty data text'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>no-data-text</code> 属性设置选项为空时显示的文本，<code>show-empty-image</code> 属性设置是否显示空数据图片，默认不显示。</p>\n',
        'en-US':
          '<p>By setting the<code>no-data-text</code> attribute to display text when the option is empty, and by setting the <code>show-empty-image</code> attribute to display empty data images, it is not displayed by default.</p>\n'
      },
      codeFiles: ['no-data-text.vue']
    },
    {
      demoId: 'manual-focus-blur',
      name: {
        'zh-CN': '手动聚焦失焦',
        'en-US': 'Manual focusing out of focus'
      },
      desc: {
        'zh-CN': '<p>通过 <code>focus()</code> 方法聚焦，<code>blur()</code>方法失焦。</p>\n',
        'en-US':
          '<p>Focusing is achieved through the <code>focus()</code> method, while the <code>blur()</code> method is out of focus. </p>\n'
      },
      codeFiles: ['manual-focus-blur.vue']
    },
    {
      demoId: 'automatic-dropdown',
      name: {
        'zh-CN': '获焦即弹出',
        'en-US': 'Eject upon capture of focus'
      },
      desc: {
        'zh-CN': '<p>通过 <code>automatic-dropdown</code> 设置不可搜索的 select 获得焦点并自动弹出选项菜单。</p>\n',
        'en-US':
          '<p>Set non searchable select to obtain focus and automatically pop up an option menu through <code>automatic-dropdown</code>. </p>\n'
      },
      codeFiles: ['automatic-dropdown.vue']
    },
    {
      demoId: 'is-drop-inherit-width',
      name: {
        'zh-CN': '继承宽度',
        'en-US': 'Inherit width'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>is-drop-inherit-width</code> 属性设置下拉弹框的宽度是否跟输入框保持一致。默认超出输入框宽度时由内容撑开。</p>\n',
        'en-US':
          '<p>Set whether the width of the dropdown pop-up box is consistent with the input box through the <code>is-drop-inherit-width</code> attribute. By default, when the width of the input box is exceeded, it is supported by the content. </p>\n'
      },
      codeFiles: ['is-drop-inherit-width.vue']
    },
    {
      demoId: 'hide-drop',
      name: {
        'zh-CN': '隐藏下拉',
        'en-US': 'Hide drop'
      },
      desc: {
        'zh-CN': '<p>通过 <code>hide-drop</code> 属性设置下拉列表不显示。</p>\n',
        'en-US': '<p>Set the drop-down list to not display through the <code>hide-drop</code> attribute.</p>'
      },
      codeFiles: ['hide-drop.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>shape</code> 属性设置为 <code>filter</code> 切换至过滤器模式。 过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮，placeholder 显示占位符。</p>\n<p>通过 <code>blank</code> 属性将过滤器背景设置为透明。</p>',
        'en-US':
          '<p>Set the <code>shape</code> attribute to <code>filter</code> to switch to filter mode. In filter mode, you can transfer the label display title, tip display prompt information, clearable whether to display the clear button, and placeholder display placeholder.</p>\n<p>Set the filter background to transparent with the <code>blank</code> attribute.</p>'
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'cache-usage',
      name: {
        'zh-CN': '自动缓存',
        'en-US': 'Automatic caching'
      },
      desc: {
        'zh-CN': '<p>通过 <code>cache-op</code> 开启缓存功能，仅配置式生效。</p>\n',
        'en-US': '<p>Enable cache function through <code>cache-op</code>, only configuration mode takes effect</p>'
      },
      codeFiles: ['cache-usage.vue']
    },
    {
      demoId: 'memoize-usage',
      name: {
        'zh-CN': '手动缓存',
        'en-US': 'Manual caching'
      },
      desc: {
        'zh-CN': '<p>使用 tiny-option 组件，则需要手动加入缓存功能。</p>\n',
        'en-US': '<p>If using the tiny-option component, you need to manually add caching functionality.<p>'
      },
      codeFiles: ['memoize-usage.vue']
    },
    {
      demoId: 'nest-tree',
      name: {
        'zh-CN': '下拉树',
        'en-US': 'Select Tree'
      },
      desc: {
        'zh-CN': '<p>通过 <code>render-type</code> 设置渲染为树类型，<code>tree-op</code> 设置树组件配置。</p>',
        'en-US':
          '<p>Set the rendering to tree type through <code>render-type</code>, and set the tree component configuration through <code>tree-op</code>. </p>\n'
      },
      codeFiles: ['nest-tree.vue']
    },
    {
      demoId: 'nest-grid',
      name: {
        'zh-CN': '下拉表格',
        'en-US': 'Select Table'
      },
      desc: {
        'zh-CN': '<p>通过 <code>render-type</code> 设置渲染为表格类型，<code>grid-op</code>设置表格配置。</p>',
        'en-US':
          '<p>Set the rendering to a table type through <code>render-type</code>, and set the table configuration through <code>grid-op</code></p>\n'
      },
      codeFiles: ['nest-grid.vue']
    },
    {
      demoId: 'nest-grid-disable',
      name: {
        'zh-CN': '下拉表格禁用选项',
        'en-US': 'Select Table Disable Options'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>select-config</code> （多选）或 <code>radio-config</code> （单选）属性的 <code>checkMethod</code> 自定义禁用逻辑，返回 true (启用) / false (禁用)。配置 {trigger: "row"} 可以设置点击行选中数据。</p>\n',
        'en-US':
          "<p>By customizing the disable logic through the <code>select-config</code> (multiple selection) or <code>radio-config</code> (single selection) attribute's <code>checkMethod</code>, return true (Enable) / false (disable).Configure {trigger: 'row'} to set the selected data in the click row.</p>"
      },
      codeFiles: ['nest-grid-disable.vue']
    },
    {
      demoId: 'nest-grid-remote',
      name: {
        'zh-CN': '下拉表格远程搜索',
        'en-US': 'Select table Remote Search'
      },
      desc: {
        'zh-CN': `<p>同时使用 <code>remote</code> 和 <code>remote-method</code> 和 <code>filterable</code> 3个属性开启远程搜索。通过 <code>remote-config</code> 设置自动搜索和显示展开按钮。</p>
          <p>在多选模式下，可通过 <code>reserve-keyword</code>设置选中一个选项后依然保留搜索关键字。</p>`,
        'en-US': `<p>Enable remote search through <code>remote</code>,<code>remote-method</code>, and <code>filterable</code>. Set up automatic search and display expansion buttons through <code>remote-config</code>.</p>
          <p>In multiple selection mode, <code>reserve-keyword</code> set to retain search keywords after selecting multiple options.</p>`
      },
      codeFiles: ['nest-grid-remote.vue']
    },
    {
      demoId: 'nest-grid-init-query',
      name: {
        'zh-CN': '下拉表格初始化查询',
        'en-US': 'Init query'
      },
      desc: {
        'zh-CN':
          '<p><code>remote</code> 为 <code>true</code> 时，可设置 <code>init-query</code> 用于初始化列表数据，并可使用 <code>v-model</code> 绑定数据回显同时，可配置 <code>remote-method</code> 方法进行搜索。</p>\n',
        'en-US':
          '<p>When <code>remote</code> is set to <code>true</code>, you can set <code>init-query</code> to initialize list data and use <code>v-model</code> to bind data echoes. You can configure the <code>remote-method</code> method for search.</p>'
      },
      codeFiles: ['nest-grid-init-query.vue']
    },
    {
      demoId: 'extra-query-params',
      name: {
        'zh-CN': '下拉表格初始化查询传参',
        'en-US': 'Extra Parameters'
      },
      desc: {
        'zh-CN':
          '<p><code>remote</code> 为 <code>true</code> 时，可设置 <code>extra-query-params</code> 传递额外的参数，用于 <code>init-query</code> 和 <code>remote-method</code> 方法的查询。</p>\n',
        'en-US':
          '<p>When <code>remote</code> is set to <code>true</code>, you can set <code>extra-query-params</code> to transfer extra parameters for querying the <code>init-query</code> and <code>remote-method</code> methods.</p>'
      },
      codeFiles: ['extra-query-params.vue']
    },
    {
      demoId: 'nest-radio-grid-much-data',
      name: {
        'zh-CN': '下拉表格大数据',
        'en-US': 'Select Table Big Data'
      },
      desc: {
        'zh-CN': '表格数据量很大时，会自动启用虚拟滚动，同 Grid 组件。',
        'en-US':
          '<p>When the table data volume is large, virtual scrolling will be automatically enabled, similar to the Grid component. </p>\n'
      },
      codeFiles: ['nest-radio-grid-much-data.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '选项插槽',
        'en-US': 'Option slot'
      },
      desc: {
        'zh-CN': '<p>通过 tiny-option 的 <code>default</code> 插槽自定义选项的 HTML 模板。</p>\n',
        'en-US': '<p>HTML template for customizing options through the <code>default</code> slot of tiny-option.</p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'slot-footer',
      name: {
        'zh-CN': '底部插槽',
        'en-US': 'Footer slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>footer</code> 插槽自定义下拉弹框底部的 HTML 模板。</p>\n',
        'en-US':
          '<p>Customize the HTML template at the bottom of the dropdown pop-up box through the <code>footer</code> slot.</p>'
      },
      codeFiles: ['slot-footer.vue']
    },
    {
      demoId: 'slot-empty',
      name: {
        'zh-CN': '空数据插槽',
        'en-US': 'Empty data slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>empty</code> 插槽自定义没有选项列表时显示的 HTML 模板。</p>\n',
        'en-US':
          '<p>Customize the HTML template displayed when there is no option list through the <code>empty</code> slot.</p>'
      },
      codeFiles: ['slot-empty.vue']
    },
    {
      demoId: 'slot-prefix',
      name: {
        'zh-CN': '输入框前缀插槽',
        'en-US': 'Predix slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>prefix</code> 插槽自定义输入框前缀的 HTML 模板。</p>\n',
        'en-US': '<p>Customize the HTML template for the input box prefix through the <code>prefix</code> slot. </p>\n'
      },
      codeFiles: ['slot-prefix.vue']
    },
    {
      demoId: 'slot-reference',
      name: {
        'zh-CN': '触发源插槽',
        'en-US': 'Reference slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>reference</code> 插槽自定义触发源的 HTML 模板。</p>\n',
        'en-US': '<p>Customize the HTML template of the trigger source through the <code>reference</code> slot.</p>'
      },
      codeFiles: ['slot-reference.vue']
    },
    {
      demoId: 'slot-label',
      name: {
        'zh-CN': '标签插槽',
        'en-US': 'Reference slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 插槽自定义多选选中标签的 HTML 模板。</p>\n',
        'en-US':
          '<p>Customize the HTML template for multiple-choice selected labels through the <code>label</code> slot. </p>'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>change：监听 v-model 的值发生变化。</p>\n<p>clear：监听单选时，点击清空按钮。</p>\n<p>blur：监听 input 失去焦点。</p>\n<p>focus：监听 input 获得焦点。</p>\n<p>visible-change：监听下拉框可见状态的变化。</p>\n<p>remove-tag：监听多选移除选中的标签。</p>\n<p>dropdown-click：监听下拉图标的点击事件。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Event Description</p>\n<p>change：Listen for changes in the value of the v-model.</p><p>clear：When listening to radio selection, click the clear button.</p>\n<p>blur：Listening to input losing focus.</p>\n<p>focus：Listening for input to gain focus.</p>\n<p>visible-change: Listen for changes in the visible status of the dropdown box</p>\n<p>remove-tag：Listen for multiple selections to remove selected tags.</p>\n<p>dropdown-click：Listens to the click event of the drop-down icon.</p>\n</div>\n'
      },
      codeFiles: ['events.vue']
    }
  ]
}
