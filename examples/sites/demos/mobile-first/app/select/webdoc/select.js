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
        'zh-CN': '`v-model` 的值为当前被选中的 `tiny-option` 的 `value` 属性值。',
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
          '<p>通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组。默认选中值会以标签（Tag 组件）展示。</p>\n',
        'en-US':
          '<p>Enable the multi-selection function through the <code>multiple</code> attribute, where the value of the <code>v-model</code> is an array composed of the currently selected values. The default selected value will be displayed as a tag component. </p>\n'
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
        'zh-CN': '<p>通过 <code>collapse-tags</code> 属性设置选中多个选项时，多个标签缩略展示。</p>\n',
        'en-US':
          '<p>When multiple options are selected through the <code>collapse-tags</code> attribute settings, multiple tags will be abbreviated and displayed.</p>\n'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'multiple-limit',
      name: {
        'zh-CN': '选择个数限制',
        'en-US': 'Select number limit'
      },
      desc: {
        'zh-CN': '<p>通过 <code>multiple-limit</code> 属性限制最多可选择的个数，默认为 0 不限制。</p>\n',
        'en-US':
          '<p>Limit the maximum number of choices through the <code>multiple-limit</code> attribute, with a default value of 0 and no limit.</p>\n'
      },
      codeFiles: ['multiple-limit.vue']
    },
    {
      demoId: 'hover-expand',
      name: {
        'zh-CN': '折叠 Tag， hover 展开',
        'en-US': 'Select number limit'
      },
      desc: {
        'zh-CN':
          '多选时通过设置 `hover-expand` 为 `true` ，默认折叠 tag, hover 时展示所有 tag。tag 超出隐藏并展示 tooltip。',
        'en-US':
          '<p>Limit the maximum number of choices through the <code>multiple-limit</code> attribute, with a default value of 0 and no limit.</p>\n'
      },
      codeFiles: ['hover-expand.vue']
    },
    {
      demoId: 'required-option',
      name: {
        'zh-CN': '必选选项',
        'en-US': 'Select number limit'
      },
      desc: {
        'zh-CN':
          '多选时，通过给 `option` 标签配置 `required` 或者在 `options` 配置项中添加 `required` 属性，来设置必选选项。',
        'en-US':
          '<p>Limit the maximum number of choices through the <code>multiple-limit</code> attribute, with a default value of 0 and no limit.</p>\n'
      },
      codeFiles: ['required-option.vue']
    },
    {
      demoId: 'multiple-mix',
      name: {
        'zh-CN': '综合场景',
        'en-US': 'Select number limit'
      },
      desc: {
        'zh-CN': 'Form 表单内 Select 组件不同尺寸设置 hover-expand 和 display-only 属性的综合应用。',
        'en-US':
          '<p>Limit the maximum number of choices through the <code>multiple-limit</code> attribute, with a default value of 0 and no limit.</p>\n'
      },
      codeFiles: ['multiple-mix.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '设置 `disabled` 属性后整个选择器不可用。',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'disabled-options',
      name: {
        'zh-CN': '选项禁用',
        'en-US': 'Option disabled'
      },
      desc: {
        'zh-CN': '设置 `disabled` 属性后整个选择器不可用。',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['disabled-options.vue']
    },
    {
      demoId: 'hover-expand-disabled',
      name: {
        'zh-CN': '多选 hover-expand 模式下禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN':
          '多选且 `hover-expand` 为 `true`时 ， 设置 `disabled` 时，可配置 `disabled-tooltip-content` 自定义 tooltip 内容。',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['hover-expand-disabled.vue']
    },
    {
      demoId: 'size-medium',
      name: {
        'zh-CN': '中尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '通过 `size` 属性定义输入框尺寸，可选项有 medium、small、mini 。 通过 `options` 配置 Select 数据项，使用后不需要再配置 tiny-option。',
        'en-US':
          '<p>Set the input box size through the <code>size</code> attribute, with optional values of medium / small / mini.</p>'
      },
      codeFiles: ['size-medium.vue']
    },
    {
      demoId: 'size-small',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '通过 `size` 属性定义输入框尺寸，可选项有 medium、small、mini 。 通过 `options` 配置 Select 数据项，使用后不需要再配置 tiny-option。',
        'en-US':
          '<p>Set the input box size through the <code>size</code> attribute, with optional values of medium / small / mini.</p>'
      },
      codeFiles: ['size-small.vue']
    },
    {
      demoId: 'size-mini',
      name: {
        'zh-CN': 'mini尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '通过 `size` 属性定义输入框尺寸，可选项有 medium、small、mini 。 通过 `options` 配置 Select 数据项，使用后不需要再配置 tiny-option。',
        'en-US':
          '<p>Set the input box size through the <code>size</code> attribute, with optional values of medium / small / mini.</p>'
      },
      codeFiles: ['size-mini.vue']
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
      demoId: 'option-group-disable',
      name: {
        'zh-CN': '分组禁用部分选项',
        'en-US': 'Group'
      },
      desc: {
        'zh-CN': '使用 `tiny-option-group` 对备选项进行分组，禁用部分分组。',
        'en-US':
          '<p>Use the <code>tiny-option-group</code> component to group alternative options. Set the group name through the <code>label</code> attribute, and set all options under the group to disabled through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['option-group-disable.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Group'
      },
      desc: {
        'zh-CN': '通过 `dropdown-icon` 属性可自定义下拉图标。',
        'en-US':
          '<p>Use the <code>tiny-option-group</code> component to group alternative options. Set the group name through the <code>label</code> attribute, and set all options under the group to disabled through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'custom-select-dropdown-style',
      name: {
        'zh-CN': '自定义下拉框样式',
        'en-US': 'Group'
      },
      desc: {
        'zh-CN': '通过 `drop-style` 属性可自定义下拉选项样式。',
        'en-US':
          '<p>Use the <code>tiny-option-group</code> component to group alternative options. Set the group name through the <code>label</code> attribute, and set all options under the group to disabled through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['custom-select-dropdown-style.vue']
    },
    {
      demoId: 'envts-change',
      name: {
        'zh-CN': 'change clear blur focus dropdown-icon 事件',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          ':::tip 事件说明\n        change：选中值发生变化时触发，回调参数为目前的选中值\n        clear：可清空的单选模式下用户点击清空按钮时触发\n        blur：当 input 失去焦点时触发\n        focus：当 input 获得焦点时触发\n        dropdown-icon：当点击下拉图标时触发\n        :::',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['envts-change.vue']
    },
    {
      demoId: 'envts-remove',
      name: {
        'zh-CN': 'visible-change remove-tag 事件',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          ':::tip 事件说明\n        visible-change：下拉框出现/隐藏时触发，回调参数为：出现则为 true，隐藏则为 false\n        remove-tag：多选模式下移除 tag 时触发，回调参数为移除的 tag 值\n        :::',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['envts-remove.vue']
    },
    {
      demoId: 'filter-method',
      name: {
        'zh-CN': '可搜索',
        'en-US': 'Filterable'
      },
      desc: {
        'zh-CN':
          '通过 `filterable` 属性可启用搜索功能。默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。`filter-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。',
        'en-US':
          '<p>Enable search functionality through the <code>filterable</code> attribute <code>filter-method</code> customize the filtering method <code>no-match-text</code> the text displayed when there is no match between attribute customization and search criteria.</p>\n'
      },
      codeFiles: ['filter-method.vue']
    },
    {
      demoId: 'search-allow-copy',
      name: {
        'zh-CN': '搜索允许复制',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '搜索单选场景，不能复制输入框的内容，需要添加属性 allow-copy 才能复制。属性 allow-copy 默认为 false。\n        在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；\n        在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['search-allow-copy.vue']
    },
    {
      demoId: 'allow-create',
      name: {
        'zh-CN': '创建条目',
        'en-US': 'Create Entry'
      },
      desc: {
        'zh-CN':
          '通过 `allow-create` 属性可通过在输入框中输入文字来创建选项中并不存在的新的条目。注意此时 `filterable` 属性必须为真。而`default-first-option` 属性设置为 true 后，通过按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。',
        'en-US':
          '<p>By using the <code>allow-create</code> and <code>filterable</code> attributes, the search field can be created as a new entry when it is not in an existing option. By combining the <code>default-first-option</code> attribute, you can press the Enter key to select the first matching option.</p>\n'
      },
      codeFiles: ['allow-create.vue']
    },
    {
      demoId: 'remote-method',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'Remote search'
      },
      desc: {
        'zh-CN':
          '为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 `true`，同时传入一个 `remote-method`。`remote-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。`reserve-keyword` 属性在多选且可搜索时，可以在选中一个选项后保留当前的搜索关键词。',
        'en-US':
          '<p>Set remote search through the use of three attributes:<code>filterable</code>,<code>remote</code>, and <code>remote-method</code>. When setting multiple searchable options through the <code>reserve-keyword</code> attribute, the current search keyword can be retained after selecting an option.</p>'
      },
      codeFiles: ['remote-method.vue']
    },
    {
      demoId: 'focus-remote-method',
      name: {
        'zh-CN': '获焦时触发远程搜索',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['focus-remote-method.vue']
    },
    {
      demoId: 'remote-search-allow-copy',
      name: {
        'zh-CN': '远程搜索允许复制',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '远程搜索单选场景，不能复制输入框的内容，需要添加属性 allow-copy 才能复制。属性 allow-copy 默认为 false。\n        在鼠标悬浮在输入框上时，按下鼠标左键并移动鼠标，可选中之前输入文本；\n        在鼠标悬浮在输入框上时，点击鼠标左键，还是原有行为，即输入内容变为 placeholder，内容清空，进入输入状态；',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['remote-search-allow-copy.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '选项可清除',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '通过 `clearable` 属性可将选择器清空，鼠标悬停于选择器上时，会出现清除图标。需要注意的是，`clearable` 属性仅适用于单选。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'name',
      name: {
        'zh-CN': 'name',
        'en-US': 'name'
      },
      desc: {
        'zh-CN': '通过 `name` 属性可已设置 name 的属性',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['name.vue']
    },
    {
      demoId: 'tag-select',
      name: {
        'zh-CN': '选择器选项可复制',
        'en-US': 'name'
      },
      desc: {
        'zh-CN': '设置 `tag-selectable` 属性后，输入框中已选择的选项可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['tag-select.vue']
    },
    {
      demoId: 'tag-copy-all',
      name: {
        'zh-CN': '选择器选项支持复制所有',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '设置 `copyable` 属性后，可以复制所有的 `tag` 文本内容默认以逗号分隔',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['tag-copy-all.vue']
    },
    {
      demoId: 'tag-copy-all-split',
      name: {
        'zh-CN': '使用 copyable 的情况下，支持配置复制文本分隔符',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '设置 `copyable` 属性后，通过设置 `text-split` 属性，自定义复制文本内容的分隔符',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['tag-copy-all-split.vue']
    },
    {
      demoId: 'binding-obj',
      name: {
        'zh-CN': '绑定值为对象',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '如果绑定值为对象时，则必须要配置 `value-key` 属性指定 value 唯一标识的键名。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['binding-obj.vue']
    },
    {
      demoId: 'no-match-text',
      name: {
        'zh-CN': '自定义无匹配搜索文字',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '通过 `no-match-text` 属性可自定义搜索条件无匹配时显示的文字。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['no-match-text.vue']
    },
    {
      demoId: 'no-data-text',
      name: {
        'zh-CN': '空数据文本',
        'en-US': 'Empty data text'
      },
      desc: {
        'zh-CN': '通过 `no-data-text` 属性可以自定义选项为空时显示的文字。',
        'en-US':
          '<p>By setting the<code>no-data-text</code> attribute to display text when the option is empty, and by setting the <code>show-empty-image</code> attribute to display empty data images, it is not displayed by default.</p>\n'
      },
      codeFiles: ['no-data-text.vue']
    },
    {
      demoId: 'popup-style-position',
      name: {
        'zh-CN': '弹框样式与定位',
        'en-US': 'Bullet Box Style and Positioning'
      },
      desc: {
        'zh-CN':
          '通过 `popper-class` 属性可自定义下拉弹框的样式。`popper-append-to-body` 指定是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false 。',
        'en-US':
          '<p>You can customize the style by setting the class name of the dropdown pop-up box through the <code>popper-class</code> attribute <code>placement</code> set the pop-up position <code>popper-append-to-body</code> set whether to insert the pop-up dom element into the body element, default to true. </p>\n'
      },
      codeFiles: ['popup-style-position.vue']
    },
    {
      demoId: 'automatic-dropdown',
      name: {
        'zh-CN': '获取焦点既弹出下拉菜单',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '设置 `automatic-dropdown` 属性为 true 后，对于不可搜索的 Select，在输入框获得焦点后将自动弹出选项菜单。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['automatic-dropdown.vue']
    },
    {
      demoId: 'custom-prefix',
      name: {
        'zh-CN': '自定义头部内容',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '通过 `prefix` 插槽自定义输入框头部内容。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['custom-prefix.vue']
    },
    {
      demoId: 'custom-options',
      name: {
        'zh-CN': '自定义下拉内容',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '通过 Option 的默认插槽实现，将自定义的 HTML 模板插入 `tiny-option` 的 slot 中即可。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['custom-options.vue']
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
      demoId: 'set-input-value',
      name: {
        'zh-CN': '改变输入框的值',
        'en-US': 'Hide Select All'
      },
      desc: {
        'zh-CN': '改变输入框的值',
        'en-US':
          '<p>By setting the <code>show-allocation</code> attribute, do not display the <code>select all</code> option when multiple selections are made, and display by default.</p>\n'
      },
      codeFiles: ['set-input-value.vue']
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
      demoId: 'is-drop-inherit-width',
      name: {
        'zh-CN': '下拉列表跟随输入框宽度',
        'en-US': 'Inherit width'
      },
      desc: {
        'zh-CN':
          '通过 `is-drop-inherit-width` 属性设置下拉列表是否跟随输入框宽度。默认为 `false` 表示不跟随，内容可撑开下拉列表宽度，设置为 `true` 则跟随宽度。',
        'en-US':
          '<p>Set whether the width of the dropdown pop-up box is consistent with the input box through the <code>is-drop-inherit-width</code> attribute. By default, when the width of the input box is exceeded, it is supported by the content. </p>\n'
      },
      codeFiles: ['is-drop-inherit-width.vue']
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
      demoId: 'slot-label',
      name: {
        'zh-CN': 'label插槽',
        'en-US': 'Empty data slot'
      },
      desc: {
        'zh-CN': '`multiple` 为 `true` 时，通过 `label` 插槽自定义 `tag` 内容 。',
        'en-US':
          '<p>Customize the HTML template displayed when there is no option list through the <code>empty</code> slot.</p>'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '通过 `shape="filter"` 属性切换至过滤器模式。过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮，placeholder 显示占位符。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'nest-radio-tree',
      name: {
        'zh-CN': '嵌套单选 Tree',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['nest-radio-tree.vue']
    },
    {
      demoId: 'nest-checkbox-tree',
      name: {
        'zh-CN': '嵌套多选 Tree',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['nest-checkbox-tree.vue']
    },
    {
      demoId: 'nest-filterable-tree',
      name: {
        'zh-CN': '可搜索 Tree',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['nest-filterable-tree.vue']
    },
    {
      demoId: 'nest-radio-tree-lazy',
      name: {
        'zh-CN': '嵌套单选 Tree 懒加载',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '通过配置 `tree-op` 属性中的 `lazy` 和 `load` 方法设置懒加载，具体配置同 `tree` 组件。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['nest-radio-tree-lazy.vue']
    },
    {
      demoId: 'nest-checkbox-tree-lazy',
      name: {
        'zh-CN': '嵌套多选 Tree 懒加载',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '通过配置 `tree-op` 属性中的 `lazy` 和 `load` 方法设置懒加载，具体配置同 `tree` 组件。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['nest-checkbox-tree-lazy.vue']
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
      demoId: 'title',
      name: {
        'zh-CN': '弹框标题',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '`title` 属性用于设置弹出框标题，仅小屏下生效。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'close-by-mask',
      name: {
        'zh-CN': '点击遮罩是否关闭弹框',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN': '设置 `close-by-mask="true"` 点击遮罩可以关闭弹框，默认为`true`，仅小屏下生效。',
        'en-US':
          '<p>Enable the function of clearing selected values with one click through the<code>clearable</code> attribute. Only applicable for single selection.</p>\n'
      },
      codeFiles: ['close-by-mask.vue']
    }
  ]
}
