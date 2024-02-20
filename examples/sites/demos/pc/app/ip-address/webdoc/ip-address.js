export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置绑定值， <code>type</code> 设置类型，可选值为 <code>IPv4</code> 、<code>IPv6</code> 。</p>',
        'en-US':
          '<p>Set the binding value through <code>v-model</code> , and set the type through <code>type</code> . The optional values are <code>IPv4</code> , <code>IPv6</code>.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'delimiter',
      name: {
        'zh-CN': '分隔符',
        'en-US': 'Delimiter'
      },
      desc: {
        'zh-CN': '<p>通过 <code>delimiter</code> 设置分隔符(图标类)，或通过默认插槽设置分隔符。</p>',
        'en-US':
          '<p>The delimiter can be set through the <code>delimiter</code> property (icon class) or through the default slot. </p>'
      },
      codeFiles: ['delimiter.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '文本只读',
        'en-US': 'Read-only text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>readonly</code> 设置文本的只读行。</p>',
        'en-US': '<p>Use the <code>readonly</code> attribute to set the read-only line of the text.</p>'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置文本是否禁用。</p>',
        'en-US': '<p>The <code>disabled</code> attribute is used to set whether to disable text </p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Text box size'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置尺寸，可选值有 <code>medium</code> 、<code>small</code> 、<code>mini</code> ，不设置则为默认尺寸。</p>',
        'en-US':
          '<p>Set the size through <code>size</code> , and the optional values are <code>medium</code> , <code>small</code> , <code>mini</code> .</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p>\n          文本框获取焦点时触发 <code>focus</code> 事件，失去焦点时触发 <code>blur</code> 事件。<br />\n          文本框内容改变后触发 <code>change</code> 事件。<br />\n          文本框输入时触发 <code>input</code> 事件。<br />\n          文本框内容选中时触发 <code>select</code> 事件。<br />\n        </p>',
        'en-US':
          '<p>\n          The<code>focus</code>event is triggered when the text box gains focus, and the<code>blur</code>event is triggered when the focus is lost.<br/>\n          Trigger the<code>change</code>event after the content of the text box changes.<br/>\n          Trigger the<code>input</code>event when entering a text box.<br/>\n          Trigger the<code>select</code>event when the content of the text box is selected.<br/>\n        </p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
