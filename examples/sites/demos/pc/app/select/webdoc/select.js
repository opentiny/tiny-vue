export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p><code>v-model</code> 的值为当前被选中的 <code>tiny-option</code> 的 <code>value</code> 属性值。</p>\n',
        'en-US':
          'The value of <p><code>v-model</code> is the value of the <code>value</code> attribute of the currently selected <code>tiny-option</code>. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'searchable',
      'name': { 'zh-CN': '下拉面板可搜索', 'en-US': 'Multiple Choices' },
      'desc': {
        'zh-CN': '<p>通过 <code>searchable</code> 配置下拉面板是否显示搜索框</p>\n',
        'en-US':
          '<p>The <code>multiple</code> attribute is used to enable the multi-selection function. In this case, the value of <code>v-model</code> is an array of selected values. By default, the selected value is displayed as a tag. </p>\n'
      },
      'codeFiles': ['searchable.vue']
    },
    {
      'demoId': 'multiple',
      'name': { 'zh-CN': '多选', 'en-US': 'Collapse Tag' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现。</p>\n',
        'en-US':
          '<p>When you select multiple values, you can set the <code>collapse-tags</code> attribute to combine the selected values into a text. </p>\n'
      },
      'codeFiles': ['multiple.vue']
    },
    {
      'demoId': 'collapse-tags',
      'name': { 'zh-CN': '折叠 Tag', 'en-US': 'Set the tag type' },
      'desc': {
        'zh-CN': '<p>多选时通过设置 <code>collapse-tags</code> 属性将选中值合并为一段文字。</p>\n',
        'en-US': '<p>Set the tag type through the <code>tagType</code> attribute</p>\n'
      },
      'codeFiles': ['collapse-tags.vue']
    },
    {
      'demoId': 'tag-type',
      'name': { 'zh-CN': '设置 tag 类型', 'en-US': 'Set the text box type' },
      'desc': {
        'zh-CN': '<p>通过 <code>tagType</code> 属性设置标签类型 </p>\n',
        'en-US': '<p>You can set <code>input-box-type</code> to underline. </p>\n'
      },
      'codeFiles': ['tag-type.vue']
    },
    {
      'demoId': 'clear-no-match-value',
      'name': { 'zh-CN': '自动清除不匹配的值', 'en-US': 'Set the text box type' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>clearNoMatchValue</code> 属性为 <code>true</code>,则在options中无法找到匹配项的值会被自动清除 </p>\n',
        'en-US':
          '<p>If <code>clearNoMatchValue</code> is set to <code>true</code>, values that cannot be found in options are automatically cleared. </p>\n'
      },
      'codeFiles': ['clear-no-match-value.vue']
    },
    {
      'demoId': 'input-box-type',
      'name': { 'zh-CN': '设置输入框类型', 'en-US': 'Maximum number of options' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>input-box-type</code> 为underline,可以设置为下划线类型。</p>\n',
        'en-US':
          'The <p><code>multiple-limit</code> attribute specifies the maximum number of items that can be selected by the user during multiple selection. The default value is 0, which is not limited. </p>\n'
      },
      'codeFiles': ['input-box-type.vue']
    },
    {
      'demoId': 'multiple-limit',
      'name': { 'zh-CN': '选择个数限制', 'en-US': 'Big Data Virtual Scrolling' },
      'desc': {
        'zh-CN': '<p><code>multiple-limit</code> 属性可指定多选时用户最多可以选择的项目数，默认为 0 不限制。</p>\n',
        'en-US':
          '<p>You can set the options in the <code>options</code> drop-down list box and set <code>optimization</code> to enable the big data virtual scrolling function. Virtual scrolling is not supported when using the label configuration option. \nIn multi-choice mode, the maximum number of selected items <code>multiple-limit</code> is 20 by default. If a large number of selected items are selected, you are advised to enable <code>collapse-tags</code> to collapse the display. </p>\n'
      },
      'codeFiles': ['multiple-limit.vue']
    },
    {
      'demoId': 'optimization',
      'name': { 'zh-CN': '大数据虚拟滚动', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 设置下拉选项并且设置 <code>optimization</code> 开启大数据虚拟滚动功能。使用标签配置选项时不支持开启虚拟滚动。\n多选模式下，最大选中项数 <code>multiple-limit</code> 默认值为 20，如果选中项比较多，建议开启 <code>collapse-tags</code> 进行折叠显示。</p>\n',
        'en-US': '<p>After the <code>disabled</code> property is set, the entire selector is unavailable. </p>\n'
      },
      'codeFiles': ['optimization.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Some options in the drop-down list box are disabled.' },
      'desc': {
        'zh-CN': '<p>设置 <code>disabled</code> 属性后整个选择器不可用。</p>\n',
        'en-US':
          'This option is unavailable after the <code>disabled</code> attribute is set for the <p>tiny-options tag. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'disabled-options',
      'name': {
        'zh-CN': '下拉选项某些项禁用',
        'en-US': 'By default, multiple options in the drop-down list are selected and disabled.'
      },
      'desc': {
        'zh-CN': '<p>tiny-options 标签设置 <code>disabled</code> 属性后该选项不可用。</p>\n',
        'en-US':
          '<p>After the <code>disabled</code> attribute is set for the default selected tag, this option is disabled. </p>\n'
      },
      'codeFiles': ['disabled-options.vue']
    },
    {
      'demoId': 'disabled-and-selected-options',
      'name': { 'zh-CN': '下拉多选默认选中且禁用', 'en-US': 'medium' },
      'desc': {
        'zh-CN': '<p>默认选中的标签设置 <code>disabled</code> 属性后，该选项禁用。</p>\n',
        'en-US':
          '<p>The <code>size</code> attribute defines the text box size. The options are medium, small, and mini. \n Use <code>options</code> to configure the Select data item. After using the data item, you do not need to configure tiny-option. </p>\n'
      },
      'codeFiles': ['disabled-and-selected-options.vue']
    },
    {
      'demoId': 'size-medium',
      'name': { 'zh-CN': '尺寸', 'en-US': 'small' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 属性定义输入框尺寸，可选项有 medium、small、mini 。\n通过 <code>options</code> 配置 Select 数据项，使用后不需要再配置 tiny-option。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['size-medium.vue']
    },
    {
      'demoId': 'option-group',
      'name': { 'zh-CN': '分组', 'en-US': 'Disable some options for grouping' },
      'desc': {
        'zh-CN':
          '<p>使用 <code>tiny-option-group</code> 对备选项进行分组，它的 <code>label</code> 属性为分组名，使用 <code>disabled</code> 属性设置该分组下所有选项为禁用。</p>\n',
        'en-US': '<p>Use <code>tiny-option-group</code> to group options and disable some grouping. </p>\n'
      },
      'codeFiles': ['option-group.vue']
    },
    {
      'demoId': 'option-group-disable',
      'name': { 'zh-CN': '分组禁用部分选项', 'en-US': 'change clear blur focus event' },
      'desc': {
        'zh-CN': '<p>使用 <code>tiny-option-group</code> 对备选项进行分组，禁用部分分组。</p>\n',
        'en-US':
          'Description of the <div class="tip custom-block"><p class="custom-block-title"> event</p>\n<p>change: triggered when the selected value changes. The callback parameter is the current selected value.\nclear: triggered when the user clicks the clear button in the option mode.\nblur: triggered when the input loses the focus.\nfocus: </p>\n</div>\n is triggered when the input is focused'
      },
      'codeFiles': ['option-group-disable.vue']
    },
    {
      'demoId': 'envts-change',
      'name': { 'zh-CN': 'change clear blur focus 事件', 'en-US': 'visible-change remove-tag event' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>change：选中值发生变化时触发，回调参数为目前的选中值;</p><p>clear：可清空的单选模式下用户点击清空按钮时触发;</p><p>blur：当 input 失去焦点时触发;</p><p>focus：当 input 获得焦点时触发;</p><p>visible-change：下拉框出现/隐藏时触发，回调参数为：出现则为 true，隐藏则为 false;</p><p>remove-tag：多选模式下移除tag时触发，回调参数为移除的 tag 值。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Event Description</p>\n<p>change:Triggered when the selected value changes.The callback parameter id the current selected value.</p><p>clear:Emptable Radio mode Triggered when the user clicks the Emptable button</p><p>blur:Triggered when you lose focus.\nfocus:Triggered when input goes out of focus.</p><p>visible-change: Triggered when the drop-down list box is displayed or hidden. The callback parameter is true if the drop-down list box is displayed or false if the drop-down list box is hidden.</p><p>remove-tag: Triggered when the tag is removed in multi-select mode. The callback parameter is the removed tag value </p>\n</div>\n'
      },
      'codeFiles': ['envts-change.vue']
    },
    {
      'demoId': 'filter-method',
      'name': { 'zh-CN': '可搜索', 'en-US': 'The search allows copying' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>filterable</code> 属性可启用搜索功能。默认情况下，Select 会找出所有 <code>label</code> 属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个 <code>filter-method</code> 来实现。<code>filter-method</code> 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。</p>\n',
        'en-US':
          '<p>In the search scenario, the content in the text box cannot be copied. You need to add the <code>allow-copy</code> attribute to copy the content. The <code>allow-copy</code> attribute defaults to <code>false</code>. \nWhen hovering the mouse over the text box, press and move the mouse to select the previous text. \n When you hover the cursor over the text box and click the left mouse button, the input content changes to placeholder, the content is cleared, and the input state is entered. </p>\n'
      },
      'codeFiles': ['filter-method.vue']
    },
    {
      'demoId': 'search-allow-copy',
      'name': { 'zh-CN': '搜索允许复制', 'en-US': 'Create Item' },
      'desc': {
        'zh-CN':
          '<p>搜索单选场景，不能复制输入框的内容，需要添加属性 <code>allow-copy</code> 才能复制。属性 <code>allow-copy</code> 默认为 <code>false</code>。\n在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；\n在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；</p>\n',
        'en-US':
          '<p>The <code>allow-create</code> attribute allows you to create a new entry that does not exist in the option by entering text in the text box. Note that the <code>filterable</code> attribute must be true at this point. After the <code>default-first-option</code> attribute is set to true, you can press Enter to select the first option in the current option list. You do not need to use the mouse or keyboard arrow keys to locate the option. </p>\n'
      },
      'codeFiles': ['search-allow-copy.vue']
    },
    {
      'demoId': 'allow-create',
      'name': { 'zh-CN': '创建条目', 'en-US': 'Remote Search' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>allow-create</code> 属性可通过在输入框中输入文字来创建选项中并不存在的新的条目。注意此时 <code>filterable</code> 属性必须为真。而<code>default-first-option</code> 属性设置为 true 后，通过按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</p>\n',
        'en-US':
          '<p>To enable remote search, set <code>filterable</code> and <code>remote</code> to <code>true</code>. In addition, a <code>remote-method</code> is transferred. <code>remote-method</code> is a function. It is invoked when the input value changes. The parameter is the current input value. When the <code>reserve-keyword</code> attribute has multiple options and is searchable, the current search keyword can be retained after an option is selected. </p>\n'
      },
      'codeFiles': ['allow-create.vue']
    },
    {
      'demoId': 'remote-method',
      'name': { 'zh-CN': '远程搜索', 'en-US': 'Remote search is triggered when the focus is obtained.' },
      'desc': {
        'zh-CN':
          '<p>为了启用远程搜索，需要将 <code>filterable</code> 和 <code>remote</code> 设置为 <code>true</code>，同时传入一个 <code>remote-method</code>。<code>remote-method</code> 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。<code>reserve-keyword</code> 属性在多选且可搜索时，可以在选中一个选项后保留当前的搜索关键词。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['remote-method.vue']
    },
    {
      'demoId': 'focus-remote-method',
      'name': { 'zh-CN': '获焦时触发远程搜索', 'en-US': 'Remote search allows replication' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>In the remote search scenario, the content in the text box cannot be copied. You need to add the <code>allow-copy</code> attribute to copy the content. The <code>allow-copy</code> attribute defaults to <code>false</code>. \nWhen hovering the mouse over the text box, press and move the mouse to select the previous text. \n When you hover the cursor over the text box and click the left mouse button, the input content changes to placeholder, the content is cleared, and the input state is entered. </p>\n'
      },
      'codeFiles': ['focus-remote-method.vue']
    },
    {
      'demoId': 'remote-search-allow-copy',
      'name': { 'zh-CN': '远程搜索允许复制', 'en-US': 'Options can be cleared' },
      'desc': {
        'zh-CN':
          '<p>远程搜索单选场景，不能复制输入框的内容，需要添加属性 <code>allow-copy</code> 才能复制。属性 <code>allow-copy</code> 默认为 <code>false</code>。\n在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；\n在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；</p>\n',
        'en-US':
          '<p>You can use the <code>clearable</code> attribute to clear the selector. When you hover the cursor over the selector, the clear icon is displayed. Note that the <code>clearable</code> attribute applies only to single selection. </p>\n'
      },
      'codeFiles': ['remote-search-allow-copy.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '选项可清除', 'en-US': 'name' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>clearable</code> 属性可将选择器清空，鼠标悬停于选择器上时，会出现清除图标。需要注意的是，<code>clearable</code> 属性仅适用于单选。</p>\n',
        'en-US': '<p>You can set the name attribute through the <code>name</code> attribute</p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'name',
      'name': { 'zh-CN': 'name', 'en-US': 'Select selector options can be copied' },
      'desc': {
        'zh-CN': '<p>通过 <code>name</code> 属性可已设置 name 的属性</p>\n',
        'en-US':
          '<p>After the <code>tag-selectable</code> attribute is set, the selected options in the text box can be selected by using the mouse, and then you can press Ctrl + C or right-click to copy the options. </p>\n'
      },
      'codeFiles': ['name.vue']
    },
    {
      'demoId': 'tag-select',
      'name': { 'zh-CN': 'Select选择器选项可复制', 'en-US': 'The Select selector option can be copied to all.' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>tag-selectable</code> 属性后，输入框中已选择的选项可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。</p>\n',
        'en-US':
          '<p>After the <code>copyable</code> attribute is set, all <code>tag</code> text contents can be copied and separated by commas.</p>\n'
      },
      'codeFiles': ['tag-select.vue']
    },
    {
      'demoId': 'tag-copy-all',
      'name': { 'zh-CN': 'Select选择器选项支持复制所有', 'en-US': 'Bound Value object' },
      'desc': {
        'zh-CN': '<p>设置 <code>copyable</code> 属性后，可以复制所有的 <code>tag</code> 文本内容以逗号分隔</p>\n',
        'en-US':
          '<p>If the bound value is an object, the <code>value-key</code> attribute must be configured to specify the key name uniquely identified by the value. </p>\n'
      },
      'codeFiles': ['tag-copy-all.vue']
    },
    {
      'demoId': 'binding-obj',
      'name': { 'zh-CN': '绑定值为对象', 'en-US': 'Customized search text without matching' },
      'desc': {
        'zh-CN': '<p>如果绑定值为对象时，则必须要配置 <code>value-key</code> 属性指定 value 唯一标识的键名。</p>\n',
        'en-US':
          '<p>You can use the <code>no-match-text</code> attribute to customize the text displayed when no search criteria are matched. </p>\n'
      },
      'codeFiles': ['binding-obj.vue']
    },
    {
      'demoId': 'no-match-text',
      'name': { 'zh-CN': '自定义无匹配搜索文字', 'en-US': 'Customized text for empty data display' },
      'desc': {
        'zh-CN': '<p>通过 <code>no-match-text</code> 属性可自定义搜索条件无匹配时显示的文字。</p>\n',
        'en-US':
          '<p>You can use the <code>no-data-text</code> attribute to customize the text displayed when the option is empty. </p>\n <p>You can set the <code>show-empty-image</code> attribute to display empty data images. By default, empty data images are not displayed. </p>\n'
      },
      'codeFiles': ['no-match-text.vue']
    },
    {
      'demoId': 'no-data-text',
      'name': { 'zh-CN': '自定义空数据显示文字', 'en-US': 'Pop-up dialog box style and positioning' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>no-data-text</code> 属性可以自定义选项为空时显示的文字。</p>\n <p>通过 <code>show-empty-image</code> 属性可以设置显示空数据图片，默认不显示。</p>\n',
        'en-US':
          '<p>You can use the <code>popper-class</code> attribute to customize the style of the drop-down list box. <code>popper-append-to-body</code>\t Specifies whether to insert a pop-up into the body element. If a fault occurs in locating the dialog box that is displayed, set this parameter to false. </p>\n'
      },
      'codeFiles': ['no-data-text.vue']
    },
    {
      'demoId': 'popup-style-position',
      'name': { 'zh-CN': '弹出框样式与定位', 'en-US': 'The drop-down menu is displayed when the focus is obtained.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popper-class</code> 属性可自定义下拉弹框的样式。<code>popper-append-to-body</code>\t指定是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false 。</p>\n',
        'en-US':
          '<p>After <code>automatic-dropdown</code> is set to true, the option menu is automatically displayed after the focus is obtained in the text box. </p>\n'
      },
      'codeFiles': ['popup-style-position.vue']
    },
    {
      'demoId': 'automatic-dropdown',
      'name': { 'zh-CN': '获取焦点既弹出下拉菜单', 'en-US': 'Custom header content' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>automatic-dropdown</code> 属性为 true 后，对于不可搜索的 Select，在输入框获得焦点后将自动弹出选项菜单。</p>\n',
        'en-US': '<p>Customize the header content of the text box through the <code>prefix</code> slot. </p>\n'
      },
      'codeFiles': ['automatic-dropdown.vue']
    },
    {
      'demoId': 'custom-prefix',
      'name': { 'zh-CN': '自定义头部内容', 'en-US': 'User-defined drop-down list' },
      'desc': {
        'zh-CN': '<p>通过 <code>prefix</code> 插槽自定义输入框头部内容。</p>\n',
        'en-US':
          '<p> is implemented through the default slot of Option. Insert the customized HTML template into the slot of <code>tiny-option</code>. </p>\n'
      },
      'codeFiles': ['custom-prefix.vue']
    },
    {
      'demoId': 'custom-options',
      'name': { 'zh-CN': '自定义下拉内容', 'en-US': 'The Select All option is not displayed.' },
      'desc': {
        'zh-CN':
          '<p>通过 Option 的默认插槽实现，将自定义的 HTML 模板插入 <code>tiny-option</code> 的 slot 中即可。</p>\n',
        'en-US':
          'If <p><code>show-alloption</code> is set to false, the <code>Select All</code> option is not displayed. The default value is true. </p>\n'
      },
      'codeFiles': ['custom-options.vue']
    },
    {
      'demoId': 'custom-reference-slot',
      'name': { 'zh-CN': '自定义触发源插槽', 'en-US': 'Change the value in the text box.' },
      'desc': {
        'zh-CN': '<p>通过 <code>reference</code> 插槽自定义触发源的 HTML 模板。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['custom-reference-slot.vue']
    },
    {
      'demoId': 'show-alloption',
      'name': { 'zh-CN': '不展示全选选项', 'en-US': 'Manually obtaining the focus' },
      'desc': {
        'zh-CN':
          '<p><code>show-alloption</code> 属性设置为 false 后将不展示 <code>全选</code> 选项，默认为 true 。</p>\n',
        'en-US': '<p>Invoke the <code>focus()</code> method to focus the input. </p>\n'
      },
      'codeFiles': ['show-alloption.vue']
    },
    {
      'demoId': 'set-input-value',
      'name': { 'zh-CN': '改变输入框的值', 'en-US': 'The drop-down list follows the width of the text box.' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>The <code>is-drop-inherit-width</code> attribute is used to set whether the drop-down list box follows the width of the text box. The default value is <code>false</code>, indicating that the content is not followed. The width of the drop-down list can be expanded. If the value is <code>true</code>, the content is followed. </p>\n'
      },
      'codeFiles': ['set-input-value.vue']
    },
    {
      'demoId': 'manual-focus-blur',
      'name': { 'zh-CN': '手动获取焦点', 'en-US': 'Empty data slot' },
      'desc': {
        'zh-CN': '<p>通过调用 <code>focus()</code> 方法使 input 获取焦点。</p>\n',
        'en-US': '<p>Use <code>empty</code> to set the message displayed when there is no data. </p>\n'
      },
      'codeFiles': ['manual-focus-blur.vue']
    },
    {
      'demoId': 'is-drop-inherit-width',
      'name': { 'zh-CN': '下拉列表跟随输入框宽度', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>is-drop-inherit-width</code> 属性设置下拉列表是否跟随输入框宽度。默认为 <code>false</code> 表示不跟随，内容可撑开下拉列表宽度，设置为 <code>true</code> 则跟随宽度。</p>\n',
        'en-US': '<p>by <code>default</code>default slot list. </p>\n'
      },
      'codeFiles': ['is-drop-inherit-width.vue']
    },
    {
      'demoId': 'hide-select-input-border',
      'name': { 'zh-CN': '隐藏下拉', 'en-US': 'Nested Grid' },
      'desc': {
        'zh-CN': '<p>通过 <code>hide-drop</code> 属性设置下拉列表不显示。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['hide-select-input-border.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Nested grid, which can be searched for and cleared.' },
      'desc': {
        'zh-CN': '<p>通过 <code>default</code> 默认插槽列表。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'slot-footer',
      'name': { 'zh-CN': '底部插槽', 'en-US': 'Nested Multi-choice Grid' },
      'desc': {
        'zh-CN': '<p>通过 <code>footer</code> 使用底部插槽。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot-footer.vue']
    },
    {
      'demoId': 'slot-empty',
      'name': { 'zh-CN': '空数据插槽', 'en-US': 'text-field' },
      'desc': {
        'zh-CN': '<p>通过 <code>empty</code> 设置没有数据时显示的提示语。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot-empty.vue']
    },
    {
      'demoId': 'nest-radio-grid',
      'name': { 'zh-CN': '嵌套单选 Grid', 'en-US': 'value-field' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['nest-radio-grid.vue']
    },
    {
      'demoId': 'nest-checkbox-grid-clearable',
      'name': { 'zh-CN': '嵌套单选 Grid，可搜索，可清除', 'en-US': 'Nested Grid data item disabled' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>In the drop-down list box, the attribute <code>checkMethod</code> of the <code>select-config</code> configuration item is used to determine which data items are disabled. The method determines each data item. If the return value is <code>true</code> or <code>false</code>, the data item is enabled or disabled. Select a single option from the drop-down list box. The attribute <code>checkMethod</code> of the <code>radio-config</code> configuration item is used to determine which data items are disabled. The method determines each data item. If the return value is <code>true</code> or <code>false</code>, the data item is enabled or disabled. </p>\n'
      },
      'codeFiles': ['nest-checkbox-grid-clearable.vue']
    },
    {
      'demoId': 'nest-checkbox-grid',
      'name': { 'zh-CN': '嵌套多选 Grid', 'en-US': 'Enabling Remote Search for Nested Grids (Multiple Choices)' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>Set <code>render-type</code> to <code>grid</code> nested grid; Set <code>filterable</code> and <code>remote</code> to <code>true</code> and pass in the <code>remote-method</code> method to enable remote search. To automatically search for and display the expansion button, set <code>remote-config</code> </p>\n'
      },
      'codeFiles': ['nest-checkbox-grid.vue']
    },
    {
      'demoId': 'nest-checkbox-grid1',
      'name': { 'zh-CN': '映射字段', 'en-US': 'Nested Grid Enable Remote Search (Single Choice)' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>Set <code>render-type</code> to <code>grid</code> nested grid; Set <code>filterable</code> and <code>remote</code> to <code>true</code> and pass in the <code>remote-method</code> method to enable remote search. To automatically search for and display the expansion button, set <code>remote-config</code> </p>\n'
      },
      'codeFiles': ['nest-checkbox-grid.vue']
    },
    {
      'demoId': 'disable-grid-select-radio',
      'name': { 'zh-CN': '嵌套 Grid 数据项禁用', 'en-US': 'Nested Radio Tree' },
      'desc': {
        'zh-CN':
          '<p>下拉表格多选模式，通过 <code>select-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。下拉表格单选模式，通过 <code>radio-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['disable-grid-select-radio.vue']
    },
    {
      'demoId': 'nest-grid-remote-filter',
      'name': { 'zh-CN': '嵌套 Grid 开启远程搜索(多选)', 'en-US': 'Nested Multi-choice Tree' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>render-type</code> 为 <code>grid</code> 嵌套Grid；将 <code>filterable</code> 和 <code>remote</code> 设置为 <code>true</code>，同时传入 <code>remote-method</code> 方法，开启远程搜索。如需自动搜索和显示展开按钮，需设置 <code>remote-config</code> </p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['nest-grid-remote-filter.vue']
    },
    {
      'demoId': 'nest-remote-grid',
      'name': { 'zh-CN': '嵌套 Grid 开启远程搜索(单选)', 'en-US': 'Searchable tree' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>render-type</code> 为 <code>grid</code> 嵌套Grid；将 <code>filterable</code> 和 <code>remote</code> 设置为 <code>true</code>，同时传入 <code>remote-method</code> 方法，开启远程搜索。如需自动搜索和显示展开按钮，需设置 <code>remote-config</code> </p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['nest-remote-grid.vue']
    },
    {
      'demoId': 'nest-radio-grid-much-data',
      'name': { 'zh-CN': '嵌套 Grid 且数据量大', 'en-US': 'Configuration Mode' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>Enable the cache function by setting <code>cache-op</code> and set options by <code>options</code>. </p>\n'
      },
      'codeFiles': ['nest-radio-grid-much-data.vue']
    },
    {
      'demoId': 'nest-radio-tree',
      'name': { 'zh-CN': '嵌套单选 Tree', 'en-US': 'Hide drop-down' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US': '<p>Use the <code>hide-drop</code> attribute to disable the display of the drop-down list. </p>\n'
      },
      'codeFiles': ['nest-radio-tree.vue']
    },
    {
      'demoId': 'nest-checkbox-tree',
      'name': { 'zh-CN': '嵌套多选 Tree', 'en-US': 'Slot Mode' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>If the list rendering component is set to <code>vue-option</code> through slot to output the drop-down list, you need to manually add the cache function. </p>\n'
      },
      'codeFiles': ['nest-checkbox-tree.vue']
    },
    {
      'demoId': 'nest-filterable-tree',
      'name': { 'zh-CN': '可搜索 tree', 'en-US': '' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': '' },
      'codeFiles': ['nest-filterable-tree.vue']
    },
    {
      'demoId': 'cache-usage',
      'name': { 'zh-CN': '配置方式', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>cache-op</code> 开启缓存功能并且通过 <code>options</code> 设置下拉选项。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['cache-usage.vue']
    },
    {
      'demoId': 'memoize-usage',
      'name': { 'zh-CN': '插槽方式', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 slot 设置列表渲染组件为 <code>vue-option</code> 来输出下拉列表，则需要手动加入缓存功能。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['memoize-usage.vue']
    }
  ],
  apis: [
    {
      'name': 'select',
      'type': 'component',
      'properties': [
        {
          'name': 'tag-selectable',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉框内选中项支持复制功能',
            'en-US': 'The selected items in the drop-down list box can be copied.'
          },
          'demoId': 'tag-select'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'disabled'
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否允许输入框输入或选择多个项，默认为 false。;是否多选',
            'en-US':
              'Specifies whether multiple items can be entered or selected in the text box. The default value is false. ; Whether to select multiple options'
          },
          'demoId': 'multiple'
        },
        {
          'name': 'tag-type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '用于设置不同主题的标签，仅多选时适用,tag-type 默认为空，该属性的可选值为 success / info / warning / danger ,使用aurora 主题时设置该属性为 info',
            'en-US':
              'This parameter is used to set tags for different themes. This parameter is applicable only when multiple themes are selected. By default, tag-type is empty. The options of this parameter are success, info, warning, and danger. When the Aurora theme is used, set this parameter to info.'
          },
          'demoId': 'tag-type'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              'tip 相对于创建 tip 的 dom 节点的位置。;该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
            'en-US':
              'Location of the tip relative to the dom node where the tip is created. ; The optional value of this attribute is top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否显示清除文本的按钮，默认为 true。;是否可以清空选项',
            'en-US':
              'Whether to display the button for clearing text. The default value is true. ;Whether the option can be cleared'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'clear-no-match-value',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置是否自动清空无法在options中找到匹配项的值。默认不自动清空，设置为true时生效。',
            'en-US':
              'Sets whether to automatically clear the values that cannot be found in options. By default, this parameter is not automatically cleared. This parameter is valid only when this parameter is set to true.'
          },
          'demoId': 'clear-no-match-value'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置下拉框的文本对应的数据源的字段名称。',
            'en-US': 'Field name of the data source corresponding to the text in the drop-down list box.'
          },
          'demoId': 'nest-checkbox-grid1'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean , string , number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置下拉框的默认值。;绑定值',
            'en-US': 'Set the default value of the drop-down list box. ;Bound Value'
          },
          'demoId': 'multiple'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置下拉框的值所对应数据源的字段名称,下拉框的值用于提交到服务器。',
            'en-US':
              'Set the field name of the data source corresponding to the value in the drop-down list box. The value in the drop-down list box is submitted to the server.'
          },
          'demoId': 'nest-checkbox-grid2'
        },
        {
          'name': 'value-key',
          'type': 'string',
          'defaultValue': '该属性的默认值为 value',
          'desc': {
            'zh-CN': '作为 value 唯一标识的键名，绑定值为对象类型时必填',
            'en-US':
              'Key name that uniquely identifies a value. This parameter is mandatory when the bound value is an object type.'
          },
          'demoId': 'binding-obj'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸;该属性的可选值为 medium/small/mini',
            'en-US': 'Text box size; The value of this attribute can be medium, small, or mini'
          },
          'demoId': 'size-medium'
        },
        {
          'name': 'collapse-tags',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '多选时是否将选中值按文字的形式展示',
            'en-US': 'Whether to display the selected value in text format when multiple options are selected.'
          },
          'demoId': 'collapse-tags'
        },
        {
          'name': 'multiple-limit',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '多选时用户最多可以选择的项目数，为 0 则不限制',
            'en-US':
              'Maximum number of items that a user can select when multiple items are selected. If the value is 0, there is no limit.'
          },
          'demoId': 'multiple'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': 'select input 的 name 属性', 'en-US': 'name attribute of select input' },
          'demoId': 'name'
        },
        {
          'name': 'autocomplete',
          'type': 'string',
          'defaultValue': '该属性的默认值为 off',
          'desc': { 'zh-CN': 'select input 的 autocomplete 属性', 'en-US': 'autocomplete attribute of select input' },
          'demoId': ''
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '该属性的默认值为 请选择',
          'desc': { 'zh-CN': '占位符', 'en-US': 'Placeholder' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'filterable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否可搜索', 'en-US': 'Searchable' },
          'demoId': 'filter-method'
        },
        {
          'name': 'searchable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否下拉面板可搜索',
            'en-US': 'Whether to allow users to create new items. This parameter must be used together with filterable.'
          },
          'demoId': 'searchable'
        },
        {
          'name': 'allow-create',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否允许用户创建新条目，需配合 filterable 使用',
            'en-US':
              'User-defined search method; arg1:{string value in the current input box}, arg2:{a node in the object tree}'
          },
          'demoId': 'allow-create'
        },
        {
          'name': 'filter-method',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义搜索方法;arg1:{string 当前input框中值}，arg2:{object 树的某个节点}',
            'en-US': 'Remote search'
          },
          'demoId': 'filter-method'
        },
        {
          'name': 'remote',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否为远程搜索', 'en-US': 'Remote search method' },
          'demoId': 'remote-method'
        },
        {
          'name': 'remote-method',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '远程搜索方法', 'en-US': 'Whether data is being obtained from the remote server' },
          'demoId': 'remote-method'
        },
        {
          'name': 'loading',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否正在从远程获取数据', 'en-US': 'Text displayed during remote loading' },
          'demoId': 'remote-method'
        },
        {
          'name': 'loading-text',
          'type': 'string',
          'defaultValue': '该属性的默认值为 加载中',
          'desc': {
            'zh-CN': '远程加载时显示的文字',
            'en-US': 'Text displayed when no search criteria are matched. You can also use slot="empty" to set it.'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'no-match-text',
          'type': 'string',
          'defaultValue': '该属性的默认值为 无匹配数据',
          'desc': {
            'zh-CN': '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
            'en-US': 'Text displayed when the option is empty. You can also use slot="empty" to set it.'
          },
          'demoId': 'no-match-text'
        },
        {
          'name': 'no-data-text',
          'type': 'string',
          'defaultValue': '该属性的默认值为 无数据',
          'desc': {
            'zh-CN': '选项为空时显示的文字，也可以使用slot="empty"设置',
            'en-US':
              'By default, empty data images are not displayed. When this parameter is set to true, empty data images are displayed.'
          },
          'demoId': 'no-data-text'
        },
        {
          'name': 'show-empty-image',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '默认不显示空数据图片，设置为 true 的时候显示',
            'en-US':
              'Set the display type of the text box. The options are input and underline. The default value is input.'
          },
          'demoId': 'no-data-text'
        },
        {
          'name': 'input-box-type',
          'type': 'string',
          'defaultValue': 'input',
          'desc': {
            'zh-CN': '设置输入框的显示类型，包含 input / underline 两种，默认为input',
            'en-US': 'Class name of the Select drop-down list box'
          },
          'demoId': 'input-box-type'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '该属性的默认值为空',
          'desc': {
            'zh-CN': 'Select 下拉框的类名',
            'en-US':
              'Whether to retain the current search keyword after an option is selected when multiple options are selected for search.'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'reserve-keyword',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
            'en-US':
              'Press Enter in the text box to select the first matching item. This function must be used together with filterable or remote.'
          },
          'demoId': 'remote-method'
        },
        {
          'name': 'default-first-option',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          'demoId': 'allow-create'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Whether to automatically display the option menu after the focus is obtained in the text box for a non-searchable Select item.'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'automatic-dropdown',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
            'en-US': 'Configure the Select data item. You do not need to configure tiny-option again.'
          },
          'demoId': 'automatic-dropdown'
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置 Select 数据项，使用后不需要再配置 tiny-option。',
            'en-US': 'The Select All option is displayed. The default value is true.'
          },
          'demoId': 'size-medium'
        },
        {
          'name': 'show-alloption',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展示 `全选` 选项，默认为 true 。',
            'en-US':
              'Whether to display the width of the drop-down list based on the width of the text box. The default value is false. If this parameter is set to false, the drop-down list is not followed. The width of the drop-down list is determined by the length of the option content. If this parameter is set to true, the text box width is displayed.'
          },
          'demoId': 'show-alloption'
        },
        {
          'name': 'is-drop-inherit-width',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置下拉列表的宽度是否跟随输入框的宽度进行展示，默认为 false;设置值为 false 时，表示不跟随，下拉列表宽度由选项内容的长度决定;设置值为 true 时，表示跟随输入框的宽度进行展示',
            'en-US':
              'Enable the local cache function of the select command. (Continue to store and sort according to the number of times the user clicks and the last time); cache-op.key (mandatory): unique key value in the local cache. cache-op.sortBy: sorting field. The default value is frequency. The options are frequency and time. The cache-op.sort. The default value is desc. The options are desc and asc. Unique key name in cache-op.dataKey. The default value is value. The default value is cache-op.highlightClass. The default value is memorize-highlight;cache-op.highlightNum. The default value is Infinity. cache-op.cacheNum: number of personalized storage records. The default value is Infinity.cache-op.serializeLocal storage serialization method.The default value is JSON.Stringify;cache-op.deserialize Local storage order decolumnization method.The default value is JSON.parse'
          },
          'demoId': 'is-drop-inherit-width'
        },
        {
          'name': 'cache-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '开启 select 本地缓存功能（根据用户点击选择的次数、最后时间继续存储排序）;cache-op.key （必填）本地缓存的唯一 key 值;cache-op.sortBy 排序的字段，默认 frequency (频次)，可选值：frequency、time;cache-op.sort 排序方式，默认 desc (降序)，可选值：desc、asc;cache-op.dataKey  数据中的唯一标识的 key 名称，默认： value;cache-op.highlightClass  个性化高亮 class 名称，默认：memorize-highlight;cache-op.highlightNum  高亮个性化的条数，默认：Infinity;cache-op.cacheNum 存储个性化的条数，默认：Infinity;cache-op.serialize 本地存储序列化方法，默认：JSON.Stringify;cache-op.deserialize 本地存储序反列化方法，默认：JSON.parse',
            'en-US': 'Set the component type when Grid or Tree is embedded in the drop-down list box.'
          },
          'demoId': 'cache-usage'
        },
        {
          'name': 'render-type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置下拉列表嵌套 Grid 或 Tree 时的组件类型',
            'en-US': 'Configure Grid data when the Grid component is embedded in the drop-down list box.'
          },
          'demoId': 'nest-radio-grid'
        },
        {
          'name': 'grid-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉列表嵌套 Grid 组件时，用来配置 Grid 的数据信息',
            'en-US':
              'This parameter is used to configure tree data when the Tree component is embedded in the drop-down list box.'
          },
          'demoId': 'nest-radio-grid'
        },
        {
          'name': 'tree-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉列表嵌套 Tree 组件时，用来配置 Tree 的数据信息',
            'en-US': 'Whether to allow copying the content in the text box in the single-choice search scenario'
          },
          'demoId': 'nest-radio-tree'
        },
        {
          'name': 'allow-copy',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false，表示不能复制',
          'desc': {
            'zh-CN': '搜索单选场景，是否允许复制输入框的内容',
            'en-US':
              'The copy function is enabled. After the configuration, a copy button is displayed on the right of the text box. (The value can be used in the multi-choice mode.)'
          },
          'demoId': 'search-allow-copy'
        },
        {
          'name': 'copyable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是开启复制功能，配置后会在输入框右侧鼠标上浮后有个复制按钮。（只能用于多选模式）',
            'en-US': 'If copyable is configured, it can be used as the separator of the selected item.'
          },
          'demoId': 'search-allow-copy'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '在配置 copyable 的情况下可相当于选中项的分隔符', 'en-US': '' },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置下拉框值更新后触发的事件。;arg1:{Any|Array 单选并且未指定渲染类型时，是选中项的值字段，此时没有arg2参数；多选并且未指定渲染类型时，是选中项值字段组成的数组，此时没有arg2参数；单选并且渲染类型为树或者表格时，是选中项对象，此时没有arg2参数；多选并且渲染类型为树或者表格时，是选中项对象值字段组成的数组，此时有arg2参数；}，arg2:{Array 多选并且渲染类型为树或者表格时，是选中项对象组成的数组}',
            'en-US':
              'Sets the event triggered after the value of the drop-down list box is updated. ; arg1:{Any|Array is selected and the rendering type is not specified. In this case, the value field of the selected item does not contain the arg2 parameter. If multiple options are selected and the rendering type is not specified, the value of the selected item is an array. In this case, the arg2 parameter is not provided. If you select a single item and the rendering type is tree or table, the object is selected. In this case, the arg2 parameter is not provided. When multiple selections are selected and the rendering type is tree or table, the array is composed of the selected object value fields. In this case, the arg2 parameter is available. }, arg2:{When multiple Arrays are selected and the rendering type is tree or table, the array consists of selected objects}'
          },
          'demoId': 'envts-change'
        },
        {
          'name': 'clear',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置内容清除后触发的事件。;可清空的单选模式下用户点击清空按钮时触发',
            'en-US':
              'Sets the event triggered after content is cleared. ;In the radio option mode that can be cleared, the alarm is triggered when the user clicks the Clear button.'
          },
          'demoId': 'envts-change'
        },
        {
          'name': 'visible-change',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉框出现/隐藏时触发;arg:{boolean 下拉框出现时为true；下拉框隐藏时为false}',
            'en-US':
              'This event is triggered when the drop-down list box is displayed or hidden. arg:{The value is true when the boolean drop-down list box appears. If the drop-down list box is hidden, the value is false}'
          },
          'demoId': 'envts-change'
        },
        {
          'name': 'remove-tag',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '多选模式下移除tag时触发;arg:{Any 被移除Tag对应数据项的值字段}',
            'en-US':
              'Triggered when a tag is removed in multi-choice mode. arg:{Value field of the data item corresponding to the removed tag of Any}'
          },
          'demoId': 'envts-change'
        },
        {
          'name': 'blur',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 失去焦点时触发;arg:{FocusEvent 原生blur事件对象}',
            'en-US': 'This event is triggered when the input loses focus. arg:{FocusEvent native blur event object}'
          },
          'demoId': 'envts-change'
        },
        {
          'name': 'focus',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 获得焦点时触发;arg:{FocusEvent 原生focus事件对象}',
            'en-US': 'This event is triggered when the input is focused. arg:{FocusEvent native focus event object}'
          },
          'demoId': 'envts-change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Option component list' },
          'demoId': 'slot-default'
        },
        {
          'name': 'reference',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Select 组件触发源', 'en-US': 'Select component header content' },
          'demoId': 'custom-reference-slot'
        },
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Select 组件头部内容', 'en-US': 'List when no option is available' },
          'demoId': 'custom-prefix'
        },
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '无选项时的列表', 'en-US': '' },
          'demoId': 'slot-empty'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部插槽', 'en-US': '' },
          'demoId': 'slot-footer'
        }
      ],
      'methods': [
        {
          'name': 'focus',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 获取焦点', 'en-US': 'Enable input to focus.' },
          'demoId': 'manual-focus-blur'
        },
        {
          'name': 'blur',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使 input 失去焦点，并隐藏下拉框',
            'en-US': 'Disable the focus of the input and hide the drop-down list box.'
          },
          'demoId': 'manual-focus-blur'
        }
      ]
    }
  ]
}
