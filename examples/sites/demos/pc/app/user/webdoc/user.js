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
        'zh-CN': '<p>注意 User 组件请求的是 mock 数据，其他用户查询不了，开发时请用真实服务。</p>\n',
        'en-US':
          '<p>Note that the User component requests mock data, which cannot be queried by other users. Use the real service during development. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple-users',
      name: {
        'zh-CN': '多用户',
        'en-US': 'Multi-User'
      },
      desc: {
        'zh-CN': '<p>设置 <code>multiple</code> 属性即可启用多用户形式。</p>\n',
        'en-US': '<p>Set the <code>multiple</code> property to enable the multi-user mode. </p>\n'
      },
      codeFiles: ['multiple-users.vue']
    },
    {
      demoId: 'multiple-users-tag',
      name: {
        'zh-CN': '折叠 Tag',
        'en-US': 'Collapse Tag'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>multiple</code> 属性即可启用多用户形式。\n通过 <code>collapse-tags</code> 配置多用户模式下是否展示折叠标签，默认为 false。</p>\n',
        'en-US':
          '<p>Set the <code>multiple</code> property to enable the multi-user mode. \n Use <code>collapse-tags</code> to configure whether to display collapsed tags in multi-user mode. The default value is false. </p>\n'
      },
      codeFiles: ['multiple-users-tag.vue']
    },
    {
      demoId: 'hide-selected',
      name: {
        'zh-CN': '隐藏已选择用户',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>hide-selected</code> 属性为 <code>true</code>，过滤搜索结果，已选择的人员不出现在搜索列表中。默认为 <code>false</code>，表示不过滤。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['hide-selected.vue']
    },
    {
      demoId: 'multiple-users-hover-expand',
      name: {
        'zh-CN': '折叠 Tag， hover 展开',
        'en-US': 'Collapse Tag'
      },
      desc: {
        'zh-CN':
          '<p>多选时通过设置 <code>hover-expand</code> 为 true ，默认折叠 tag, hover 时展示所有 tag。tag 超出隐藏并展示 tooltip。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['multiple-users-hover-expand.vue']
    },
    {
      demoId: 'allow-copy',
      name: {
        'zh-CN': '单用户场景支持复制',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过 <code>allow-copy</code> 设置输入框账号可通过鼠标选中，然后按 Ctrl + C 或右键进行复制。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['allow-copy.vue']
    },
    {
      demoId: 'tag-copy',
      name: {
        'zh-CN': '多用户场景支持复制',
        'en-US': 'User selector options can be copied'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tag-selectable</code> 输入框中已选择的选项可通过鼠标选择，然后按 Ctrl + C 或右键进行复制。</p>\n',
        'en-US':
          '<p>You can select an option in the <code>tag-selectable</code> text box with the mouse, and then press Ctrl + C or right-click to copy it. </p>\n'
      },
      codeFiles: ['tag-copy.vue']
    },
    {
      demoId: 'tag-copy-all',
      name: {
        'zh-CN': 'user选择器选项可一键复制',
        'en-US': 'User selector options can be copied'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>copyable</code> 属性后，可以点击复制按钮复制所有的 <code>tag</code> 文本内容以逗号分隔</p>\n',
        'en-US':
          '<p>After the <code>copyable</code> attribute is set, all <code>tag</code> text contents can be copied and separated by commas.</p>\n'
      },
      codeFiles: ['tag-copy-all.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>设置 <code>disabled</code> 属性可禁用 User 组件。</p>\n',
        'en-US': '<p>Set the <code>disabled</code> property to disable the User component. </p>\n'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'collapse-show-overflow-tooltip',
      name: {
        'zh-CN': '超出提示',
        'en-US': 'Exceeding prompt'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>collapse-show-overflow-tooltip</code> 此属性必须设置缓存 <code>cache</code> 为 <code>true</code> 时才会生效。</p>\n',
        'en-US':
          '<p>Set <code>collapse-show-overflow-tooltip</code> This attribute takes effect only when <code>cache</code> is set to <code>true</code>. </p>\n'
      },
      codeFiles: ['collapse-show-overflow-tooltip.vue']
    },
    {
      demoId: 'value-split',
      name: {
        'zh-CN': '值分隔符',
        'en-US': 'Value Separator'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>value-split</code> 属性可指定多用户下获取到的 value 值中不同用户之间的分隔符，默认为 <code>,</code>。\n通过 <code>text-split</code> 属性可指定多用户模式下输入匹配的文本分隔符，默认为 <code>,</code> ，可选值为 <code>!~%(=+^{/}).!]&lt;-&gt;[\\,:*#;</code>。</p>\n',
        'en-US':
          '<p>You can use the <code>value-split</code> attribute to specify the separator between different users in the value obtained for multiple users. The default value is <code>,</code>. \n You can use the <code>text-split</code> attribute to specify the text separator that matches the input in multi-user mode. The default value is <code>,</code>, and the value can be <code>!~%(=+^{/}).!]&lt;-&gt;[\\,:*#;</code> . </p>\n'
      },
      codeFiles: ['value-split.vue']
    },
    {
      demoId: 'value-field',
      name: {
        'zh-CN': '取值字段映射',
        'en-US': 'Value Field Mapping'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>value-field</code> 属性可指定获取到的 value 值的形式，默认为 userId，还包括 userAccount。</p>\n',
        'en-US':
          '<p>The <code>value-field</code> attribute specifies the format of the obtained value. The default value is userId and userAccount are also included. </p>\n'
      },
      codeFiles: ['value-field.vue']
    },
    {
      demoId: 'text-field',
      name: {
        'zh-CN': '显示字段映射',
        'en-US': 'Display Field Mapping'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text-field</code> 属性可指定显示用户的哪个字段信息。</p>\n',
        'en-US':
          '<p>You can use the <code>text-field</code> attribute to specify the field of the user to be displayed. </p>\n'
      },
      codeFiles: ['text-field.vue']
    },
    {
      demoId: 'cache-users',
      name: {
        'zh-CN': '缓存用户',
        'en-US': 'Cache User'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>cache</code> 属性指定用户数据是否缓存，默认为缓存。\n\n<code>cache-key</code> 属性可以自定义缓存的 key 值，默认为 tiny-user 。\n\n<code>cache-fields</code> 属性用于指定缓存哪些用户数据。</p>\n',
        'en-US':
          '<p>The <code>cache</code> attribute specifies whether user data is cached. The default value is cached. The \n\n<code>cache-key</code> attribute can be used to customize the cache key value. The default value is tiny-user. The \n\n<code>cache-fields</code> property is used to specify which user data is cached. </p>\n'
      },
      codeFiles: ['cache-users.vue']
    },
    {
      demoId: 'delay-load',
      name: {
        'zh-CN': '延时加载',
        'en-US': 'Delayed loading'
      },
      desc: {
        'zh-CN': '<p>通过 <code>delay</code> 属性指定延时加载的时间，单位是毫秒。</p>\n',
        'en-US': '<p>The <code>delay</code> attribute specifies the loading delay, in milliseconds. </p>\n'
      },
      codeFiles: ['delay-load.vue']
    },
    {
      demoId: 'load-after-input-the-length',
      name: {
        'zh-CN': '输入完指定长度后加载',
        'en-US': 'Load after the specified length is entered.'
      },
      desc: {
        'zh-CN': '<p>通过 <code>suggest-length</code> 属性可指定输入多少个字符后开始请求服务。</p>\n',
        'en-US':
          '<p>You can use the <code>suggest-length</code> attribute to specify the number of characters to start requesting services. </p>\n'
      },
      codeFiles: ['load-after-input-the-length.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'Value change event'
      },
      desc: {
        'zh-CN': '<p>通过 <code>change</code> 事件能获取用户类型。</p>\n',
        'en-US': '<p>The user type can be obtained through the <code>change</code> event. </p>\n'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'event-error',
      name: {
        'zh-CN': '用户查询错误提示',
        'en-US': 'User query error message'
      },
      desc: {
        'zh-CN': '<p>通过 <code>error</code> 事件能获取查询失败的输入。</p>\n',
        'en-US': '<p>The <code>error</code> event can be used to obtain the input that fails to be queried. </p>\n'
      },
      codeFiles: ['event-error.vue']
    },
    {
      demoId: 'user-options',
      name: {
        'zh-CN': '自定义选项文本',
        'en-US': 'Custom Option Text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>options</code> 插槽设置自定义下拉选项文本。</p>\n',
        'en-US': '<p>Sets the custom drop-down option text through the <code>options</code> slot. </p>\n'
      },
      codeFiles: ['user-options.vue']
    },
    {
      demoId: 'no-data-text',
      name: {
        'zh-CN': '自定义选自定义空数据文本项文本',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过 <code>no-data-text</code> 设置未查询到数据时的空数据提示。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['no-data-text.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>service</code> 属性可自定义用户服务,当用户在文本框中输入准确的账号时,会在下拉菜单中出现此用户。\n通过 <code>sort-by-fetch-data</code> 联想时下拉框的数据顺序和接口返回的数据顺序一致</p>\n',
        'en-US':
          '<p>You can customize the user service through the <code>service</code> attribute. When a user enters an accurate account in the text box, the user is displayed in the drop-down menu. \nThe data sequence in the drop-down list box during <code>sort-by-fetch-data</code> association is the same as that returned by the interface.</p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'custom-sort',
      name: {
        'zh-CN': '自定义排序',
        'en-US': 'Custom Sorting'
      },
      desc: {
        'zh-CN': '<p>通过 <code>sortable</code> 属性引用 <code>sortablejs</code> 进行排序。</p>\n',
        'en-US': '<p> uses the <code>sortable</code> attribute to reference <code>sortablejs</code> for sorting. </p>\n'
      },
      codeFiles: ['custom-sort.vue']
    },
    {
      demoId: 'user-select-size',
      name: {
        'zh-CN': '尺寸设置',
        'en-US': 'Size Settings'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性可指定用户输入框的尺寸，包括 medium、small、mini 三个选项。</p>\n',
        'en-US':
          '<p>You can use the <code>size</code> attribute to specify the size of the text box, including medium, small, and mini. </p>\n'
      },
      codeFiles: ['user-select-size.vue']
    },
    {
      demoId: 'hidden-tips-disable',
      name: {
        'zh-CN': '禁用多选不展示用户信息',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>show-tips</code> 属性可展示用户信息，默认展示。</p>\n<p>设置 <code>max-width</code> 属性可设置 tips 展示信息最大宽度，默认`200`。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['hidden-tips-disable.vue']
    },
    {
      demoId: 'batch',
      name: {
        'zh-CN': '合并请求用户信息',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>在进行批量发起用户信息查询时，例如同页面使用了多处 user 组件，通过配置 <code>batch</code> 为 <code>true</code> 将用户信息查询进行合并（组件内部会进行请求合并）。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['batch.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '只读',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过 <code>display-only</code> 属性设置只读态。</p>\n',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['display-only.vue']
    }
  ]
}
