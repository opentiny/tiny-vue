export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基础用法', 'en-US': '' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': '' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'arror-position',
      'name': { 'zh-CN': '引导框箭头距离', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>pop-position</code> 属性设置箭头方向。<br>该属性的可选值为 <code>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</code> <br>若存在多个步骤，需要单独给每个步骤设置不同的展示位置，可以在 <code>dom-data</code> 里面添加 <code>popPosition</code> 属性并赋值，若存在单独设置的箭头方向，则会覆盖全局的箭头方向</p>\n',
        'en-US': ''
      },
      'codeFiles': ['arror-position.vue']
    },
    {
      'demoId': 'callback',
      'name': { 'zh-CN': '窗口的事件回调', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>窗口的事件回调<br>在 <code>dom-data<code> 中使用：<br> <code>beforeShow</code> ：展示前回调<br> <code>show</code> ：展示回调<br> <code>beforeHide</code> ：隐藏前回调<br> <code>hide</code> ：隐藏回调<br> <code>cancel</code> ：关闭取消回调<br> <code>complete</code> ：完成回调<br>  <code>destroy</code> ：销毁回调</p>',
        'en-US': ''
      },
      'codeFiles': ['callback.vue']
    },
    {
      'demoId': 'content-step',
      'name': { 'zh-CN': '纯段落用户引导', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过添加 <code>only-content</code> 类名实现纯段落用户引导</p>\n', 'en-US': '' },
      'codeFiles': ['content-step.vue']
    },
    {
      'demoId': 'content-steps',
      'name': { 'zh-CN': '多步骤纯段落用户引导', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过添加 <code>only-content</code> 类名实现纯段落用户引导</p>\n', 'en-US': '' },
      'codeFiles': ['content-steps.vue']
    },
    {
      'demoId': 'dom-hight',
      'name': { 'zh-CN': '高亮多处', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>在 <code>dom-data</code> 里面通过 <code>hightBox</code>属性添加需要高亮的元素</p>\n',
        'en-US': ''
      },
      'codeFiles': ['dom-hight.vue']
    },
    {
      'demoId': 'guide-poistion-mainAxis',
      'name': { 'zh-CN': '引导框主轴（纵轴）距离', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过设置 <code>main-axis</code> 大小来设置主轴（纵轴）距离</p>\n', 'en-US': '' },
      'codeFiles': ['guide-poistion-mainAxis.vue']
    },
    {
      'demoId': 'guide-poistion-crossAxis',
      'name': { 'zh-CN': '引导框横轴距离', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过设置 <code>cross-axis</code> 大小来设置横轴距离</p>\n', 'en-US': '' },
      'codeFiles': ['guide-poistion-crossAxis.vue']
    },
    {
      'demoId': 'guide-poistion-alignmentAxis',
      'name': { 'zh-CN': '引导框对齐轴距离', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过设置 <code>alignment-axis</code> 大小来设置对齐轴距离</p>\n', 'en-US': '' },
      'codeFiles': ['guide-poistion-alignmentAxis.vue']
    },
    {
      'demoId': 'image-text',
      'name': { 'zh-CN': '图文结合用户引导', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>可以在插槽里面添加任何 <code>html</code> 或通过 <code>dom-data</code> 里面的 <code>text</code> 属性实现图文结合用户引导</p>\n',
        'en-US': ''
      },
      'codeFiles': ['image-text.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '自定义宽高', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过添加 <code>width</code>和 <code>height</code>来自定义宽高</p>\n', 'en-US': '' },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'title-steps',
      'name': { 'zh-CN': '通过添加多个类名实现用户引导', 'en-US': '' },
      'desc': { 'zh-CN': '<p>详细用法参考如下示例</p>\n', 'en-US': '' },
      'codeFiles': ['title-steps.vue']
    },
    {
      'demoId': 'set-modal-overlay-opening',
      'name': { 'zh-CN': '设置模态叠加层开口', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p><code>modal-overlay-opening-padding</code> ：可以在模态叠加层开口周围添加的边界半径量，控制引导元素高亮范围<br><p><code>modal-overlay-opening-radius</code> ：可以在模态叠加层开口周围添加的填充量，控制引导元素高亮圆角</p>\n',
        'en-US': ''
      },
      'codeFiles': ['set-modal-overlay-opening.vue']
    }
  ],
  apis: [
    {
      'name': 'guide',
      'type': 'component',
      'properties': [
        {
          'name': 'arrow',
          'type': 'Boolean ',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示工具提示的箭头', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'pop-position',
          'type': 'String ',
          'defaultValue': 'bottom',
          'desc': {
            'zh-CN':
              '引导框箭头距离，该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
            'en-US': ''
          },
          'demoId': 'arror-position'
        },
        {
          'name': 'dom-data',
          'type': 'Array ',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '用户引导参数', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'main-axis',
          'type': 'Number ',
          'defaultValue': '18',
          'desc': { 'zh-CN': '设置引导框主轴（纵轴）距离', 'en-US': '' },
          'demoId': 'guide-poistion-mainAxis'
        },
        {
          'name': 'cross-axis',
          'type': 'Number ',
          'defaultValue': '0',
          'desc': { 'zh-CN': '设置引导框横轴距离', 'en-US': '' },
          'demoId': 'guide-poistion-crossAxis'
        },
        {
          'name': 'alignment-axis',
          'type': 'Number ',
          'defaultValue': '0',
          'desc': { 'zh-CN': '设置引导框对齐轴距离', 'en-US': '' },
          'demoId': 'guide-poistion-alignmentAxis'
        },
        {
          'name': 'width',
          'type': 'Number ',
          'defaultValue': '510',
          'desc': { 'zh-CN': '设置引导框宽度', 'en-US': '' },
          'demoId': 'size'
        },
        {
          'name': 'height',
          'type': 'Number ',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置引导框高度', 'en-US': '' },
          'demoId': 'size'
        },
        {
          'name': 'modal-overlay-opening-padding',
          'type': 'Number ',
          'defaultValue': '0',
          'desc': { 'zh-CN': '在模态叠加层开口周围添加的填充量', 'en-US': '' },
          'demoId': 'set-modal-overlay-opening'
        },
        {
          'name': 'modal-overlay-opening-radius',
          'type': 'Number ',
          'defaultValue': '0',
          'desc': { 'zh-CN': '在模态叠加层开口周围添加的边界半径量', 'en-US': '' },
          'demoId': 'set-modal-overlay-opening'
        },
        {
          'name': 'light-class',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '当元素突出显示时（即，当其步骤处于活动状态时）应用于元素的额外类', 'en-US': '' },
          'demoId': 'activeDom'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'main',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置引导框内容', 'en-US': '' },
          'demoId': 'dom-hight'
        }
      ],
      'domData-attrs': [
        {
          'name': 'title',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '表示需要设置的头部标题名', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'text',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '表示需要填入的内容区（可以是一个 html）', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'domElement',
          'type': 'String ',
          'defaultValue': '',
          'desc': {
            'zh-CN': '表示需要绑定指引的元素类名（只能是类名，若未传入则显示为上下左右居中且无指示箭头）',
            'en-US': ''
          },
          'demoId': 'base'
        },
        {
          'name': 'hightBox',
          'type': 'Array ',
          'defaultValue': '',
          'desc': { 'zh-CN': '添加需要高亮的元素的类名', 'en-US': '' },
          'demoId': 'dom-hight'
        },
        {
          'name': 'classes',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '要添加到步骤的内容元素的一串额外类', 'en-US': '' },
          'demoId': 'guide-poistion-crossAxis'
        },
        {
          'name': 'beforeShow',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '展示前回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'beforeHide',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '隐藏前回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'hide',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '隐藏回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'cancel',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '关闭取消回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'destroy',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '销毁回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'complete',
          'type': 'Fnction ',
          'defaultValue': '',
          'desc': { 'zh-CN': '完成回调', 'en-US': '' },
          'demoId': 'callback'
        },
        {
          'name': 'button',
          'type': 'Array ',
          'defaultValue': '',
          'desc': { 'zh-CN': '表示需要设置的按钮组', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'button.text',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '表示需要设置的按钮名', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'button.action',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': "表示需要执行的步骤，包含'next(下一步)、back(返回)、complete(完成)'", 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'button.classes',
          'type': 'String ',
          'defaultValue': '',
          'desc': { 'zh-CN': '表示可以为按钮设置的样式类名', 'en-US': '' },
          'demoId': 'title-steps'
        },
        {
          'name': 'button.secondary',
          'type': 'Boolean ',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '表示为按钮设置透明样式', 'en-US': '' },
          'demoId': 'content-steps'
        }
      ]
    }
  ]
}
