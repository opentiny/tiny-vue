export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置被选中的 <code>tiny-option</code> 的 <code>value</code> 属性值。</p>\n',
        'en-US':
          '<p>Set the<code>value</code>attribute value of the selected<code>tiny option</code>by<code>v-model</code>.</p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'multiple',
      'name': { 'zh-CN': '多选', 'en-US': 'Multiple' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组。默认选中值会以标签（Tag 组件）展示。</p>\n',
        'en-US':
          '<p>Enable the multi-selection function through the<code>multiple</code>attribute, where the value of the<code>v model</code>is an array composed of the currently selected values. The default selected value will be displayed as a tag component. </p>\n'
      },
      'codeFiles': ['multiple.vue']
    },
    {
      'demoId': 'multiple-limit',
      'name': { 'zh-CN': '选择个数限制', 'en-US': 'Select number limit' },
      'desc': {
        'zh-CN': '<p>通过 <code>multiple-limit</code> 属性限制最多可选择的个数，默认为 0 不限制。</p>\n',
        'en-US':
          '<p>Limit the maximum number of choices through the<code>multiple limit</code>attribute, with a default value of 0 and no limit.</p>\n'
      },
      'codeFiles': ['multiple-limit.vue']
    },
    {
      'demoId': 'collapse-tags',
      'name': { 'zh-CN': '折叠标签', 'en-US': 'Collapse tags' },
      'desc': {
        'zh-CN': '<p>通过 <code>collapse-tags</code> 属性设置选中多个选项时，多个标签缩略展示。</p>\n',
        'en-US':
          '<p>When multiple options are selected through the<code>collapse tags</code>attribute settings, multiple tags will be abbreviated and displayed.</p>\n'
      },
      'codeFiles': ['collapse-tags.vue']
    },
    {
      'demoId': 'tag-type',
      'name': { 'zh-CN': '标签类型', 'en-US': 'Tag type' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tagType</code> 属性设置标签类型，同 Tag 组件的 type 属性。可选值：success / info / warning / danger 。</p>\n',
        'en-US':
          '<p>Set the label type through the<code>tagType</code>attribute, which is the same as the type attribute of the Tag component. Optional values: success/info/warning/danger.</p>\n'
      },
      'codeFiles': ['tag-type.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性设置输入框尺寸，可选值：medium / small / mini 。</p>',
        'en-US':
          '<p>Set the input box size through the<code>size</code>attribute, with optional values of medium / small / mini.</p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置下拉或者下拉项的禁用状态。</p>\n',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the<code>disabled</code>attribute. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清除', 'en-US': 'Clearable' },
      'desc': {
        'zh-CN': '<p>通过 <code>clearable</code> 属性启用一键清除选中值的功能。仅适用于单选。</p>\n',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code>attribute. Only applicable for single selection.</p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'filter-method',
      'name': { 'zh-CN': '可搜索', 'en-US': 'Filterable' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>filterable</code> 属性启用搜索功能。<code>filter-method</code> 自定义过滤方法。 <code>no-match-text</code> 属性自定义与搜索条件无匹配项时显示的文字。</p>\n',
        'en-US':
          '<p>Enable search functionality through the<code>filterable</code>attribute< Code>filter method</code>Customize the filtering method< Code>no match text</code>The text displayed when there is no match between attribute customization and search criteria.</p>\n'
      },
      'codeFiles': ['filter-method.vue']
    },
    {
      'demoId': 'remote-method',
      'name': { 'zh-CN': '远程搜索', 'en-US': 'Remote search' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>filterable</code> 和 <code>remote</code> 和 <code>remote-method</code> 这三个属性同时使用设置远程搜索。通过 <code>reserve-keyword</code> 属性设置多选可搜索时，可以在选中一个选项后保留当前的搜索关键词。</p>\n',
        'en-US':
          '<p>Set remote search through the use of three attributes:<code>filterable</code>,<code>remote</code>, and<code>remote method</code>. When setting multiple searchable options through the<code>reserve keyword</code>attribute, the current search keyword can be retained after selecting an option.</p>'
      },
      'codeFiles': ['remote-method.vue']
    },
    {
      'demoId': 'searchable',
      'name': { 'zh-CN': '下拉面板可搜索', 'en-US': 'Panel search' },
      'desc': {
        'zh-CN': '<p>通过 <code>searchable</code> 属性设置下拉面板显示搜索框，默认不显示。</p>\n',
        'en-US':
          '<p>The search box is displayed through the<code>searchable</code>attribute setting drop-down panel, which is not displayed by default. </p>\n'
      },
      'codeFiles': ['searchable.vue']
    },
    {
      'demoId': 'allow-create',
      'name': { 'zh-CN': '创建条目', 'en-US': 'Create Entry' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>allow-create</code> 和 <code>filterable</code> 属性，设置当搜索字段不在已有选项中时，可创建为新的条目。结合 <code>default-first-option</code> 属性，可以按 Enter 键选中第一个匹配项。</p>\n',
        'en-US':
          '<p>By using the<code>allow create</code>and<code>filterable</code>attributes, the search field can be created as a new entry when it is not in an existing option. By combining the<code>default-first-option</code>attribute, you can press the Enter key to select the first matching option.</p>\n'
      },
      'codeFiles': ['allow-create.vue']
    },
    {
      'demoId': 'map-field',
      'name': { 'zh-CN': '映射字段', 'en-US': 'Map Fields' },
      'desc': {
        'zh-CN': '通过 <code>text-field</code> 设置显示文本字段，<code>value-field</code>设置绑定值字段。',
        'en-US':
          '<p>Set the display text field by<code>text field</code>, and set the binding value field by<code>value field</code>. </p>\n'
      },
      'codeFiles': ['map-field.vue']
    },
    {
      'demoId': 'popup-style-position',
      'name': { 'zh-CN': '弹框样式与定位', 'en-US': 'Bullet Box Style and Positioning' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popper-class</code> 属性设置下拉弹框的类名，可自定义样式。<code>placement</code>设置弹出位置。<code>popper-append-to-body</code> 设置是否将弹框 dom 元素插入至 body 元素，默认为 true。</p>\n',
        'en-US':
          '<p>You can customize the style by setting the class name of the dropdown pop-up box through the<code>popper class</code>attribute< Code>placement</code>Set the pop-up position< Code>popper append to body</code>Set whether to insert the pop-up dom element into the body element, default to true. </p>\n'
      },
      'codeFiles': ['popup-style-position.vue']
    },
    {
      'demoId': 'input-box-type',
      'name': { 'zh-CN': '输入框类型', 'en-US': 'Input box type' },
      'desc': {
        'zh-CN': '<p>通过 <code>input-box-type</code> 属性设置输入框类型。可选值：input / underline。</p>\n',
        'en-US':
          'The <p>Set the input box type through the<code>input box type</code>attribute. Optional values: input / underline. </p>\n'
      },
      'codeFiles': ['input-box-type.vue']
    },
    {
      'demoId': 'show-alloption',
      'name': { 'zh-CN': '不展示全选', 'en-US': 'Hide Select All' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-alloption</code> 属性设置多选时不展示 <code>全选</code> 选项，默认展示 。</p>\n',
        'en-US':
          '<p>By setting the<code>show allocation</code>attribute, do not display the<code>select all</code>option when multiple selections are made, and display by default.</p>\n'
      },
      'codeFiles': ['show-alloption.vue']
    },
    {
      'demoId': 'clear-no-match-value',
      'name': { 'zh-CN': '自动清除不匹配的值', 'en-US': 'Clear mismatch value' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>clearNoMatchValue</code> 属性设置 v-model 的值在 options 中无法找到匹配项的值会被自动清除，默认不清除。 </p>\n',
        'en-US':
          '<p>By setting the value of the v-model through the<code>clearNoMatchValue</code>attribute, if a matching value cannot be found in the options, it will be automatically cleared and will not be cleared by default.</p>\n'
      },
      'codeFiles': ['clear-no-match-value.vue']
    },
    {
      'demoId': 'optimization',
      'name': { 'zh-CN': '大数据虚拟滚动', 'en-US': 'Big data virtual scrolling' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>optimization</code> 开启大数据虚拟滚动功能。仅配置式（使用 options 属性）时支持。\n多选模式下，最大选中项数 <code>multiple-limit</code> 默认值为 20，如果选中项比较多，建议开启 <code>collapse-tags</code> 进行折叠显示。</p>\n',
        'en-US':
          '<p>Enable the big data virtual scrolling function through<code>optimization</code>. Supported only when configuring (using the options attribute). In n multiple selection mode, the maximum number of selected items is<code>multiple limit</code>with a default value of 20. If there are many selected items, it is recommended to turn on<code>collapse tags</code>for collapsed display. </p>\n'
      },
      'codeFiles': ['optimization.vue']
    },
    {
      'demoId': 'option-group',
      'name': { 'zh-CN': '分组', 'en-US': 'Group' },
      'desc': {
        'zh-CN':
          '<p>使用 <code>tiny-option-group</code> 组件对备选项进行分组。通过 <code>label</code> 属性设置分组名，code>disabled</code> 属性设置该分组下所有选项为禁用。</p>\n',
        'en-US':
          '<p>Use the<code>tiny option group</code>component to group alternative options. Set the group name through the<code>label</code>attribute, and set all options under the group to disabled through the code>disabled</code>attribute. </p>\n'
      },
      'codeFiles': ['option-group.vue']
    },
    {
      'demoId': 'search-allow-copy',
      'name': { 'zh-CN': '单选可复制', 'en-US': 'Single choice replicable' },
      'desc': {
        'zh-CN': '<p>通过 <code>allow-copy</code> 属性设置单选可搜索时，鼠标可滑动选中并复制输入框的内容。</p>\n',
        'en-US':
          '<p>When setting radio searchable through the<code>allow copy</code>attribute, the mouse can slide to select and copy the content of the input box. </p>\n'
      },
      'codeFiles': ['search-allow-copy.vue']
    },
    {
      'demoId': 'tag-select',
      'name': { 'zh-CN': '多选可复制', 'en-US': 'Multiple choices can be copied' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tag-selectable</code> 属性设置输入框中标签可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。<code>copyable</code> 属性设置启用一键复制所有标签的文本内容并以逗号分隔。</p>\n',
        'en-US':
          '<p>By setting the<code>tag selectable</code>attribute in the input box, the label can be selected with the mouse, and then copied by pressing Ctrl+C or right-click< Code>copyable</code>Property settings enable one click copying of all label text content separated by commas.</p>\n'
      },
      'codeFiles': ['tag-select.vue']
    },
    {
      'demoId': 'native-properties',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native properties' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> 属性设置下拉组件内置 Input 的原生属性。</p>\n',
        'en-US':
          '<p>Set the native properties of the built-in Input in the dropdown component through the<code>name</code>/<code>placeholder</code>/<code>autocomplete</code>attribute settings.</p>\n'
      },
      'codeFiles': ['native-properties.vue']
    },
    {
      'demoId': 'binding-obj',
      'name': { 'zh-CN': '绑定值为对象', 'en-US': 'Bind value as object' },
      'desc': {
        'zh-CN': '<p>通过 <code>value-key</code> 属性设置 value 唯一标识的键名，绑定值可以设置为对象。</p>\n',
        'en-US':
          '<p>By using the<code>value key</code>attribute to set the key name uniquely identified by value, the binding value can be set as an object. </p>\n'
      },
      'codeFiles': ['binding-obj.vue']
    },
    {
      'demoId': 'no-data-text',
      'name': { 'zh-CN': '空数据文本', 'en-US': 'Empty data text' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>no-data-text</code> 属性设置选项为空时显示的文本，<code>show-empty-image</code> 属性设置是否显示空数据图片，默认不显示。</p>\n',
        'en-US':
          '<p>By setting the<code>no data text</code>attribute to display text when the option is empty, and by setting the<code>show empty image</code>attribute to display empty data images, it is not displayed by default.</p>\n'
      },
      'codeFiles': ['no-data-text.vue']
    },
    {
      'demoId': 'manual-focus-blur',
      'name': { 'zh-CN': '手动聚焦失焦', 'en-US': 'Manual focusing out of focus' },
      'desc': {
        'zh-CN': '<p>通过 <code>focus()</code> 方法聚焦，<code>blur()</code>方法失焦。</p>\n',
        'en-US':
          '<p>Focusing is achieved through the<code>focus()</code>method, while the<code>blur()</code>method is out of focus. </p>\n'
      },
      'codeFiles': ['manual-focus-blur.vue']
    },
    {
      'demoId': 'automatic-dropdown',
      'name': { 'zh-CN': '获焦即弹出', 'en-US': 'Eject upon capture of focus' },
      'desc': {
        'zh-CN': '<p>通过 <code>automatic-dropdown</code> 设置不可搜索的 select 获得焦点并自动弹出选项菜单。</p>\n',
        'en-US':
          '<p>Set non searchable select to obtain focus and automatically pop up an option menu through<code>automatic dropdown</code>. </p>\n'
      },
      'codeFiles': ['automatic-dropdown.vue']
    },
    {
      'demoId': 'is-drop-inherit-width',
      'name': { 'zh-CN': '继承宽度', 'en-US': 'Inherit width' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>is-drop-inherit-width</code> 属性设置下拉弹框的宽度是否跟输入框保持一致。默认超出输入框宽度时由内容撑开。</p>\n',
        'en-US':
          '<p>Set whether the width of the dropdown pop-up box is consistent with the input box through the<code>is drop-in width</code>attribute. By default, when the width of the input box is exceeded, it is supported by the content. </p>\n'
      },
      'codeFiles': ['is-drop-inherit-width.vue']
    },
    {
      'demoId': 'hide-drop',
      'name': { 'zh-CN': '隐藏下拉', 'en-US': 'Hide drop' },
      'desc': {
        'zh-CN': '<p>通过 <code>hide-drop</code> 属性设置下拉列表不显示。</p>\n',
        'en-US': '<p>Set the drop-down list to not display through the<code>hide drop</code>attribute.</p>'
      },
      'codeFiles': ['hide-drop.vue']
    },
    {
      'demoId': 'cache-usage',
      'name': { 'zh-CN': '自动缓存', 'en-US': 'Automatic caching' },
      'desc': {
        'zh-CN': '<p>通过 <code>cache-op</code> 开启缓存功能，仅配置式生效。</p>\n',
        'en-US': '<p>Enable cache function through<code>cache op</code>, only configuration mode takes effect</p>'
      },
      'codeFiles': ['cache-usage.vue']
    },
    {
      'demoId': 'memoize-usage',
      'name': { 'zh-CN': '手动缓存', 'en-US': 'Manual caching' },
      'desc': {
        'zh-CN': '<p>使用 tiny-option 组件，则需要手动加入缓存功能。</p>\n',
        'en-US': '<p>If using the tiny-option component, you need to manually add caching functionality.<p>'
      },
      'codeFiles': ['memoize-usage.vue']
    },
    {
      'demoId': 'nest-tree',
      'name': { 'zh-CN': '下拉树', 'en-US': 'Select Tree' },
      'desc': {
        'zh-CN': '<p>通过 <code>render-type</code> 设置渲染为树类型，<code>tree-op</code> 设置树组件配置。</p>',
        'en-US':
          '<p>Set the rendering to tree type through<code>render type</code>, and set the tree component configuration through<code>tree op</code>. </p>\n'
      },
      'codeFiles': ['nest-tree.vue']
    },
    {
      'demoId': 'nest-grid',
      'name': { 'zh-CN': '下拉表格', 'en-US': 'Select Table' },
      'desc': {
        'zh-CN': '<p>通过 <code>render-type</code> 设置渲染为表格类型，<code>grid-op</code>设置表格配置。</p>',
        'en-US':
          '<p>Set the rendering to a table type through<code>render type</code>, and set the table configuration through<code>grid op</code></p>\n'
      },
      'codeFiles': ['nest-grid.vue']
    },
    {
      'demoId': 'nest-grid-disable',
      'name': { 'zh-CN': '下拉表格禁用选项', 'en-US': 'Select Table Disable Options' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>select-config</code> （多选）或 <code>radio-config</code> （单选）属性的<code>checkMethod</code>自定义禁用逻辑，返回 true(启用) / false(禁用)。</p>\n',
        'en-US':
          "<p>By customizing the disable logic through the<code>select-config</code>(multiple selection) or<code>radio-config</code>(single selection) attribute's<code>checkMethod</code>, return true(Enable) / false(disable)</p>"
      },
      'codeFiles': ['nest-grid-disable.vue']
    },
    {
      'demoId': 'nest-remote-grid',
      'name': { 'zh-CN': '下拉表格远程搜索(单选)', 'en-US': 'Select table Remote Search (Single)' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>remote</code> 和 <code>remote-method</code> 和 <code>filterable</code> 开启远程搜索。通过 <code>remote-config</code> 设置自动搜索和显示展开按钮 。</p>\n',
        'en-US':
          '<p>Enable remote search through<code>remote</code>,<code>remote-method</code>, and<code>filterable</code>. Set up automatic search and display expansion buttons through<code>remote-config</code>.</p>'
      },
      'codeFiles': ['nest-remote-grid.vue']
    },
    {
      'demoId': 'nest-grid-remote-filter',
      'name': { 'zh-CN': '下拉表格远程搜索(多选）', 'en-US': 'Select table Remote Search (Multiple)' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>remote</code> 和 <code>remote-method</code> 和 <code>filterable</code> 开启远程搜索。通过 <code>remote-config</code> 设置自动搜索和显示展开按钮。<code>reserve-keyword</code>设置多选选中一个选项后依然保留搜索关键字。</p>\n',
        'en-US':
          '<p>Enable remote search through<code>remote</code>,<code>remote-method</code>, and<code>filterable</code>. Set up automatic search and display expansion buttons through<code>remote-config</code><code>reserve-keyword</code>Set to retain search keywords after selecting multiple options.</p>'
      },
      'codeFiles': ['nest-grid-remote-filter.vue']
    },
    {
      'demoId': 'nest-radio-grid-much-data',
      'name': { 'zh-CN': '下拉表格大数据', 'en-US': 'Select Table Big Data' },
      'desc': {
        'zh-CN': '表格数据量很大时，会自动启用虚拟滚动，同 Grid 组件。',
        'en-US':
          '<p>When the table data volume is large, virtual scrolling will be automatically enabled, similar to the Grid component. </p>\n'
      },
      'codeFiles': ['nest-radio-grid-much-data.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Events' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">事件说明</p>\n' +
          '<p>change：监听 v-model 的值发生变化。</p>\n' +
          '<p>clear：监听单选时，点击清空按钮。</p>\n' +
          '<p>blur：监听 input 失去焦点。</p>\n' +
          '<p>focus：监听 input 获得焦点。</p>\n' +
          '<p>visible-change：监听下拉框可见状态的变化。</p>\n' +
          '<p>remove-tag：监听多选移除选中的标签。</p>\n' +
          '</div>\n',
        'en-US':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title"> Event Description</p>\n' +
          '<p>change：Listen for changes in the value of the v-model.</p>' +
          '<p>clear：When listening to radio selection, click the clear button.</p>\n' +
          '<p>blur：Listening to input losing focus.</p>\n' +
          '<p>focus：Listening for input to gain focus.</p>\n' +
          '<p>visible-change: Listen for changes in the visible status of the dropdown box</p>\n' +
          '<p>remove-tag：Listen for multiple selections to remove selected tags.</p>\n' +
          '</div>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '选项插槽', 'en-US': 'Option slot' },
      'desc': {
        'zh-CN': '<p>通过 tiny-option 的 <code>default</code> 插槽自定义选项的 HTML 模板。</p>\n',
        'en-US': '<p>HTML template for customizing options through the<code>default</code>slot of tiny-option.</p>'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'slot-footer',
      'name': { 'zh-CN': '底部插槽', 'en-US': 'Footer slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>footer</code> 插槽自定义下拉弹框底部的 HTML 模板。</p>\n',
        'en-US':
          '<p>Customize the HTML template at the bottom of the dropdown pop-up box through the<code>footer</code>slot.</p>'
      },
      'codeFiles': ['slot-footer.vue']
    },
    {
      'demoId': 'slot-empty',
      'name': { 'zh-CN': '空数据插槽', 'en-US': 'Empty data slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>empty</code> 插槽自定义没有选项列表时显示的 HTML 模板。</p>\n',
        'en-US':
          '<p>Customize the HTML template displayed when there is no option list through the<code>empty</code>slot.</p>'
      },
      'codeFiles': ['slot-empty.vue']
    },
    {
      'demoId': 'slot-prefix',
      'name': { 'zh-CN': '输入框前缀插槽', 'en-US': 'Predix slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>prefix</code> 插槽自定义输入框前缀的 HTML 模板。</p>\n',
        'en-US': '<p>Customize the HTML template for the input box prefix through the<code>prefix</code>slot. </p>\n'
      },
      'codeFiles': ['slot-prefix.vue']
    },
    {
      'demoId': 'slot-reference',
      'name': { 'zh-CN': '触发源插槽', 'en-US': 'Reference slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>reference</code> 插槽自定义触发源的 HTML 模板。</p>\n',
        'en-US': '<p>Customize the HTML template of the trigger source through the<code>reference</code>slot.</p>'
      },
      'codeFiles': ['slot-reference.vue']
    }
  ],
  apis: [
    {
      'name': 'select',
      'type': 'component',
      'properties': [
        {
          'name': 'allow-copy',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否允许复制输入框的内容，适用单选可搜索场景',
            'en-US':
              'Is it allowed to copy the content of the input box, applicable to single choice searchable scenarios'
          },
          'demoId': 'search-allow-copy'
        },
        {
          'name': 'allow-create',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否允许创建新条目，需配合 filterable 使用。若搜索字段不在选项列表中，可创建为新的选项',
            'en-US':
              'Is it allowed to create new entries? It needs to be used in conjunction with filterable. If the search field is not in the option list, it can be created as a new option'
          },
          'demoId': 'allow-create'
        },
        {
          'name': 'autocomplete',
          'type': 'string',
          'defaultValue': 'off',
          'desc': {
            'zh-CN': '输入框的原生 autocomplete 属性',
            'en-US': 'The native autocomplete attribute of the input box'
          },
          'demoId': 'native-properties'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用一键清除的功能',
            'en-US': 'Whether to display the one click clear button, only applicable to radio selection'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'clear-no-match-value',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否自动清空无法在 options 中找到匹配项的值',
            'en-US': 'Automatically clear values that cannot find matching items in options'
          },
          'demoId': 'clear-no-match-value'
        },
        {
          'name': 'copyable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用一键复制的功能。点击复制按钮一键复制所有标签的文本内容并以逗号分隔，仅适用于多选',
            'en-US':
              'Is the one click copy function enabled. Click the copy button to copy the text content of all labels with one click, separated by commas, only applicable to multiple selections'
          },
          'demoId': 'tag-select'
        },
        {
          'name': 'collapse-tags',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否将多个标签折叠显示。仅适用多选',
            'en-US': 'Whether to collapse multiple labels for display. Only applicable to multiple selections'
          },
          'demoId': 'collapse-tags'
        },
        {
          'name': 'cache-op',
          'type': 'ICacheOp',
          'typeAnchorName': 'ICacheOp',
          'defaultValue': `<pre>
{
  key: '',
  sortBy: 'frequency',
  sort: 'desc',
  dataKey: 'value',
  highlightClass: 'memorize-highlight',
  highlightNum: Infinity,
  cacheNum: Infinity,
  serialize: JSON.stringify
  deserialize: JSON.parse
}
</pre>`,
          'desc': {
            'zh-CN': '启用本地缓存已选项的功能配置（根据用户点击选择的次数、最后时间继续存储排序)',
            'en-US': 'Set the component type when Grid or Tree is embedded in the drop-down list box.'
          },
          'demoId': 'cache-usage'
        },
        {
          'name': 'default-first-option',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用按 Enter 键选择第一个匹配项的功能。需配合 filterable 或 remote 使用',
            'en-US':
              'Whether to enable the function of pressing the Enter key to select the first match. Must be used in conjunction with filterable or remote'
          },
          'demoId': 'allow-create'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'filterable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否可搜索',
            'en-US': 'Is it searchable'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'filter-method',
          'type': '(query: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义过滤方法',
            'en-US': 'Custom filtering method'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'grid-op',
          'type': 'IGridOption',
          'typeAnchorName': 'IGridOption',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉表格时，内置表格的配置，用法同 Grid 组件。需结合 render-type 属性使用',
            'en-US':
              'When pulling down a table, the configuration of the built-in table is the same as that of the Grid component. To be used in conjunction with the render type attribute'
          },
          'demoId': 'nest-grid'
        },
        {
          'name': 'input-box-type',
          'type': '"input" | "underline"',
          'defaultValue': 'input',
          'desc': {
            'zh-CN': '输入框的显示类型',
            'en-US': 'Display type of input box'
          },
          'demoId': 'input-box-type'
        },
        {
          'name': 'is-drop-inherit-width',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉弹框的宽度是否跟输入框保持一致。默认超出输入框宽度时由内容撑开',
            'en-US':
              'Is the width of the dropdown box consistent with the input box. By default, when the width of the input box is exceeded, it is supported by the content'
          },
          'demoId': 'is-drop-inherit-width'
        },
        {
          'name': 'loading',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否加载中，适用于远程搜索场景',
            'en-US': 'Loading or not, suitable for remote search scenarios'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'loading-text',
          'type': 'string',
          'defaultValue': '加载中',
          'desc': {
            'zh-CN': '远程加载时显示的文本',
            'en-US': 'Text displayed during remote loading'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string | number | Array<string|number>',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定值',
            'en-US': 'Bind value'
          },
          'demoId': 'multiple'
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否允许选择多个选项',
            'en-US': 'Allow multiple options to be selected'
          },
          'demoId': 'multiple'
        },
        {
          'name': 'multiple-limit',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '多选时最多可选择的个数，默认为 0 不限制',
            'en-US':
              'When selecting multiple options, the maximum number of options available is 0, with no limit by default'
          },
          'demoId': 'multiple-limit'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框的原生 name 属性',
            'en-US': 'The native name attribute of the input box'
          },
          'demoId': 'native-properties'
        },
        {
          'name': 'no-match-text',
          'type': 'string',
          'defaultValue': '无匹配数据',
          'desc': {
            'zh-CN': '搜索条件无匹配时显示的文本，也可以使用 empty 插槽设置',
            'en-US':
              'The text displayed when there is no match for the search criteria can also be set using empty slots'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'no-data-text',
          'type': 'string',
          'defaultValue': '暂无相关数据',
          'desc': {
            'zh-CN': '选项列表为空时显示的文本，也可以使用 empty 插槽设置',
            'en-US': 'The text displayed when the option list is empty can also be set using empty slots'
          },
          'demoId': 'no-data-text'
        },
        {
          'name': 'options',
          'type': 'IOption[]',
          'typeAnchorName': 'IOption',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选项列表配置，使用后不需要再配置 tiny-option',
            'en-US': 'Option list configuration, no need to configure tiny options after use'
          },
          'demoId': 'map-field'
        },
        {
          'name': 'placement',
          'type': 'IPlacement',
          'typeAnchorName': 'IPlacement',
          'defaultValue': 'bottom-start',
          'desc': {
            'zh-CN': '下拉弹框相对于触发源的弹出位置',
            'en-US': 'The pop-up position of the pull-down pop-up box relative to the trigger source'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '请选择',
          'desc': { 'zh-CN': '占位符', 'en-US': 'Placeholder' },
          'demoId': 'native-properties'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义下拉框的类名，用于自定义样式',
            'en-US': 'The class name of the custom dropdown box, used for customizing styles'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否将弹出框的 dom 元素插入至 body 元素',
            'en-US': 'Whether to insert the dom element of the pop-up box into the body element'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'remote',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否为远程搜索',
            'en-US': 'Is it a remote search'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'remote-method',
          'type': '(query:string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '远程搜索的方法',
            'en-US': 'Remote search methods'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'reserve-keyword',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词',
            'en-US':
              'When selecting multiple searchable options, do you still keep the current search keywords after selecting one option'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'render-type',
          'type': '"tree" | "grid"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '渲染为下拉表格或下拉树，需结合 grid-op / tree-op 使用',
            'en-US': 'Rendered as a dropdown table or tree, to be used in conjunction with grid op/tree op'
          },
          'demoId': 'nest-grid'
        },
        {
          'name': 'show-empty-image',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示空数据图片',
            'en-US': 'Display empty data image'
          },
          'demoId': 'no-data-text'
        },
        {
          'name': 'searchable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否启用下拉面板搜索',
            'en-US': 'Whether to allow users to create new items. This parameter must be used together with filterable.'
          },
          'demoId': 'searchable'
        },
        {
          'name': 'size',
          'type': '"medium" | "small" | "mini"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸。',
            'en-US': 'Text box size'
          },
          'demoId': 'size'
        },
        {
          'name': 'show-alloption',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否展示 “全选” 选项',
            'en-US': 'Whether to display the "Select All" option'
          },
          'demoId': 'show-alloption'
        },
        {
          'name': 'tag-selectable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '输入框中的标签是否可通过鼠标选中复制',
            'en-US': 'Can the label in the input box be copied by selecting it with the mouse'
          },
          'demoId': 'tag-select'
        },
        {
          'name': 'tag-type',
          'type': '"success" | "info" | "warning" | "danger" ',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标签类型，仅多选适用。使用 aurora 主题时设置该属性为 info',
            'en-US':
              'Label type, only applicable for multiple choices. Set this property to info when using the aurora theme'
          },
          'demoId': 'tag-type'
        },
        {
          'name': 'tree-op',
          'type': 'ITreeOption',
          'typeAnchorName': 'ITreeOption',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉树时，内置树组件的配置，用法同 Tree 组件。需结合 render-type 属性使用',
            'en-US':
              'When pulling down a tree, the configuration of the built-in tree component is the same as that of the Tree component. To be used in conjunction with the render type attribute'
          },
          'demoId': 'nest-tree'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': ',',
          'desc': {
            'zh-CN': '自定义复制文本的分隔符，需结合 copyable 属性使用',
            'en-US': 'The separator for custom copied text needs to be used in conjunction with the copyable attribute'
          },
          'demoId': 'tag-select'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '显示值字段',
            'en-US': 'Show Value Fields'
          },
          'demoId': 'map-field'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': 'value',
          'desc': {
            'zh-CN': '绑定值字段',
            'en-US': 'Bind Value Field'
          },
          'demoId': 'map-field'
        },
        {
          'name': 'value-key',
          'type': 'string',
          'defaultValue': 'value',
          'desc': {
            'zh-CN': '作为 value 唯一标识的键名，绑定值为对象类型时必填',
            'en-US':
              'The key name that uniquely identifies the value must be filled in when the binding value is of object type'
          },
          'demoId': 'binding-obj'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': '(event:MouseEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听输入框失去焦点事件',
            'en-US': 'Listening for input box lose focus event'
          },
          'demoId': 'events'
        },
        {
          'name': 'change',
          'type': '(value:string|number|Array<string|number>, list:Array<IOption|ITreeNode>) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听绑定值变更事件',
            'en-US': 'Listening for binding value change events'
          },
          'demoId': 'events'
        },
        {
          'name': 'clear',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听一键清除事件',
            'en-US': 'Listening for one click clear events'
          },
          'demoId': 'events'
        },
        {
          'name': 'focus',
          'type': '(event:MouseEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听输入框获取焦点事件',
            'en-US': 'Listening to input boxes to obtain focus events'
          },
          'demoId': 'events'
        },
        {
          'name': 'visible-change',
          'type': '(status:boolean) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听下拉弹框的显示隐藏状态',
            'en-US': 'Monitor the display and hidden status of dropdown pop ups'
          },
          'demoId': 'events'
        },
        {
          'name': 'remove-tag',
          'type': '(tag:string|number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听多选时移除标签事件',
            'en-US': 'Remove label events when listening for multiple selections'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选项默认插槽',
            'en-US': 'Option default slot'
          },
          'demoId': 'slot-default'
        },
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '空数据插槽',
            'en-US': 'Empty data slot'
          },
          'demoId': 'slot-empty'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉弹框底部插槽',
            'en-US': 'Pull down the bottom slot of the pop-up box'
          },
          'demoId': 'slot-footer'
        },
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框前缀插槽',
            'en-US': 'Input box prefix slot'
          },
          'demoId': 'slot-prefix'
        },
        {
          'name': 'reference',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '触发源插槽',
            'en-US': 'Trigger Source Slot'
          },
          'demoId': 'slot-reference'
        }
      ],
      'methods': [
        {
          'name': 'blur',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使输入框失去焦点',
            'en-US': 'Causes the input box to lose focus'
          },
          'demoId': 'manual-focus-blur'
        },
        {
          'name': 'focus',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使输入框获取焦点',
            'en-US': 'Bring the input box to focus'
          },
          'demoId': 'manual-focus-blur'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IOption',
      type: 'interface',
      code: `
interface IOption {
  value?: string | number
  label?: string
}
`
    },
    {
      name: 'ICacheItem',
      type: 'interface',
      code: `
interface ICacheItem {
  frequency: number
  key: string
  time: number
}
`
    },
    {
      name: 'ICacheOp',
      type: 'interface',
      code: `
interface ICacheOp {
  "key": string // 本地缓存的唯一 key 值
  "sortBy"?: 'frequency' | 'time' // 排序的字段，默认 frequency (频次)
  "sort"?: 'desc' | 'asc' // 排序方式，默认 desc (降序)
  "dataKey"?: string // 数据中的唯一标识的 key 名称,默认 value
  "highlightClass"?: string // 个性化高亮 class 名称，默认：memorize-highlight
  "highlightNum"?: number // 高亮个性化的条数,默认：Infinity
  "cacheNum"?: number // 存储个性化的条数,默认：Infinity
  "serialize"?: ()=> string  // 本地存储序列化方法,默认：JSON.stringify
  "deserialize"?: ()=> ICacheItem[] // 本地存储序反列化方法，默认：JSON.parse
}        
`
    },
    {
      name: 'IGridOption',
      type: 'interface',
      code: `
interface IGridOption {
  data: any[]    // 表格数据，用法同 Grid
  columns: any[] // 列配置，用法同 Grid
}
`
    },
    {
      name: 'ITreeNode',
      type: 'interface',
      code: `
interface ITreeNode {
  label: string         // 默认树节点的文本字段
  id: number|string     // 树节点唯一标识
  children: ITreeNode[] // 子节点
}
`
    },
    {
      name: 'ITreeOption',
      type: 'interface',
      code: `
interface ITreeOption {
  data: ITreeNode[] // 树数据，用法同 Tree
}
`
    },
    {
      name: 'IPlacement',
      type: 'type',
      code: `
type IPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
`
    }
  ]
}
