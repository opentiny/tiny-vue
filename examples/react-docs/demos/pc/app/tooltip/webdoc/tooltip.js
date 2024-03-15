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
        'zh-CN': `通过 <code>content</code> 属性指定提示的内容。<br>
           通过 <code>placement</code> 属性指定提示的显示位置，支持12个显示位置。<br>
           通过 <code>effect</code> 属性指定提示的效果。<br>`,
        'en-US': `Specify the content of the prompt via the <code>content</code> attribute <br>
          Use the <code>placement</code> property to specify the display location of the prompt. 12 display locations are supported <br>
          Specify the effect of the prompt with the <code>effect</code> property <br>`
      },
      codeFiles: ['base.tsx']
    }
  ]
}
