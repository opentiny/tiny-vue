export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>注意 User 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Note that the User component requests mock data, which cannot be queried by other users. Use the real service during development. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'multiple-users',
      'name': { 'zh-CN': '多用户', 'en-US': 'Multi-User' },
      'desc': {
        'zh-CN': '<p>设置 <code>multiple</code> 属性即可启用多用户形式。</p>\n',
        'en-US': '<p>Set the <code>multiple</code> property to enable the multi-user mode. </p>\n'
      },
      'codeFiles': ['multiple-users.vue']
    },
    {
      'demoId': 'multiple-users-tag',
      'name': { 'zh-CN': '折叠 Tag', 'en-US': 'Collapse Tag' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>multiple</code> 属性即可启用多用户形式。\n通过 <code>collapse-tags</code> 配置多用户模式下是否展示折叠标签，默认为 false。</p>\n',
        'en-US':
          '<p>Set the <code>multiple</code> property to enable the multi-user mode. \n Use <code>collapse-tags</code> to configure whether to display collapsed tags in multi-user mode. The default value is false. </p>\n'
      },
      'codeFiles': ['multiple-users-tag.vue']
    },
    {
      'demoId': 'tag-copy',
      'name': { 'zh-CN': 'user选择器选项可复制', 'en-US': 'User selector options can be copied' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tag-selectable</code> 输入框中已选择的选项可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。</p>\n',
        'en-US':
          '<p>You can select an option in the <code>tag-selectable</code> text box with the mouse, and then press Ctrl + C or right-click to copy it. </p>\n'
      },
      'codeFiles': ['tag-copy.vue']
    },
    {
      'demoId': 'tag-copy-all',
      'name': { 'zh-CN': 'user选择器选项可复制', 'en-US': 'User selector options can be copied' },
      'desc': {
        'zh-CN': '<p>设置 <code>copyable</code> 属性后，可以复制所有的 <code>tag</code> 文本内容以逗号分隔</p>\n',
        'en-US':
          '<p>After the <code>copyable</code> attribute is set, all <code>tag</code> text contents can be copied and separated by commas.</p>\n'
      },
      'codeFiles': ['tag-copy-all.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>设置 <code>disabled</code> 属性可禁用 User 组件。</p>\n',
        'en-US': '<p>Set the <code>disabled</code> property to disable the User component. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'collapse-show-overflow-tooltip',
      'name': { 'zh-CN': '超出提示', 'en-US': 'Exceeding prompt' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>collapse-show-overflow-tooltip</code> 此属性必须设置缓存 <code>cache</code> 为 <code>true</code> 时才会生效。</p>\n',
        'en-US':
          '<p>Set <code>collapse-show-overflow-tooltip</code> This attribute takes effect only when <code>cache</code> is set to <code>true</code>. </p>\n'
      },
      'codeFiles': ['collapse-show-overflow-tooltip.vue']
    },
    {
      'demoId': 'value-split',
      'name': { 'zh-CN': '值分隔符', 'en-US': 'Value Separator' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>value-split</code> 属性可指定多用户下获取到的 value 值中不同用户之间的分隔符，默认为 <code>,</code>。\n通过 <code>text-split</code> 属性可指定多用户模式下输入匹配的文本分隔符，默认为 <code>,</code> ，可选值为 <code>!~%(=+^{/}).!]&lt;-&gt;[\\,:*#;</code>。</p>\n',
        'en-US':
          '<p>You can use the <code>value-split</code> attribute to specify the separator between different users in the value obtained for multiple users. The default value is <code>,</code>. \n You can use the <code>text-split</code> attribute to specify the text separator that matches the input in multi-user mode. The default value is <code>,</code>, and the value can be <code>!~%(=+^{/}).!]&lt;-&gt;[\\,:*#;</code> . </p>\n'
      },
      'codeFiles': ['value-split.vue']
    },
    {
      'demoId': 'value-field',
      'name': { 'zh-CN': '取值字段映射', 'en-US': 'Value Field Mapping' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>value-field</code> 属性可指定获取到的 value 值的形式，默认为 userId，还包括 userAccount。</p>\n',
        'en-US':
          '<p>The <code>value-field</code> attribute specifies the format of the obtained value. The default value is userId and userAccount are also included. </p>\n'
      },
      'codeFiles': ['value-field.vue']
    },
    {
      'demoId': 'text-field',
      'name': { 'zh-CN': '显示字段映射', 'en-US': 'Display Field Mapping' },
      'desc': {
        'zh-CN': '<p>通过 <code>text-field</code> 属性可指定显示用户的哪个字段信息。</p>\n',
        'en-US':
          '<p>You can use the <code>text-field</code> attribute to specify the field of the user to be displayed. </p>\n'
      },
      'codeFiles': ['text-field.vue']
    },
    {
      'demoId': 'cache-users',
      'name': { 'zh-CN': '缓存用户', 'en-US': 'Cache User' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>cache</code> 属性指定用户数据是否缓存，默认为缓存。\n\n<code>cache-key</code> 属性可以自定义缓存的 key 值，默认为 tiny-user 。\n\n<code>cache-fields</code> 属性用于指定缓存哪些用户数据。</p>\n',
        'en-US':
          '<p>The <code>cache</code> attribute specifies whether user data is cached. The default value is cached. The \n\n<code>cache-key</code> attribute can be used to customize the cache key value. The default value is tiny-user. The \n\n<code>cache-fields</code> property is used to specify which user data is cached. </p>\n'
      },
      'codeFiles': ['cache-users.vue']
    },
    {
      'demoId': 'delay-load',
      'name': { 'zh-CN': '延时加载', 'en-US': 'Delayed loading' },
      'desc': {
        'zh-CN': '<p>通过 <code>delay</code> 属性指定延时加载的时间，单位是毫秒。</p>\n',
        'en-US': '<p>The <code>delay</code> attribute specifies the loading delay, in milliseconds. </p>\n'
      },
      'codeFiles': ['delay-load.vue']
    },
    {
      'demoId': 'load-after-input-the-length',
      'name': { 'zh-CN': '输入完指定长度后加载', 'en-US': 'Load after the specified length is entered.' },
      'desc': {
        'zh-CN': '<p>通过 <code>suggest-length</code> 属性可指定输入多少个字符后开始请求服务。</p>\n',
        'en-US':
          '<p>You can use the <code>suggest-length</code> attribute to specify the number of characters to start requesting services. </p>\n'
      },
      'codeFiles': ['load-after-input-the-length.vue']
    },
    {
      'demoId': 'event-change',
      'name': { 'zh-CN': '值改变事件', 'en-US': 'Value change event' },
      'desc': {
        'zh-CN': '<p>通过 <code>change</code> 事件能获取用户类型。</p>\n',
        'en-US': '<p>The user type can be obtained through the <code>change</code> event. </p>\n'
      },
      'codeFiles': ['event-change.vue']
    },
    {
      'demoId': 'event-error',
      'name': { 'zh-CN': '用户查询错误提示', 'en-US': 'User query error message' },
      'desc': {
        'zh-CN': '<p>通过 <code>error</code> 事件能获取查询失败的输入。</p>\n',
        'en-US': '<p>The <code>error</code> event can be used to obtain the input that fails to be queried. </p>\n'
      },
      'codeFiles': ['event-error.vue']
    },
    {
      'demoId': 'user-options',
      'name': { 'zh-CN': '自定义选项文本', 'en-US': 'Custom Option Text' },
      'desc': {
        'zh-CN': '<p>通过 <code>options</code> 插槽设置自定义下拉选项文本。</p>\n',
        'en-US': '<p>Sets the custom drop-down option text through the <code>options</code> slot. </p>\n'
      },
      'codeFiles': ['user-options.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>service</code> 属性可自定义用户服务,当用户在文本框中输入准确的账号时,会在下拉菜单中出现此用户。\n通过 <code>sort-by-fetch-data</code> 联想时下拉框的数据顺序和接口返回的数据顺序一致</p>\n',
        'en-US':
          '<p>You can customize the user service through the <code>service</code> attribute. When a user enters an accurate account in the text box, the user is displayed in the drop-down menu. \nThe data sequence in the drop-down list box during <code>sort-by-fetch-data</code> association is the same as that returned by the interface.</p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'custom-sort',
      'name': { 'zh-CN': '自定义排序', 'en-US': 'Custom Sorting' },
      'desc': {
        'zh-CN': '<p>通过 <code>sortable</code> 属性引用 <code>sortablejs</code> 进行排序。</p>\n',
        'en-US': '<p> uses the <code>sortable</code> attribute to reference <code>sortablejs</code> for sorting. </p>\n'
      },
      'codeFiles': ['custom-sort.vue']
    },
    {
      'demoId': 'user-select-size',
      'name': { 'zh-CN': '尺寸设置', 'en-US': 'Size Settings' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性可指定用户输入框的尺寸，包括 medium、small、mini 三个选项。</p>\n',
        'en-US':
          '<p>You can use the <code>size</code> attribute to specify the size of the text box, including medium, small, and mini. </p>\n'
      },
      'codeFiles': ['user-select-size.vue']
    }
  ],
  apis: [
    {
      'name': 'user',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '配置默认值', 'en-US': 'Default value' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'tag-selectable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启输入框中已选择的选项可复制',
            'en-US': 'Whether to enable copying of selected options in the text box'
          },
          'demoId': 'tag-copy'
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启多用户形式，默认为 false ',
            'en-US': 'Whether to enable the multi-user mode. The default value is false.'
          },
          'demoId': 'multiple-users'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用户组件', 'en-US': 'Whether to disable the user component' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'value-split',
          'type': 'string',
          'defaultValue': '该属性的默认值为 ,',
          'desc': { 'zh-CN': '值分隔符', 'en-US': 'Value Separator' },
          'demoId': 'value-split'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'sort-by-fetch-data',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '联想时下拉框的数据顺序和接口返回的数据顺序一致',
            'en-US':
              'The data sequence in the drop-down list box during association is the same as that returned by the interface.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'textSplit',
          'type': 'string',
          'defaultValue': '文本粘贴复制查询时的分割符，该属性的默认值为 ,',
          'desc': { 'zh-CN': '文本分隔符', 'en-US': 'Text separator' },
          'demoId': 'value-split'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 userId',
          'desc': { 'zh-CN': '取值字段映射', 'en-US': 'Value Field Mapping' },
          'demoId': 'value-field'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 userCN',
          'desc': { 'zh-CN': '显示字段映射', 'en-US': 'Display field mapping' },
          'demoId': 'text-field'
        },
        {
          'name': 'cache',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否缓存用户数据', 'en-US': 'Whether to cache user data' },
          'demoId': 'cache-users'
        },
        {
          'name': 'cache-key',
          'type': 'string',
          'defaultValue': '该属性的默认值为 tiny-user',
          'desc': { 'zh-CN': '设置缓存数据的 key 值', 'en-US': 'Set the key value of cached data.' },
          'demoId': 'cache-users'
        },
        {
          'name': 'delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 600 毫秒',
          'desc': { 'zh-CN': '设置延时加载的时间', 'en-US': 'Set the loading delay time.' },
          'demoId': 'delay-load'
        },
        {
          'name': 'suggest-length',
          'type': 'number',
          'defaultValue': '该属性的默认值为 3',
          'desc': { 'zh-CN': '设置输入指定长度完成后进行加载', 'en-US': 'Load after the input length is set.' },
          'demoId': 'load-after-input-the-length'
        },
        {
          'name': 'cache-fields',
          'type': 'Array',
          'defaultValue': '该属性的默认值为 []',
          'desc': { 'zh-CN': '设置需要缓存的用户数据', 'en-US': 'Set the user data to be cached.' },
          'demoId': 'cache-users'
        },
        {
          'name': 'fetchW3Accounts',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义批量查询用户服务', 'en-US': 'User-defined batch query service' },
          'demoId': 'custom-service'
        },
        {
          'name': 'fetchSuggestUser',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义输入查询服务', 'en-US': 'Customized input query service' },
          'demoId': 'custom-service'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置输入框占位文本', 'en-US': 'Set the placeholder text in the text box' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'collapse-tags',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '多用户时是否折叠标签',
            'en-US': 'Whether to collapse tags when there are multiple users'
          },
          'demoId': 'multiple-users-tag'
        },
        {
          'name': 'collapse-show-overflow-tooltip',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否省略显示超出一行的数据并有tooltip提示',
            'en-US': 'Whether to omit the data that exceeds one line and display a tooltip.'
          },
          'demoId': 'collapse-show-overflow-tooltip'
        },
        {
          'name': 'sortable',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义用户拖拽排序，该属性引用 sortablejs 插件进行排序',
            'en-US': 'User-defined drag-and-drop sorting. This attribute references the sortablejs plug-in for sorting.'
          },
          'demoId': 'custom-sort'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置用户组件尺寸', 'en-US': 'Set the user component size' },
          'demoId': 'user-select-size'
        },
        {
          'name': 'allow-copy',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false，表示不能复制',
          'desc': {
            'zh-CN': '搜索单选场景，是否允许复制输入框的内容;属性会透传给内部的 Select 组件，参考 Select 示例',
            'en-US':
              'Indicates whether content in the text box can be copied in the single-choice search scenario. The attribute is transparently transferred to the internal Select component. For details, see the Select example.'
          },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'error',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入未匹配到用户信息时触发',
            'en-US': 'This event is triggered when no user information is matched.'
          },
          'demoId': 'event-error'
        },
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '值发生变化时触发', 'en-US': 'This event is triggered when the value changes.' },
          'demoId': 'event-change'
        }
      ],
      'slots': [
        {
          'name': 'options',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选项文本', 'en-US': 'Option Text' },
          'demoId': 'user-options'
        }
      ]
    }
  ]
}
