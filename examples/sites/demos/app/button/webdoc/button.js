export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '使用 <code>type</code>、<code>plain</code>、<code>round</code> 和 <code>circle</code> 来定义按钮的样式。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '图标按钮', 'en-US': 'Icon Button' },
      'desc': {
        'zh-CN':
          '<p>指定 <code>icon</code> 属性值为需要的 Icon 图标即可展示为图标按钮。</p>\n<div class="tip custom-block"><p class="custom-block-title">Icon 图标用法</p>\n<p>先从 <code>@opentiny/vue-icon</code> 中导入需要的 Icon，再在 data 函数中初始化 Icon 组件并赋值给一个属性。最后在模板中通过 <code>icon</code> 属性进行引用。\n通过 <code>native-type</code> 设置 button、image 两种按钮的表单类型。该属性仅当属性 type 为 button 或 image 时使用。该属性的可选值为 button / submit / reset。</p>\n</div>\n',
        'en-US':
          '<p>Specify the <code>icon</code> attribute value to display the icon as an icon button. </p>\n<div class="tip custom-block"><p class="custom-block-title">Icon Icon Usage</p>\n<p>Import the required Icon from <code>@opentiny/vue-icon</code>, initialize the Icon component in the data function, and assign a value to an attribute. Use the <code>icon</code> attribute to reference the template. \n Use <code>native-type</code> to set the form type of the button and image buttons. This attribute is used only when type is set to button or image. The optional values of this attribute are button / submit / reset. </p>\n</div>\n'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'text',
      'name': { 'zh-CN': '文字按钮', 'en-US': 'Text button' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>type</code> 属性为 <code>text</code> 即为文字按钮，可在标签子级或者通过 <code>text</code> 属性设置显示内容。</p>\n',
        'en-US':
          '<p>Set the <code>type</code> attribute to <code>text</code>, which is a text button. You can set the content to be displayed at the tag child level or through the <code>text</code> attribute. </p>\n'
      },
      'codeFiles': ['text.vue']
    },
    {
      'demoId': 'round',
      'name': { 'zh-CN': '按钮圆角', 'en-US': 'Button Fillet' },
      'desc': {
        'zh-CN': '<p>通过 <code>round</code> 属性设置是否圆角按钮。</p>\n',
        'en-US': '<p>The <code>round</code> attribute is used to set whether to round the button. </p>\n'
      },
      'codeFiles': ['round.vue']
    },
    {
      'demoId': 'image',
      'name': { 'zh-CN': '图片按钮', 'en-US': 'Picture button' },
      'desc': {
        'zh-CN': '<p>以默认插槽的用法嵌入 img 标签，并引入图片。</p>\n',
        'en-US': '<p>Embeds the img tag with the default slot usage and introduces the image. </p>\n'
      },
      'codeFiles': ['image.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '主题样式', 'en-US': 'Theme Style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>type</code> 属性可以设置不同的主题样式，主要包括 primary、success、info、warning、danger、text。</p>\n',
        'en-US':
          '<p>You can set different theme styles through the <code>type</code> attribute, including primary, success, info, warning, danger, and text. </p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'loading',
      'name': { 'zh-CN': '显示加载中', 'en-US': 'Display Loading' },
      'desc': {
        'zh-CN': '<p>直接配置 <code>loading</code> 属性为 true，即可展示为加载中的样式。</p>\n',
        'en-US': '<p>Set <code>loading</code> to true to display the style being loaded. </p>\n'
      },
      'codeFiles': ['loading.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置按钮不同的大小尺寸，包括 large、medium、small、mini 四种不同大小。不设置时为默认尺寸。</p>\n',
        'en-US':
          '<p>Use the <code>size</code> attribute to set the button size, including large, medium, small, and mini. If this parameter is not set, the default size is used. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'plain',
      'name': { 'zh-CN': '朴素按钮', 'en-US': 'Simple button' },
      'desc': {
        'zh-CN': '<p>配置 <code>plain</code> 属性为 true，即可展示为朴素按钮的形式。</p>\n',
        'en-US': '<p>Set the <code>plain</code> attribute to true. The button is displayed as a simple button. </p>\n'
      },
      'codeFiles': ['plain.vue']
    },
    {
      'demoId': 'reset-time',
      'name': { 'zh-CN': '防止表单重复提交', 'en-US': 'Prevent repeated submission of forms' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>reset-time</code> 属性可设置单击后按钮禁用的时长，默认的禁用时长为 1000 毫秒。\n可用于防止按钮连续点击出现表单重复提交的问题。</p>\n',
        'en-US':
          '<p>You can use the <code>reset-time</code> attribute to set the duration for which the button is disabled. The default duration is 1000 ms. \n This parameter can be used to prevent repeated submission of the form when you click the button continuously. </p>\n'
      },
      'codeFiles': ['reset-time.vue']
    },
    {
      'demoId': 'autofocus',
      'name': { 'zh-CN': '默认聚焦', 'en-US': 'Default Focus' },
      'desc': {
        'zh-CN': '<p>配置 <code>autofocus</code> 属性的按钮，将默认展示为聚焦状态。</p>\n',
        'en-US': '<p>The <code>autofocus</code> attribute button is displayed in the focused state by default. </p>\n'
      },
      'codeFiles': ['autofocus.vue']
    },
    {
      'demoId': 'click',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>按钮的单击事件，该示例中单击按钮将会出现提示信息。</p>\n',
        'en-US':
          'Click event of the <p> button. In this example, a message is displayed when a button is clicked. </p>\n'
      },
      'codeFiles': ['click.vue']
    },
    {
      'demoId': 'dynamic-disabled',
      'name': { 'zh-CN': '动态禁用按钮', 'en-US': 'Dynamic Disable Button' },
      'desc': {
        'zh-CN': '<p>设置 <code>disabled</code> 属性为 true 后，可以禁用按钮。</p>\n',
        'en-US': '<p>After <code>disabled</code> is set to true, the button can be disabled. </p>\n'
      },
      'codeFiles': ['dynamic-disabled.vue']
    }
  ],
  apis: [
    {
      'name': 'button',
      'type': 'component',
      'properties': [
        {
          'name': 'autofocus',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否默认聚焦', 'en-US': 'Whether to focus by default' },
          'demoId': 'autofocus'
        },
        {
          'name': 'circle',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否圆形按钮', 'en-US': 'Round button' },
          'demoId': 'circle'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置按钮是否被禁用。', 'en-US': 'Sets whether the button is disabled.' },
          'demoId': 'dynamic-disabled'
        },
        {
          'name': 'icon',
          'type': 'Object , String',
          'defaultValue': '',
          'desc': { 'zh-CN': 'svg 图片对象', 'en-US': 'svg Image Object' },
          'demoId': 'icon'
        },
        {
          'name': 'loading',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否加载中状态', 'en-US': 'Loading status' },
          'demoId': 'loading'
        },
        {
          'name': 'native-type',
          'type': 'String',
          'defaultValue': '该属性的默认值为 button',
          'desc': {
            'zh-CN':
              '设置 button、image 两种按钮的表单类型。该属性仅当属性 type 为 button 或 image 时使用。;原生 type 属性;该属性的可选值为 button / submit / reset',
            'en-US':
              'Set the form type of the button and image buttons. This attribute is used only when type is set to button or image. ;Native type attribute; The options of this attribute are button / submit / reset'
          },
          'demoId': 'icon'
        },
        {
          'name': 'plain',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否朴素按钮', 'en-US': 'Simple button' },
          'demoId': 'plain'
        },
        {
          'name': 'reset-time',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 1000',
          'desc': {
            'zh-CN': '设置按钮禁用时间，防止重复提交，单位毫秒',
            'en-US': 'Set the button disable time, in milliseconds, to prevent repeated submission.'
          },
          'demoId': 'reset-time'
        },     
        {
          'name': 'round',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否圆角按钮', 'en-US': 'Whether to round the corner button' },
          'demoId': 'round'
        },  
        {
          'name': 'text',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置按钮显示的文本，可配置国际化。',
            'en-US': 'Sets the text displayed on the button. The text can be internationalized.'
          },
          'demoId': 'text'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展示按钮不同的状态;该属性的可选值为 primary / success / warning / danger / info / text',
            'en-US':
              'Displays different button states. The optional values of this attribute are primary / success / warning / danger / info / text'
          },
          'demoId': 'type'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置当按钮被点击时触发的回调函数。',
            'en-US': 'Sets the callback function triggered when a button is clicked.'
          },
          'demoId': 'click'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'image'
        }
      ]
    }
  ]
}
